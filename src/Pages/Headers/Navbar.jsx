import { BiLogInCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { BsList } from "react-icons/bs";
import Container from "../../Shared/Container";
import useAuth from "../../Hooks/useAuth";
import navLogo from "../../assets/images/navLogo.png"
const Navbar = () => {

  const { user , logOut} = useAuth()
  return (
    <Container>
      <div className="navbar lg:px-10 max-w-screen-xl fixed bg-opacity-10 bg-white z-10 ">

        {/* Phone */}
        <div className="drawer md:hidden lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <div className="flex">
              <div className=""><label htmlFor="my-drawer" className=" btn btn-sm text-xl drawer-button"><BsList></BsList></label></div>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'btn btn-sm btn-info dark:text-black text-white' : 'btn btn-ghost dark:text-black btn-sm'
                }

              >
                Home
              </NavLink>

              <NavLink
                to="/petListing"
                className={({ isActive }) =>
                  isActive ? 'btn btn-info btn-sm dark:text-black text-white' : 'btn dark:text-black btn-ghost btn-sm'
                }
              >
                Pet Listing
              </NavLink>
              <NavLink
                to="/allBooks"
                className={({ isActive }) =>
                  isActive ? 'btn btn-info btn-sm dark:text-black text-white' : 'btn dark:text-black btn-ghost btn-sm'
                }
              >
                Donation Campaigns
              </NavLink>


              {/* <NavLink
                to="/borrowedBooks"
                className={({ isActive }) =>
                  isActive ? 'btn btn-info btn-sm dark:text-black text-white' : 'btn dark:text-black btn-ghost btn-sm'
                }
              >
                Borrowed Book
              </NavLink> */}
            </ul>
          </div>
        </div>


        {/* pc */}

        <div className="navbar-center">
          <img src={navLogo} className="w-6 " alt="" />
          <h2 className="text-white font-medium uppercase pl-2 mr-2"> Cozy Pets</h2>
          <div className=" md:ml-48 lg:ml-96 hidden lg:block md:block items-center space-x-5">

            <NavLink to="/" className={({ isActive }) =>
              isActive ? ' text-sky-400 font-medium ' : '  dark:text-white text-white hover:text-pink-400 '
            } > Home </NavLink>

            <NavLink to="/petListing" className={({ isActive }) =>
              isActive ? 'text-sky-400 font-medium ' : ' font-medium  dark:text-white text-white hover:text-pink-400'
            }>  Pet Listing </NavLink>

            <NavLink to="/donation" className={({ isActive }) =>
              isActive ? 'text-sky-400 font-medium ' : ' font-medium  dark:text-white text-white hover:text-pink-400'
            }  >  Donation Campaigns </NavLink>


            
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
                  <a className="justify-between">{user.email}<span className="badge">New</span> </a>
                </li>
                <li> <Link to='/login'>Login</Link></li>
               <li><Link onClick={logOut}>logout</Link></li>
              </ul>
            </div>
              :
              <Link to={'/login'}> <button className="hover:bg-cyan-500 bg-rose-400 btn btn-sm rounded-full text-black font-semibold   ">
            <BiLogInCircle className=" text-xl  hidden lg:block"></BiLogInCircle>
        
            Login </button></Link>
          }
        
        </div>

        {/* </div> */}
      </div>
    </Container>
  );
};

export default Navbar;