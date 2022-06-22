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
        {videos.map((video) => (
          <VideoCard video={video} key={video.heading} />
        ))}
      </main>
    </>
  );
}

export default App;
