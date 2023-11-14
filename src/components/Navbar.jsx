import { NavLink, Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import PopularIcon from "@icons/PopularIcon";
import TopRatedIcon from "@icons/TopRatedIcon";
import UpcomingIcon from "../assets/icons/UpcomingIcon";
import NowPlayingIcon from "../assets/icons/NowPlayingIcon";
import PopularTvSeriesIcon from "../assets/icons/PopularTvSeriesIcon";
import TopRatedTvSeriesIcon from "../assets/icons/TopRatedTvSeriesIcon";
import HamburgerMenuIcon from "../assets/icons/HamburgerMenuIcon";
import { useState } from "react";
import { signInWithGoogle } from "./Firebase";

const Navbar = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSidebar = () => setSidebarOpened(false);

  const toggleSidebar = () => setSidebarOpened((prev) => !prev);

  return (
    <div className="navbar">
      <div className="content-wrapper">
        <div className="navbar-top-container">
          <h1 className="title">
            <Link to="/">Moviebase</Link>
            <span> search your favorite movie </span>
          </h1>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <Searchbar />
          <HamburgerMenuIcon className="menu-icon" onClick={toggleSidebar} />
        </div>
        <nav className={sidebarOpened ? "opened" : ""}>
          <ul>
            <li>
              <NavLink onClick={closeSidebar} to="/" className="navlink">
                <PopularIcon />
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to="/topRatedMovies"
                className="navlink"
              >
                <TopRatedIcon />
                TopRated
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to="/upcomingMovies"
                className="navlink"
              >
                <UpcomingIcon />
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to="/nowPlayingMovies"
                className="navlink"
              >
                <NowPlayingIcon />
                Now Playing
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to="/popularSeries"
                className="navlink"
              >
                <PopularTvSeriesIcon />
                Popular TV Series
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSidebar}
                to="/topRatedSeries"
                className="navlink"
              >
                <TopRatedTvSeriesIcon />
                Top Rated TV Series
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
