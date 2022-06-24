const getFilterVideos = (data) => {
  return data.allVideos.filter((video) =>
    data.selectedTags.length === 0
      ? true
      : video.tags.some((tag) => data.selectedTags.includes(tag))
  );
};

export { getFilterVideos };
