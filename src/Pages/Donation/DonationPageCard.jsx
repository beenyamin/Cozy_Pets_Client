/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const DonationPageCard = ({donation}) => {
    const { _id, petName,  petImage, maxDonationAmount, donatedAmount } = donation;

    return (
        
      <div className='mt-14 mb-10 max-w-5xl mx-auto transition-transform transform-gpu hover:scale-105'>
       <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4">
      <img src={petImage} alt={petName} className="w-full h-48 object-cover" />

      <div className="px-6 text-center py-4">
        <div className="font-bold text-xl mb-2">{petName}</div>
        <p className="text-gray-700 mb-2">
          Max Donation Amount: ${maxDonationAmount}
        </p>
        <p className="text-gray-700 mb-2">
          Donated Amount: ${donatedAmount}
        </p>

       <Link to={`/allDonation/${_id}`}>
       <button  className="bg-rose-500 btn btn-sm  text-white font-medium  rounded-full">
          View Details
        </button>
       </Link>
      </div>
    </div>
     </div>
    );
};

export default DonationPageCard;