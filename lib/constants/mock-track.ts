import image1 from "@/assets/img-1.jpg";
import image2 from "@/assets/img-2.jpg";
import image3 from "@/assets/img-3.jpg";


export const images = [image1, image2, image3];
export const getRandomImage = () => {
    const randomInt = Math.floor(images.length * Math.random());
    return images[randomInt].src;
}

export const tracks: ITrack[] = [
    {
        title: "Only You",
        artist: "Bad Boy Timz",
        url: "/audio/Bad-Boy-Timz-Only-You-(TrendyBeatz.com).mp3",
        image: getRandomImage()
    },
    {
        title: "Shot My Baby",
        artist: "Daniel Caesar",
        url: "/audio/Daniel-Caesar-Shot-My-Baby-(TrendyBeatz.com).mp3",
        image: getRandomImage()
    },
    {
        title: "Peaches",
        artist: "Justin Bieber Ft Daniel Caesar, Giveon",
        url: "/audio/Justin-Bieber-Peaches-Ft-Daniel-Caesar-Giveon-New-Song-(TrendyBeatz.com).mp3",
        image: getRandomImage()
    }
]