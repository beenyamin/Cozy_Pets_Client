import { NavLink } from "react-router-dom";
import { BiSolidCalendarStar, BiSolidDonateHeart } from "react-icons/bi";
import { GiRabbit } from "react-icons/gi";
import { MdPets, MdOutlineCampaign } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";


const UserMenu = () => {
    return (
        <div> 
             <>
                <li><NavLink to="/dashboard/addPets"><MdPets /> Add Pets</NavLink> </li>
                <li><NavLink to="/dashboard/myAddedPets"><GiRabbit /> My Added Pets</NavLink> </li>
                <li><NavLink to="/dashboard/adoptionRequest"><SiPetsathome />Adoption Request</NavLink> </li>
                <li><NavLink to="/dashboard/createDonation"><BiSolidCalendarStar></BiSolidCalendarStar> Create Donation Campaigns</NavLink> </li>
                <li><NavLink to="/dashboard/myDonationCampaign"><MdOutlineCampaign /> My Donation Campaigns</NavLink> </li>
                <li><NavLink to="/dashboard/myDonation">< BiSolidDonateHeart /> My Donations</NavLink> </li>
            </>
        </div>
    );
};

export default UserMenu;