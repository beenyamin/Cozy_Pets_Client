import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Donation from "../Pages/Donation/Donation";
import DashBoard from "../Layouts/Dashboard/DashBoard";
import PetPage from "../Pages/PetListing/PetPage ";
import PetDetails from "../Pages/PetListing/PetDetails";
import DonationDetails from "../Pages/Donation/DonationDetails";
// import AddPetsForm from "../Pages/DashBoard/User/AddPetsForm";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers";
import AllPets from "../Pages/DashBoard/Admin/AllPets";
import AllDonation from "../Pages/DashBoard/Admin/AllDonation";
import MyAddedPets from "../Pages/DashBoard/User/MyAddedPets";
import AdminRoute from "./AdminRoute";
import AddPets from "../Pages/DashBoard/User/AddPets";
import AdoptionRequest from "../Pages/DashBoard/User/AdoptionRequest";
import CreateDonation from "../Pages/DashBoard/User/CreateDonation";
import MyDonationCampaign from "../Pages/DashBoard/User/MyDonationCampaign";
import MyDonation from "../Pages/DashBoard/User/MyDonation";
import PrivateRoutes from "./PrivateRoutes";


const Routes = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/petListing",
        element: <PetPage></PetPage>
      },
      {
        path: '/Pets/:id',
        element: <PetDetails></PetDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/Pets/${params.id}`)
      },

      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/allDonation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/allDonation/${params.id}`)
      },


    ]
  },


  { path: '/login', element: <Login></Login> },
  { path: '/register', element: <Register></Register> },

  {
    path: 'dashBoard',
    element: <DashBoard></DashBoard>,
    children: [


      //admin only routes

      {
        path: 'allUsers',
        element:  <PrivateRoutes><AdminRoute><AllUsers /></AdminRoute></PrivateRoutes>

      },

      {
        path: 'allPets',
        element: <PrivateRoutes><AdminRoute><AllPets /></AdminRoute></PrivateRoutes>

      },

      {
        path: 'allDonations',
        element:<PrivateRoutes> <AdminRoute><AllDonation /></AdminRoute></PrivateRoutes>

      },

      //User Routes
      {
        path: 'addPets',
        element: <PrivateRoutes> <AddPets /></PrivateRoutes>

      },

      {
        path: 'myAddedPets',
        element: <PrivateRoutes><MyAddedPets /></PrivateRoutes>

      },

      {
        path: 'adoptionRequest',
        element: <PrivateRoutes><AdoptionRequest /></PrivateRoutes>

      },
      {
        path: 'createDonation',
        element: <PrivateRoutes><CreateDonation /></PrivateRoutes>

      },
      {
        path: 'myDonationCampaign',
        element: <PrivateRoutes><MyDonationCampaign /> </PrivateRoutes>

      },
      {
        path: 'myDonation',
        element: <PrivateRoutes><MyDonation /></PrivateRoutes>

      },

    ]
  }

])



export default Routes;