import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="videocard">
      <video controls>
        <source src={video.video} />
      </video>
      {/* <iframe src={video.video}></iframe> */}
      <div className="video-info">
        <span className="video-heading">{video.heading}</span>
        <ul className="video-tags">
          {video.tags.map((tag, index) => (
            <li key={index} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { VideoCard };
