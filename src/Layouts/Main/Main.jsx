import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Headers/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="font-Poppins">
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            
           
        </div>
    );
};

export default Main;