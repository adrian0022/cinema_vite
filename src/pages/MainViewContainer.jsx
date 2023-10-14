import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";

const MainViewContainer = () => {
  return (
    <div className="main-view-container">
      <Navbar />
      <Outlet />
      <footer className="footer">
        <p>Hello, I'm footer</p>
      </footer>
    </div>
  );
};

export default MainViewContainer;
