import { NavLink } from "react-router-dom";
import {  FaUsers, } from "react-icons/fa";
import { MdPets, } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar, } from '@fortawesome/free-solid-svg-icons';
import useGetPets from "../../../Hooks/useGetPets";


const AdminMenu = () => {
    const [getAllPets] = useGetPets();
    return (
        <div>

            <>
                <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink> </li>
                <li><NavLink to="/dashboard/allPets"> <MdPets />All Pets = {getAllPets.length} </NavLink> </li>
                <li><NavLink to="/dashboard/allDonations"><FontAwesomeIcon icon={faHandHoldingDollar} />All Donations</NavLink> </li>

            </>

        </div>
    );
};

export default AdminMenu;