import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = () => {
    return (
        <div className="lg:max-w-7xl p-1 lg:p-4">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-179px)]">
            <Outlet></Outlet>
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default Main;