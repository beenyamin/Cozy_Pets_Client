
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loader from "../Shared/Loader";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user , loading} = useAuth ()
    const location = useLocation()

  if (loading) return <Loader />
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
    
};

export default PrivateRoutes;