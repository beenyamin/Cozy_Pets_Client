import {   FaCalendar, FaCartPlus, FaHome,  FaList,  FaLongArrowAltUp,  FaUsers,  FaUtensils,  FaWallet, } from "react-icons/fa";
import {BiSolidCalendarStar  } from "react-icons/bi";

import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex flex-col sm:flex-row">
        {/*  dashboard Side bar */}
        <div className="w-full md:ml-10 sm:w-56 min-h-screen text-black bg-rose-400">
 <ul className="menu p-4">

    <>  
    <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink> </li>
    <li><NavLink to="/dashboard/allPets"> <FaUtensils></FaUtensils>All Pets </NavLink> </li>
    <li><NavLink to="/dashboard/allDonations"><FaWallet></FaWallet>All Donations</NavLink> </li>
    <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink> </li>

    </> :
    <>    
    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink> </li>
    <li><NavLink to="/dashboard/addPets"><FaCalendar></FaCalendar> Add Pets</NavLink> </li>
    <li><NavLink to="/dashboard/myAddedPets"><FaWallet></FaWallet> My Added Pets</NavLink> </li>
    <li><NavLink to="/dashboard/adoptionRequest"><FaCartPlus></FaCartPlus>Adoption Request</NavLink> </li>
    <li><NavLink to="/dashboard/createDonation"><BiSolidCalendarStar></BiSolidCalendarStar> Create Donation Campaigns</NavLink> </li>
    <li><NavLink to="/dashboard/myDonationCampaign"><BiSolidCalendarStar></BiSolidCalendarStar> My Donation Campaigns</NavLink> </li>
    <li><NavLink to="/dashboard/myDonation"><FaList></FaList> My Donations</NavLink> </li>                 
    </>

  
    
    {/* Shared NavLink */}
    <div className="divider"></div>
    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
    <li><NavLink to="/logOut"> <FaLongArrowAltUp/>Log Out</NavLink> </li>


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