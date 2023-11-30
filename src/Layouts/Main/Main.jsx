import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Headers/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="font-Poppins max-w-5xl mx-auto">
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>

            <div className="max-w-5xl mx-auto">
            <Footer></Footer>
            </div>

            
           
        </div>
    );
};

export default Main;