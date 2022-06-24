import "./App.css";
import { Header } from "./components/header/Header";
import { VideoCard } from "./components/card/VideoCard";
import { useVideos } from "./contexts/videos";
import { Filters } from "./components/filters/Filters";

function App() {
  const { videosData } = useVideos();
  return (
    <>
      <Header />
      <Filters />
      <main className="videos-container">
        {videosData.allVideos.length ? (
          videosData.allVideos.map((video) => (
            <VideoCard video={video} key={video.heading} />
          ))
        ) : (
          <h1 className="page-heading">No Videos Found</h1>
        )}
      </main>
    </>
  );
}

export default App;
