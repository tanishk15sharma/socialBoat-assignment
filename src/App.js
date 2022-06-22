import "./App.css";
import { Header } from "./components/header/Header";
import { VideoCard } from "./components/card/VideoCard";
import { useVideos } from "./contexts/videos";

function App() {
  const { videos } = useVideos();
  return (
    <>
      <Header />
      <main className="videos-container">
        {videos.length ? (
          videos.map((video) => <VideoCard video={video} key={video.heading} />)
        ) : (
          <h1 className="page-heading">No Videos Found</h1>
        )}
      </main>
    </>
  );
}

export default App;
