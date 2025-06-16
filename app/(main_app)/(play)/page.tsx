import MusicItemCollection from "@/components/MusicItemCollection";
// import RecentAlbumBanner from "@/components/banners/RecentAlbumBanner";

function Home() {
  
  return (
    <>
      {/* <RecentAlbumBanner /> */}
    
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