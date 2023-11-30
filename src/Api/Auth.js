import axios from "axios";
import { RemoveToken } from ".";


const axiosSecure = axios.create({
    baseURL:' https://a12-server-zeta.vercel.app',
    withCredentials:true,
})

// Creating interceptor check for unauthorized responses.
axiosSecure.interceptors.response.use(
    response => response,
    async error => {
      console.log('Error tracked in the interceptor', error.response)
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        await RemoveToken()
        window.location.replace('/login')
      }
  
      return Promise.reject(error)
    }
  )






export default axiosSecure ;


