import { createContext, useContext, useState } from "react";

const videoContext = createContext(null);

const VideoContextProvider = ({ children }) => {
  const [videosData, setVideosData] = useState({
    allVideos: [],
    selectedTags: [],
  });
  return (
    <videoContext.Provider value={{ videosData, setVideosData }}>
      {children}
    </videoContext.Provider>
  );
};

const useVideos = () => useContext(videoContext);

export { useVideos, VideoContextProvider };
