import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <li>
          <Link to="/">Home 💱</Link>
        </li>
        <li>
          <Link to="/about">About 📖 </Link>
        </li>
        <li>
          <Link to="/popular">⭐ Popular Exchange Rates ⭐</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
