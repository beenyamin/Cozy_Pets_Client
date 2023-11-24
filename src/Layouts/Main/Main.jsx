import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Headers/Navbar";


const Main = () => {
    return (
        <div className="font-Poppins">
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>

            
           
        </div>
    );
};

export default Main;