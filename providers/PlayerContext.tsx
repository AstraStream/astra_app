"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useRef,
    useEffect
} from "react";
import { Howl } from "howler";

interface IPlayerContext {
    currentTrack: ITrack | null;
    isPlaying: boolean;
    volume: number;
    play: (trackOrList: ITrack | ITrack[], startIndex?: number) => void;
    togglePlay: () => void;
    setVolume: (v: number) => void;
    next: () => void;
    previous: () => void;
}

interface IPlayerProvider {
    children: ReactNode
}

const PlayerContext = createContext<IPlayerContext | undefined>(undefined);

export const PlayerProvider = ({
    children
}: IPlayerProvider) => {
    const [playlist, setPlaylist] = useState<ITrack[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
    const [isPlaying, setisPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.7);
    const soundRef = useRef<Howl | null>(null);

    // Play a single track or a list
    const play = (
        trackOrList: ITrack | ITrack[],
        startIndex = 0
    ) => {
        // Unload previous tracks
        soundRef.current?.unload();

        let track;

        if (Array.isArray(trackOrList)) {
            setPlaylist(trackOrList);
            setCurrentIndex(startIndex);
            setCurrentTrack(trackOrList[startIndex]);
            track = trackOrList[startIndex];
        } else {
            setPlaylist([]);
            setCurrentIndex(0);
            setCurrentTrack(trackOrList);
            track = trackOrList;
        }

        // Initialize Howl
        const sound = new Howl({
            src: [track.url],
            html5: true,
            volume,
            onend: () => next()
        });
        soundRef.current = sound;
        sound.play();
        setisPlaying(true);
    }

    // Toggle Track Play
    const togglePlay = () => {
        if (!soundRef.current) return;

        if (soundRef.current.playing()) {
            soundRef.current.pause();
            setisPlaying(false);
        } else {
            soundRef.current.play();
            setisPlaying(true);
        }
    }

    // Next Track
    const next = () => {
        if (playlist.length === 0) return;
        const nextIndex = (currentIndex + 1) % playlist.length;
        console.log("Next Index", nextIndex);
        play(playlist, nextIndex);
    }

    // Next Track
    const previous = () => {
        if (playlist.length === 0) return;
        const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        console.log("Next Index", prevIndex);
        play(playlist, prevIndex);
    }

    useEffect(() => {
        if (soundRef.current) soundRef.current.volume(volume);
    }, [volume]);

    useEffect(() => {
        if (!currentTrack) return;

        // Setup Media Session metadata & handlers
        if ('mediaSession' in navigator && currentTrack) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: currentTrack.title,
            artist: currentTrack.artist,
            artwork: [
              { src: currentTrack.image,   sizes: '512x512', type: 'image/png' }
            ],
          });
          navigator.mediaSession.setActionHandler('play', togglePlay);
          navigator.mediaSession.setActionHandler('pause', togglePlay);
          navigator.mediaSession.setActionHandler('previoustrack', previous);
          navigator.mediaSession.setActionHandler('nexttrack', next);
        }
    }, [currentTrack]);
      

    return (
        <PlayerContext.Provider
            value={{
                currentTrack,
                isPlaying,
                volume,
                play,
                togglePlay,
                setVolume,
                next,
                previous
            }}
        >
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

