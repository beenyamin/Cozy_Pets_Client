import axios from "axios";
const axiosPublic = axios.create ( {
    baseURL: '  https://a12-server-zeta.vercel.app',
    withCredentials: true
})

const useAxiosPublic = () => {
    return axiosPublic ;
};

export default useAxiosPublic;