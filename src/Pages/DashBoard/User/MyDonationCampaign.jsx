import { Helmet } from "react-helmet-async";
import UseCampaign from "../../../Hooks/UseCampaign";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faFilePen,faCirclePause } from '@fortawesome/free-solid-svg-icons';


const MyDonationCampaign = () => {
  const [AllCampaign] = UseCampaign()
  console.log(AllCampaign);
  return (
    <div>
      <Helmet>
        <title> DashBoard | My Donation Campaign </title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-6" > Campaign : {AllCampaign.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Num</th>
              <th>Pet Name</th>
              <th>Max Amount</th>
              <th>Edit</th>
              <th>Pause</th>
              <th>View</th>

            </tr>
          </thead>


          <tbody>

            {
              AllCampaign.map((campaign, index) => <tr key={campaign._id}>

                <th>
                  {index + 1}
                </th>
                <td>{campaign.name}</td>
                <td>{campaign.amount}</td>
                <td> <Link to={`/dashBoard/editCampaign/${campaign._id}`}><button className="btn btn-ghost text-white btn-sm bg-red-600"><FontAwesomeIcon icon={faFilePen} /></button> </Link></td>
                
                <td> 
                  <button className="btn btn-ghost text-white btn-sm bg-red-600"><FontAwesomeIcon icon={faCirclePause} /></button></td>
                <td><button className="btn btn-ghost text-white btn-sm bg-red-600"><FontAwesomeIcon icon={faEye} /></button></td>
               
             

      


              </tr>
              )

            }



          </tbody>


        </table>
      </div>

    </div>
  );
};

export default MyDonationCampaign;