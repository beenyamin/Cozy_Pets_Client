import { Navigate } from 'react-router-dom'
import useRole from '../Hooks/useRole'
import Loader from '../Shared/Loader'


const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loader />
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute
