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
import AddPetsForm from "../Pages/DashBoard/User/AddPetsForm";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers";
import AllPets from "../Pages/DashBoard/Admin/AllPets";
import AllDonation from "../Pages/DashBoard/Admin/AllDonation";


const Routes =  createBrowserRouter([

    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/petListing",
        element:<PetPage></PetPage>
      },
      {
          path: '/Pets/:id',
          element:<PetDetails></PetDetails>,
          loader:({params}) => fetch (`http://localhost:5000/Pets/${params.id}`)
      },

      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/donationDetails/:id",
        element:<DonationDetails></DonationDetails>
      },
      
    
    ]
    },


    { path:'/login', element: <Login></Login> },
    { path:'/register', element: <Register></Register>},

    {
     path:'dashBoard',
     element:<DashBoard></DashBoard>,
     children:[
    

     //admin only routes

     {
      path:'adminHome',
      element:<AdminHome/>
    },
    {
      path: 'allUsers',
      element: <AllUsers/>

    },

    {
      path: 'allPets',
      element: <AllPets/>

    },

    {
      path: 'allDonations',
      element: <AllDonation/>

    },

    //User Routes

    {
      path:'userHome',
      element:''
    },
    {
      path:'addPets',
      element:<AddPetsForm/>

     },

    {
      path: 'myAddedPets',
      element: ''

    },

    {
      path: 'adoptionRequest',
      element: ''

    },
    {
      path: 'createDonation',
      element: ''

    },
    {
      path: 'myDonationCampaign',
      element: ''

    },
    {
      path: 'myDonation',
      element: ''

    },



    ]}

  ])

  

export default Routes;