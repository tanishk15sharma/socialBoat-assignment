import { createContext, useContext, useState } from "react";

const videoContext = createContext(null);

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  return (
    <videoContext.Provider value={{ videos, setVideos }}>
      {children}
    </videoContext.Provider>
  );
};

const useVideos = () => useContext(videoContext);

export { useVideos, VideoContextProvider };
