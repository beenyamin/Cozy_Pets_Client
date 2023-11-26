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
      
    
    ]
    },


    { path:'/login', element: <Login></Login> },
    { path:'/register', element: <Register></Register>},

    {
     path:'dashBoard',
     element:<DashBoard></DashBoard>,
     children:[
    {
      path:'',
      element:''


     }
    ]
    }

  ])

  

export default Routes;