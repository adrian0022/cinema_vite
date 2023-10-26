import { NavLink, Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import PopularIcon from "@icons/PopularIcon";
import TopRatedIcon from "@icons/TopRatedIcon";
import UpcomingIcon from "../assets/icons/UpcomingIcon";
import NowPlayingIcon from "../assets/icons/NowPlayingIcon";
import PopularTvSeriesIcon from "../assets/icons/PopularTvSeriesIcon";
import TopRatedTvSeriesIcon from "../assets/icons/TopRatedTvSeriesIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content-wrapper">
        <div className="navbar-top-container">
          <h1 className="title">
            <Link to="/">
              {" "}
              Moviebase <span> search your favorite movie </span>
            </Link>
          </h1>
          <Searchbar />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="navlink">
                <PopularIcon />
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="/topRatedMovies" className="navlink">
                <TopRatedIcon />
                TopRated
              </NavLink>
            </li>
            <li>
              <NavLink to="/upcomingMovies" className="navlink">
                <UpcomingIcon />
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink to="/nowPlayingMovies" className="navlink">
                <NowPlayingIcon />
                Now Playing
              </NavLink>
            </li>
            <li>
              <NavLink to="/popularSeries" className="navlink">
                <PopularTvSeriesIcon />
                Popular TV Series
              </NavLink>
            </li>
            <li>
              <NavLink to="/topRatedSeries" className="navlink">
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
