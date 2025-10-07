import Navbar from "../../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="max-w-[cal]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
