import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import { useVideos } from "../../contexts/videos";
const Header = () => {
  const [search, setSearch] = useState("");
  const { setVideos } = useVideos();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos",
          {
            params: {
              q: search,
              numResults: 5,
            },
          }
        );
        if (data.status === "success") {
          setVideos(data.results);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [search]);

  const searchHandler = (e) => setSearch(e.target.value);

  return (
    <nav>
      <div>
        <i className="fa-brands fa-slack logo"></i>
      </div>
      <input
        placeholder="Search"
        className="searchBar"
        value={search}
        onChange={searchHandler}
      />
      <div className="user-icon">
        <i className="fa-solid fa-user-tie"></i>
      </div>
    </nav>
  );
};

export { Header };
