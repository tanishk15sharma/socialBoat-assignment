import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <div className="videocard">
      <iframe src={video.video}></iframe>
      <div className="video-info">
        <span className="video-heading">{video.heading}</span>
        <ul className="video-tags">
          {video.tags.map((tag) => (
            <li className="tag">{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { VideoCard };
