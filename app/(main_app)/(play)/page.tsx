import MusicItemCollection from "@/components/MusicItemCollection";
import RecentAlbumBanner from "@/components/banners/RecentAlbumBanner";
import { headers } from "next/headers";

async function Home() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const baseUrl = `${protocol}://${host}`;

  const token = await fetch(`${baseUrl}/api/spotify/token`);

  return (
    <>
      <RecentAlbumBanner />
      
      <MusicItemCollection title="Recent Albums" />
      <MusicItemCollection 
        title="Picked for you" 
        expandFirst={true}
      />
      <MusicItemCollection title="Recently Played" />
      <MusicItemCollection title="Liked Songs" />
    </>
  );
}

export default Home;