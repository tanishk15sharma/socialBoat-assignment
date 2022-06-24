import React, { useState, useEffect } from "react";
import { useVideos } from "../../contexts/videos";
import "./Filter.css";
const Filters = () => {
  const [filteredTags, setFilteredTags] = useState([]);
  const { videosData, setVideosData } = useVideos();

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

  const tagInputHandler = (e) => {
    let checked = e.target.checked;
    if (checked) {
      return setVideosData((previousData) => ({
        ...previousData,
        selectedTags: [...previousData.selectedTags, e.target.value],
      }));
    } else {
      return setVideosData((previousData) => ({
        ...previousData,
        selectedTags: previousData.selectedTags.filter(
          (tag) => tag !== e.target.value
        ),
      }));
    }
  };

  return (
    <div className="filters-container">
      {filteredTags.map((tag, index) => {
        return (
          <label htmlFor={tag} className="filter-tag" key={index}>
            {tag}
            <input
              type="checkbox"
              id={tag}
              value={tag}
              checked={videosData.selectedTags.includes(tag)}
              onChange={(e) => tagInputHandler(e)}
            />
          </label>
        );
      })}
    </div>
  );
};

export { Filters };
