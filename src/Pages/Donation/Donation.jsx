import useAllDonation from "../../Hooks/useAllDonation";
import { Helmet } from "react-helmet-async";
import DonationPageCard from "./DonationPageCard";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";

const Donation = () => {
  const [allDonationData] = useAllDonation();
  // console.log(allDonationData);
  const {loading} = useAuth()

  return (
    <div className=''>
      <Helmet>
        <title>Cozy Pets | Donation Campaign</title>
      </Helmet>
      <div className='pt-28 text-center'></div>
      {loading && <Loader/>}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {allDonationData.map((donation) => (
          <DonationPageCard key={donation._id} donation={donation} />
        ))}
      </div>
    </div>
  );
};

export default Donation;
