import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllDonation = () => {
    const axiosPublic = useAxiosPublic()
    const {data: AllDonation = [] , isPending: loading , refetch} = useQuery ({
        queryKey: ['allDonation'],
        queryFn: async () => {
          const res = await axiosPublic.get('/allDonation');
          return res.data;
        }
      })

    return [AllDonation,loading, refetch];
};

export default useAllDonation;