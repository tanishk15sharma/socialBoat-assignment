import React, { useState, useEffect } from "react";
import { useVideos } from "../../contexts/videos";
import "./Filter.css";
const Filters = () => {
  const [filteredTags, setFilteredTags] = useState([]);
  const { videos } = useVideos();
  console.log(videos);
  useEffect(() => {
    let allTags = [];
    let uniqueTags = [];
    videos.forEach(({ tags }) => allTags.push(...tags));
    // let uniqueTags = result.filter(
    //   (tag, index) => result.indexOf(tag) === index
    // );
    allTags.forEach((tag) =>
      !uniqueTags.includes(tag) ? uniqueTags.push(tag) : ""
    );
    setFilteredTags(uniqueTags);
  }, [videos]);

  return (
    <div className="filters-container">
      {filteredTags.map((tag) => {
        return (
          <label className="filter-tag">
            {tag}
            <input type="checkbox" value={tag} />
          </label>
        );
      })}
    </div>
  );
};

export { Filters };