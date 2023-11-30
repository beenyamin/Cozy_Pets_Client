
import { Link, NavLink } from "react-router-dom";
import { BsList } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw , faUserPlus} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {

  const { user , logOut} = useAuth()
  return (
  
      <div className="navbar max-w-5xl fixed bg-opacity-20 rounded-b-sm bg-black z-10 ">

        {/* Phone */}
        <div className="drawer md:hidden lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <div className="flex">
              <div className=""><label htmlFor="my-drawer" className=" btn btn-sm text-xl text-white drawer-button"><BsList></BsList></label></div>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'btn btn-sm   btn-error dark:text-black text-white' : 'btn btn-ghost dark:text-black btn-sm'
                }

              >
                Home
              </NavLink>

              <NavLink
                to="/petListing"
                className={({ isActive }) =>
                  isActive ? 'btn  btn-sm btn-error dark:text-black text-white' : 'btn dark:text-black btn-ghost btn-sm'
                }
              >
                Pet Listing
              </NavLink>
              <NavLink
                to="/donation"
                className={({ isActive }) =>
                  isActive ? 'btn  btn-sm  btn-error dark:text-black text-white' : 'btn dark:text-black btn-ghost btn-sm'
                }
              >
                Donation
              </NavLink>
           
            </ul>
          </div>
        </div>


        {/* pc */}

        <div className="navbar-center">
         < FontAwesomeIcon size={10} icon={faPaw} className=" text-sm text-black lg:ml-2 py-2 px-2 rounded-md bg-rose-500 " />
          <h2 className="text-white font-medium uppercase pl-2 mr-8"> Cozy Pets</h2>
          <div className=" md:ml-48 lg:ml-96 hidden lg:block md:block items-center space-x-5">

            <NavLink to="/" className={({ isActive }) =>
              isActive ? ' text-rose-600  font-semibold ' : ' dark:text-white text-white hover:text-pink-500 '
            } > Home </NavLink>

            <NavLink to="/petListing" className={({ isActive }) =>
              isActive ? 'text-rose-500  font-semibold ' : ' font-medium  dark:text-white text-white hover:text-pink-500'
            }>  Pet Listing </NavLink>

            <NavLink to="/donation" className={({ isActive }) =>
              isActive ? 'text-rose-500   font-semibold ' : ' font-medium  dark:text-white text-white hover:text-pink-500'
            }  >  Donation Camp  </NavLink>


            
          </div>
        </div>

        {/* <div className="navbar-end"> */}

        <div className="navbar-end">
          <div className="">

            {/* <button onClick={changeTheme} className=" bg-sky-400 px-2 mr-1 lg:mr-3 py-2 rounded-full ">    
{ mode === "dark" ?  <BiSun className="w-6 h-5 "></BiSun> :

<HiOutlineMoon className="w-6 text-white h-5">
</HiOutlineMoon> }
</button>  */}

          </div>

          {
            user?.email ? <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="flex cursor-pointer rounded-full border">
                <BsList className=" text-white mt-1 ml-2" size={20} />
                <img src={user.photoURL} className="inline-block h-7  ring-1 ring-white w-7 ml-2 rounded-full" alt="" />

              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">{user.email} </a>
                </li>
                <li> <Link to='/dashboard'>Dashboard</Link></li>
               <li><Link onClick={logOut}>Log Out</Link></li>
              </ul>
            </div>
              :
              <Link to={'/register'}> <button className=" px-5 md:px-3  bg-rose-500 btn btn-sm rounded-xl  md:rounded-full text-black font-semibold   ">
            <FontAwesomeIcon size={20}className=" hidden lg:block" icon={faUserPlus} />
            Sign Up </button></Link>
          }
        
        </div>

        {/* </div> */}
      </div>
   
  );
};

export default Navbar;