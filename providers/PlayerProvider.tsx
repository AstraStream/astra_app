"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useRef,
    useEffect
} from "react";

interface IPlayerContext {
    currentTrack: ITrack | null;
    playlist: ITrack[];
    volume: number;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    isMuted: boolean;
    playTrack: (
        track: ITrack,
        playlist: ITrack[]
    ) => void;
    pause: () => void;
    play: () => void;
    playNext: () => void;
    playPrevious: () => void;
    seek: (time: number) => void;
    updateVolume: (volume: number) => void;
}

interface IPlayerProvider {
    children: ReactNode
}

const PlayerContext = createContext<IPlayerContext | undefined>(undefined);

export const PlayerProvider = ({
    children
}: IPlayerProvider) => {
    const [playlist, setPlaylist] = useState<ITrack[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(new Audio());

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        }

        const handleEnded = () => playNext();

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("ended", handleEnded);

        // Load audio metadata
        audio.addEventListener("loadedmetadata", () => {
            setDuration(audio.duration);
        });
    
        return () => {
          audio.removeEventListener("timeupdate", updateTime);
          audio.removeEventListener("ended", handleEnded);
        }
      }, []);

      useEffect(() => {
        // Setup Media Session metadata & handlers
        if ('mediaSession' in navigator && currentTrack) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: currentTrack.title,
            artist: currentTrack.artist,
            artwork: [
                { 
                    src: currentTrack.image, 
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
    }, [currentTrack]);

    // Play Track
    const playTrack = (
        track: ITrack,
        playlist: ITrack[]  = []
    ) => {
        audioRef?.current.pause();
        audioRef.current.src = track.url;
        audioRef.current.play();

        setCurrentTrack(track);

        // Add single track to Playlist array is it doesn't exist
        if (playlist.length) {
            setPlaylist(playlist);
        } else {
            setPlaylist([track]);
        }

        // Set isPlaying state
        setIsPlaying(true);

    }

    // Resume Track
    const play = () => {
        audioRef?.current.play();
        setIsPlaying(true);
    }

    // Pause Track
    const pause = () => {
        audioRef?.current.pause();
        setIsPlaying(false);
    }

    // Play Next Track
    const playNext = () => {
        const currentIndex = playlist.findIndex(t => t.id === currentTrack?.id);
        const nextTrack = playlist[(currentIndex + 1) % playlist.length];

        if (nextTrack) {
            playTrack(nextTrack, playlist);
        }
    }

    // Play Previous Track
    const playPrevious = () => {
        const currentIndex = playlist.findIndex(t => t.id === currentTrack?.id);
        const prevTrack = playlist[(currentIndex - 1 + playlist.length) % playlist.length];

        if (prevTrack) {
            playTrack(prevTrack, playlist);
        }
    }

    // Set Track Volume
    const updateVolume = (volume: number) => {
        audioRef.current.volume = volume;
        setVolume(volume);        
    } 

    // Seek Track
    const seek = (time: number) => {
        audioRef.current.currentTime = time;
    }
      

    return (
        <PlayerContext.Provider value={{
            playlist,
            currentTime,
            currentTrack,
            volume,
            isPlaying,
            isMuted,
            duration,
            playTrack,
            pause,
            play,
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

