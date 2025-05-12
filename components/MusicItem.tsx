import Image from "next/image"
import banner from "@/assets/banner.png";
import Link from "next/link";
import { Button } from "./ui/Button";
import Icons from "./Icons";
import { usePlayer } from "@/providers/PlayerProvider";
import PlayButton from "./PlayButton";
// import Skeleton from 'react-loading-skeleton';
{/* <Skeleton width={70} height={25} /> */}

interface IMusicItem {
    track: ITrack;
    playlist: ITrack[]
}

export const MusicItem = ({
    track,
    playlist
}: IMusicItem) => {    
    return (
        <blockquote className="shrink-0 card-container group relative">
            <figure className="h-52 relative rounded-xl overflow-clip select-none group">
                <Image 
                    src={track.image}
                    alt={`${track.artist}-${track.title}`}
                    fill
                    className="object-cover object-center"
                />

                <PlayButton 
                    variant="MusicItem"
                    track={track as ITrack}
                    playlist={playlist}
                />
            </figure>

            <div className="space-y-0.5">
                <h4 className="font-bold text-white text-[17px]">{track.title}</h4>
                <Link
                    href={`/artist/${track.artist}`}
                    className="font-medium text-[15.4px]"
                >
                    {track.artist}
                </Link>
            </div>
        </blockquote>
    )
}

type ExpandedMusicItem = {

}

export const ExpandedMusicItem = () => {
    return (
        <blockquote
            className="shrink-0 w-[28rem] h-52 rounded-xl grid grid-cols-2 gap-1.5 overflow-clip"
        >
            <figure className="h-full relative rounded-xl overflow-clip">
                <Image 
                    src={banner}
                    alt="audio title"
                    fill
                    className="object-cover"
                />
            </figure>

            <div>
                <div>
                    <span>Single</span>
                    <span>-</span>
                    <span>Artist Name</span>
                </div>
                <h4>
                    Artist Name - Artist Title
                </h4>

                {/* Extra Info */}
                <p>
                    Our R&B editors loves this track
                </p>

                <div>
                    
                </div>
            </div>
        </blockquote>
    )
}