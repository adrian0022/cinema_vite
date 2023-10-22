import { NavLink, Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import PopularIcon from "@icons/PopularIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content-wrapper">
        <div className="navbar-top-container">
          <h1 className="title">
            <Link to="/">Moviebase - search your favorite movie </Link>
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
                TopRated
              </NavLink>
            </li>
            <li>
              <NavLink to="/upcomingMovies" className="navlink">
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink to="/nowPlayingMovies" className="navlink">
                Now Playing
              </NavLink>
            </li>
            <li>
              <NavLink to="/popularSeries" className="navlink">
                Popular TV Series
              </NavLink>
            </li>
            <li>
              <NavLink to="/topRatedSeries" className="navlink">
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
