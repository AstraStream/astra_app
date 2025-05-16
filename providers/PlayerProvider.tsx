"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useRef,
    useEffect
} from "react";
import {
    Howl,
    Howler
} from "howler";

interface IPlayerContext {
    currentTrack: ITrack | null;
    playlist: ITrack[];
    volume: number;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    isMuted: boolean;
    point:number;
    playTrack: (
        track: ITrack,
        playlist: ITrack[]
    ) => void;
    togglePlay: () => void;
    playNext: () => void;
    playPrevious: () => void;
    seek: (time: number) => void;
    updateVolume: (volume: number) => void;
}

interface IPlayerProvider {
    children: ReactNode
}

const POINTS_PER_INTERVAL = 10;
const INTERVAL_SECONDS = 5;

const PlayerContext = createContext<IPlayerContext | undefined>(undefined);

export const PlayerProvider = ({
    children
}: IPlayerProvider) => {
    const [playlist, setPlaylist] = useState<ITrack[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.5);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [secondsPlayed, setSecondsPlayed] = useState(0);
    const [point, setPoint] = useState(0);

    const howlRef = useRef<Howl | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const pointsTimerRef = useRef<NodeJS.Timeout | null>(null);

     // Cleanup timer
     const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    // Update time periodically
    const startTimer = () => {
        stopTimer();
        timerRef.current = setInterval(() => {
            const seekTime = howlRef.current?.seek();
            if (typeof seekTime === "number") {
                setCurrentTime(seekTime);
            }
        }, 500);
    };

    // Play Track using Howler
    const playTrack = (
        track: ITrack,
        list: ITrack[]  = playlist
    ) => {
        try {
            if (howlRef.current) {
                howlRef.current.stop();
                howlRef.current.unload();
            }
    
            const sound = new Howl({
                src: [track.url],
                html5: true,
                volume,
                onplay: () => {
                    setDuration(howlRef.current?.duration() as number);
                    
                    // Set isPlaying state
                    setIsPlaying(true);
    
                    // Update audio
                    startTimer();
                },
                onplayerror: (_, err) => {
                    sound.once('unlock', () => {
                        sound.play();
                    });
                },
                onend: () => {
                    setTimeout(() => playNext(), 100); // 100ms delay
                },
                onpause: () => {
                    setIsPlaying(false);
                    cancelAnimationFrame(timerRef.current as any);
                },
                onstop: () => {
                    setIsPlaying(false);
                    cancelAnimationFrame(timerRef.current as any);
                    setCurrentTime(0);
                }
            });
    
            howlRef.current = sound;
            
            // Play audio
            sound.play();
    
            // Set Current
            setCurrentTrack(track);
    
            // Set playlist 
            if (list && list.length) {
                setPlaylist(list);
            }
    
            // Set MediaSession Metadata
            setMediaSessionMetadata(track);
        } catch (err) {
            console.log("Failed to play track", err); 
        }
    }

    // Resume Track
    const play = () => {
        if (howlRef.current && !howlRef.current.playing()) {
            howlRef.current.play();
            setIsPlaying(true);
            startTimer();
        }
    }

    // Pause Track
    const pause = () => {
        if (howlRef.current && howlRef.current.playing()) {
            howlRef.current.pause();
            setIsPlaying(false);
            stopTimer();
        }
    }

    // Toggle Play
    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            // Resume AudioContext of suspended (important for Safari/mobile)
            if (Howler.ctx.state === "suspended") {
                Howler.ctx.resume().then(() => {
                    play();
                });
            } else {
                play();
            }
        }
    }

    // Play Next Track
    const playNext = () => {
        console.log(currentTrack, playlist);
        if (!currentTrack || !playlist.length) return;

        const index = playlist.findIndex(t => t.id === currentTrack?.id);
        const nextTrack = playlist[(index + 1) % playlist.length];
        playTrack(nextTrack, playlist);
    }

    // Play Previous Track
    const playPrevious = () => {
        if (!currentTrack) return;

        const index = playlist.findIndex(t => t.id === currentTrack?.id);
        const prevTrack = playlist[(index - 1 + playlist.length) % playlist.length];
        playTrack(prevTrack, playlist);
    }

    // Set Track Volume
    const updateVolume = (vol: number) => {
        setVolume(vol);
        
        if (vol === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }

        howlRef.current?.volume(vol);
    } 

    // Seek Track position in seconds
    const seek = (time: number) => {
        if (howlRef.current) {
            howlRef.current.seek(time);
            setCurrentTime(time);
        }
    }

    // Set MediaSession API for lock screen controls
    const setMediaSessionMetadata = (track: ITrack) => {
        if ('mediaSession' in navigator && track) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: track.title,
              artist: track.artist,
              artwork: [
                  { 
                      src: track.image, 
                      sizes: '512x512', 
                      type: 'image/png' 
                  }
              ],
            });
  
            navigator.mediaSession.setActionHandler('play', play);
            navigator.mediaSession.setActionHandler('pause', pause);
            navigator.mediaSession.setActionHandler('previoustrack', playPrevious);
            navigator.mediaSession.setActionHandler('nexttrack', playNext);
        }
    }

    // Start/Stop seconds timer with playing toggles
    useEffect(() => {
        if (isPlaying) {
            pointsTimerRef.current = setInterval(() => {
                setSecondsPlayed(s => s + 1);
            }, 1000);
        } else {
            if (pointsTimerRef.current) {
                clearInterval(pointsTimerRef.current);
                pointsTimerRef.current = null;
            }
        }

        return () => {
            if (pointsTimerRef.current) clearInterval(pointsTimerRef.current);
        }
    }, [isPlaying]);

    // Accumulate points when play time reaches 120, award and reset counter
    useEffect(() => {
        if (secondsPlayed > 0 && secondsPlayed % INTERVAL_SECONDS === 0) {
            setPoint(s => s + POINTS_PER_INTERVAL);
        }
    }, [secondsPlayed])

    // Cleanup Howler on UnMount
    useEffect(() => {
        return () => {
          stopTimer();
          howlRef.current?.unload();
        }
      }, []);
      
    return (
        <PlayerContext.Provider value={{
            playlist,
            currentTime,
            currentTrack,
            volume,
            isPlaying,
            isMuted,
            duration,
            point,
            togglePlay,
            playTrack,
            playNext,
            playPrevious,
            seek,
            updateVolume,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => {
    const playerContext = useContext(PlayerContext);

    if (!playerContext) {
        throw new Error("usePlayer must be used within PlayerProvider");
    }

    return playerContext;
}

