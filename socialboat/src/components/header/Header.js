import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <div>
        <i class="fa-brands fa-slack logo"></i>
      </div>
      <input placeholder="Search" className="searchBar" />
      <div className="user-icon">
        <i class="fa-solid fa-user-tie"></i>
      </div>
    </nav>
  );
};

export { Header };
