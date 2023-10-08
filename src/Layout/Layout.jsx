import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div className="bg-[#212221] ">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto px-2 ">
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;