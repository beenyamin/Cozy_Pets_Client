import {    FaHome,  FaLongArrowAltUp,  FaUsers,   } from "react-icons/fa";
import {BiSolidCalendarStar,BiSolidDonateHeart  } from "react-icons/bi";
import { GiRabbit } from "react-icons/gi";
import { MdPets,MdOutlineCampaign  } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';


const DashBoard = () => {
    return (
        <div className="flex flex-col sm:flex-row">
        {/*  dashboard Side bar */}
        <div className="w-full md:ml-10 sm:w-56 min-h-screen text-slate-100 bg-rose-500">
 <ul className="menu p-4">

    <>  
    <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink> </li>

    <li><NavLink to="/dashboard/allPets"> <MdPets/>All Pets </NavLink> </li>
    <li><NavLink to="/dashboard/allDonations"><FontAwesomeIcon icon={faHandHoldingDollar} />All Donations</NavLink> </li>
    <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink> </li>

    </> :
    <>    
    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink> </li>
    <li><NavLink to="/dashboard/addPets"><MdPets/> Add Pets</NavLink> </li>
    <li><NavLink to="/dashboard/myAddedPets"><GiRabbit/> My Added Pets</NavLink> </li>
    <li><NavLink to="/dashboard/adoptionRequest"><SiPetsathome/>Adoption Request</NavLink> </li>
    <li><NavLink to="/dashboard/createDonation"><BiSolidCalendarStar></BiSolidCalendarStar> Create Donation Campaigns</NavLink> </li>
    <li><NavLink to="/dashboard/myDonationCampaign"><MdOutlineCampaign/> My Donation Campaigns</NavLink> </li>
    <li><NavLink to="/dashboard/myDonation">< BiSolidDonateHeart/> My Donations</NavLink> </li>                 
    </>

  
    
    {/* Shared NavLink */}
    <div className="divider"></div>
    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
    <li><NavLink to="/logOut"> <FontAwesomeIcon icon={faRightFromBracket} />Log Out</NavLink> </li>


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