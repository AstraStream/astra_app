import Image from "next/image"
import banner from "@/assets/banner.png";
import Link from "next/link";
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
                {track.image && (
                    <Image 
                        src={track.image}
                        alt={`${track.artist}-${track.title}`}
                        fill
                        className="object-cover object-center"
                    />
                )}

                <PlayButton 
                    variant="default"
                    track={track as ITrack}
                    playlist={playlist}
                    className="absolute bottom-[5%] right-2 size-12 translate-y-2 opacity-1 duration-500 group-hover:translate-y-0 group-hover:opacity-100 [&>svg]:!size-7 [&>svg]:text-black"
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