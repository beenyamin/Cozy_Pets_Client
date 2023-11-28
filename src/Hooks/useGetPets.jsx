import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetPets = () => {
    const axiosPublic = useAxiosPublic()

    const {data: getAllPets = [] , isPending: loading , refetch} = useQuery({
        queryKey: ['getPets'],
        queryFn: async () => {
          const res = await axiosPublic.get('/getPets');
          return res.data;
        }
      })

    return [getAllPets,loading, refetch];
};

export default useGetPets;