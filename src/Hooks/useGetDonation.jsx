import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetDonation = () => {
    const axiosPublic = useAxiosPublic()

    const {data: getSingleDonation = [] , isPending: loading , refetch} = useQuery({
        queryKey: ['singleDonation'],
        queryFn: async () => {
          const res = await axiosPublic.get('/singleDonation');
          return res.data;
        }
      })

    return [getSingleDonation ,loading, refetch];
};

export default useGetDonation;