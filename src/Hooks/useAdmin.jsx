import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useAdmin = () => {
    const { user,loading } = useAuth();
    const axiosSecure = useAxiosPublic(); //TOdO Change The line
    
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking isAdmin', user);
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            //    console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;