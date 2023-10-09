import { Outlet, Link } from "react-router-dom";

const MainViewContainer = () => {
  return (
    <div className="main-view-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/topRated">TopRated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer className="footer">Hello, I'm footer</footer>
    </div>
  );
};

export default MainViewContainer;
