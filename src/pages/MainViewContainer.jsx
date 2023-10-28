import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const MainViewContainer = () => {
  return (
    <div className="main-view-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainViewContainer;
