import { FaHome, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { BsList } from "react-icons/bs";
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import AdminMenu from "../../Pages/DashBoard/Menu/AdminMenu";
import UserMenu from "../../Pages/DashBoard/Menu/UserMenu";
import { Helmet } from "react-helmet-async";




const DashBoard = () => {
    const { logOut } = useAuth()
    const [role] = useRole()





    return (
        <div className="flex flex-col  sm:flex-row">
            <Helmet>
                <title> Cozy Pets | DashBoard </title>
            </Helmet>
            {/*  dashboard Side bar */}
            <div className="w-full md:ml-10 hidden md:block sm:w-56 min-h-screen text-slate-100 bg-rose-500">

                <div className="flex bg-slate-300 shadow-2xl mt-4 py-2 md:ml-3 rounded-md mr-3">
                    < FontAwesomeIcon size={10} icon={faPaw} className=" text-sm text-black md:ml-2 py-2 px-2 rounded-md bg-rose-500 " />
                    <h2 className="text-black font-medium uppercase pl-2 mt-1 mr-2"> Cozy Pets</h2>
             
             
                </div>

                <ul className="menu p-4">

                    {role === 'user' && <UserMenu />}
                    {role === 'admin' && (<>  <AdminMenu />
                        <div className="divider"></div>
                        <UserMenu />   </>)}


                    {/* Shared NavLink */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink onClick={logOut} to='/login' > <FontAwesomeIcon icon={faRightFromBracket} />Log Out</NavLink> </li>

                </ul>

            </div>


            {/* phone drawer */}
            <div className={`drawer mt-2 pb-2 md:hidden lg:hidden`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex justify-between px-4">
          <div className="flex">
            <FontAwesomeIcon size={10} icon={faPaw} className="text-sm text-black lg:ml-2 py-2 px-2 rounded-md bg-rose-500" />
            <h2 className="text-black font-medium uppercase pl-2 mt-1 mr-2"> Cozy Pets</h2>
          </div>
          <div className="">
            <label htmlFor="my-drawer" className="btn btn-sm text-xl drawer-button" >
              <BsList />
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="" ></label>
        <ul className="menu p-4 w-48 min-h-full bg-blue-200 text-base-content">
         {/* Sidebar content here */}

         {role === 'user' && <UserMenu/>}
                    {role === 'admin' && (   <>  <AdminMenu />
                    <div className="divider"></div>
                    <UserMenu />  </>  )}
                     

                        {/* Shared NavLink */}
                        <div className="divider"></div>

        
        
        
          <li>
            <NavLink to="/" >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/logOut" >
              <FontAwesomeIcon icon={faRightFromBracket} /> Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>

   



            {/*dashboard Content  */}
            <div className="flex-1 p-8">

                <Outlet></Outlet>

            </div>


        </div>
    );
};

export default DashBoard;