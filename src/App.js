import "./App.css";
import { Header } from "./components/header/Header";
import { VideoCard } from "./components/card/VideoCard";
import { useVideos } from "./contexts/videos";
import { Filters } from "./components/filters/Filters";
import { getFilterVideos } from "./utils/filterVideos";

function App() {
  const { videosData } = useVideos();

  const filterVideos = getFilterVideos(videosData);

  return (
    <>
      <Header />
      <Filters />
      <main className="videos-container">
        {filterVideos.length ? (
          filterVideos.map((video) => (
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
