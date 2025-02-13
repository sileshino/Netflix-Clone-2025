import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";

// Import Material-UI icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <header className="header_outer_container">
      <div className="header_container">
        {/* Left Section - Navigation Menu */}
        <nav className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li><a href="/">Home</a></li>
            <li><a href="/tv-shows">TV Shows</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/latest">Latest</a></li>
            <li><a href="/my-list">My List</a></li>
          </ul>
        </nav>

        {/* Right Section - Icons */}
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;