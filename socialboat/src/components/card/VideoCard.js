import React from "react";
import { useVideos } from "../../contexts/videos";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <div>
      <iframe src={video.video}></iframe>
    </div>
  );
};

export { VideoCard };
