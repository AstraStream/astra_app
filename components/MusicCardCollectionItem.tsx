import Image from "next/image"
import banner from "@/assets/banner.png";
import image1 from "@/assets/img-1.jpg";
import image2 from "@/assets/img-2.jpg";
import image3 from "@/assets/img-3.jpg";
import Link from "next/link";
import { Button } from "./ui/Button";
import Icons from "./Icons";

const images = [image1, image2, image3];
const getRandomImage = () => {
    const randomInt = Math.floor(images.length * Math.random());
    return images[randomInt].src;
}

type MusicCardCollectionItem = {

}

export const MusicCardCollectionItem = () => {
    return (
        <blockquote className="shrink-0 w-56 space-y-4 group p-3 hover:bg-grey-100/75 backdrop-blur-lg transition-colors duration-300 hover:cursor-pointer rounded-xl relative">
            <figure className="h-52 relative rounded-xl overflow-clip select-none group">
                <Image 
                    src={getRandomImage()}
                    alt="image"
                    fill
                    className="object-cover object-center"
                />

                <Button
                    className="absolute bottom-[5%] right-2 size-12 rounded-full translate-y-2 opacity-1 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <Icons.play className="size-7 text-black" />
                </Button>
            </figure>

            <div className="space-y-0.5">
                <h4 className="font-bold text-white text-[17px]">Call Me Revenge</h4>
                <Link
                    href={"/artist/wizkid-artist-uuid"}
                    className="font-medium text-[15.4px]"
                >
                    21 Savage, d4vd
                </Link>
            </div>
        </blockquote>
    )
}

type ExpandedMusicCardCollectionItem = {

}

export const ExpandedMusicCardCollectionItem = () => {
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