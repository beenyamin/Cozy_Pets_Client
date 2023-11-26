import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllPets = () => {
    const axiosPublic = useAxiosPublic ()

    const {data: AllPets = [] , isPending: loading , refetch} = useQuery ({
        queryKey: ['pets'],
        queryFn: async () => {
          const res = await axiosPublic.get('/Pets');
          console.log(res.data);
          return res.data;
        }
      })

    return [AllPets,loading, refetch];
};

export default useAllPets;