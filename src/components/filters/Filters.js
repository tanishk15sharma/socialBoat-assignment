import React, { useState, useEffect } from "react";
import { useVideos } from "../../contexts/videos";
import "./Filter.css";
const Filters = () => {
  const [filteredTags, setFilteredTags] = useState([]);
  const { videosData } = useVideos();
  console.log(videosData);
  useEffect(() => {
    let allTags = [];
    let uniqueTags = [];
    videosData.allVideos.forEach(({ tags }) => allTags.push(...tags));
    // let uniqueTags = result.filter(
    //   (tag, index) => result.indexOf(tag) === index
    // );
    allTags.forEach((tag) =>
      !uniqueTags.includes(tag) ? uniqueTags.push(tag) : ""
    );
    setFilteredTags(uniqueTags);
  }, [videosData.allVideos]);

  return (
    <div className="filters-container">
      {filteredTags.map((tag, index) => {
        return (
          <label className="filter-tag" key={index}>
            {tag}
            <input type="checkbox" value={tag} />
          </label>
        );
      })}
    </div>
  );
};

export { Filters };
