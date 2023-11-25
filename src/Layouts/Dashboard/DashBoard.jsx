import {  FaBook, FaCalendar, FaCartPlus, FaHome,  FaList,  FaLongArrowAltUp,  FaShoppingBag,  FaUsers,  FaUtensils,  FaWallet, } from "react-icons/fa";
import {BiSolidCalendarStar  } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiListDashesFill } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
        {/*  dashboard Side bar */}
        <div className="w-64 min-h-screen text-black bg-rose-400">
<ul className="menu p-4">
  
    <>  
    <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink> </li>
    <li><NavLink to="/dashboard/allPets"> <FaUtensils></FaUtensils>All Pets </NavLink> </li>
    <li><NavLink to="/dashboard/allDonations"><FaWallet></FaWallet>All Donations</NavLink> </li>
    <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink> </li>

    </> :
    <>    
    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink> </li>
    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Add A Pets</NavLink> </li>
    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> My Added Pets</NavLink> </li>
    <li><NavLink to="/dashboard/cart"><FaCartPlus></FaCartPlus>Adoption Request</NavLink> </li>
    <li><NavLink to="/dashboard/review"><BiSolidCalendarStar></BiSolidCalendarStar> Create Donation Campaigns</NavLink> </li>
    <li><NavLink to="/dashboard/review"><BiSolidCalendarStar></BiSolidCalendarStar> My Donation Campaigns</NavLink> </li>
    <li><NavLink to="/dashboard/paymentHistory"><FaList></FaList> My Donations</NavLink> </li>              
    
    </>

  
    
    {/* Shared NavLink */}
    <div className="divider"></div>
    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
    <li><NavLink to="/contact"> <MdEmail></MdEmail>Contact</NavLink> </li>
    <li><NavLink to="/Logout"> <FaLongArrowAltUp/>Log Out</NavLink> </li>


</ul>
        </div>

        {/*dashboard Content  */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>


    </div>
    );
};

export default DashBoard;