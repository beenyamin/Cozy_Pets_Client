import { Link } from "react-router-dom";


const Donation = () => {

    const donationCampaigns = [
        {
          id: 1,
          petName: 'Fluffy',
          petImage: 'https://placekitten.com/300/200',
          maxDonationAmount: 100,
          donatedAmount: 50,
        },
        {
          id: 2,
          petName: 'Buddy',
          petImage: 'https://placedog.net/300/200?id=2',
          maxDonationAmount: 150,
          donatedAmount: 75,
        },
        {
          id: 3,
          petName: 'Whiskers',
          petImage: 'https://placekitten.com/300/200',
          maxDonationAmount: 120,
          donatedAmount: 30,
        },
        // Add more campaign data as needed
      ];
    
      // Mock data for recommended donations
      const recommendedDonations = [
        {
          id: 4,
          petName: 'Mittens',
          petImage: 'https://placekitten.com/300/200',
          maxDonationAmount: 80,
          donatedAmount: 20,
        },
        {
          id: 5,
          petName: 'Rover',
          petImage: 'https://placedog.net/300/200?id=5',
          maxDonationAmount: 200,
          donatedAmount: 100,
        },
        {
          id: 6,
          petName: 'Smokey',
          petImage: 'https://placekitten.com/300/200',
          maxDonationAmount: 90,
          donatedAmount: 40,
        },
        // Add more recommended donation data as needed
      ];
    return (


        <div className="container mx-auto pt-24 grid grid-cols-3 gap-8">
      {donationCampaigns.map(campaign => (
        <div key={campaign.id} className="bg-white rounded shadow p-4">
          <img className="w-full h-32 object-cover mb-4" src={campaign.petImage} alt={campaign.petName} />
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{campaign.petName}</h3>
            <p className="mb-2">Max Donation: ${campaign.maxDonationAmount}</p>
            <p className="mb-4">Donated: ${campaign.donatedAmount}</p>
            <Link to={`/donation/`}>
             <button className="bg-rose-500 btn btn-sm rounded-full text-white  ">
             View Details
           </button>
           </Link>
          </div>
        </div>
      ))}

      
          {/* Recommended Donation Section */}
          <div className="mt-6 card pt-4">
            <h4 className="text-lg font-semibold mb-2">Recommended Donations</h4>
            {recommendedDonations.map(recommended => (
              <div key={recommended.id} className="mb-2">
                <img className="w-12 h-12 object-cover inline-block mr-2" src={recommended.petImage} alt={recommended.petName} />
                <span className="text-gray-700">{recommended.petName}</span>
                <span className="ml-2">${recommended.maxDonationAmount}</span>
              </div>
            ))}
          </div>

    </div>
     
         
        
    );
};

export default Donation;