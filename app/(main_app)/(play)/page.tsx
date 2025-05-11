import MusicCardCollection from "@/components/MusicCardCollection";
import RecentAlbumBanner from "@/components/banners/RecentAlbumBanner";

function Home() {
  return (
    <>
      <RecentAlbumBanner />
      
      <MusicCardCollection title="Recent Albums" />
      <MusicCardCollection 
        title="Picked for you" 
        expandFirst={true}
      />
      <MusicCardCollection title="Recently Played" />
      <MusicCardCollection title="Liked Songs" />
    </>
  );
}

export default Home;