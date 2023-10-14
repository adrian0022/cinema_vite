import { NavLink, Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
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
              <NavLink to="/">Popular</NavLink>
            </li>
            <li>
              <NavLink to="/topRatedMovies">TopRated</NavLink>
            </li>
            <li>
              <NavLink to="/upcomingMovies">Upcoming</NavLink>
            </li>
            <li>
              <NavLink to="/nowPlayingMovies">Now Playing</NavLink>
            </li>
            <li>
              <NavLink to="/popularSeries">Popular TV Series</NavLink>
            </li>
            <li>
              <NavLink to="/topRatedSeries">Top Rated TV Series</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
