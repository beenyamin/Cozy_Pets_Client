import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const UseCampaign = () => {
    const axiosPublic = useAxiosPublic()
    const {data: AllCampaign = [] , } = useQuery({
        queryKey: ['campaign'],
        queryFn: async () => {
          const res = await axiosPublic.get('/campaign');
          return res.data;
        }
      })

    return [AllCampaign];
};

export default UseCampaign;