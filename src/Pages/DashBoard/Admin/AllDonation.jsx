import { Helmet } from "react-helmet-async";
import UseCampaign from "../../../Hooks/UseCampaign";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen,faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllDonation = () => {
    const [AllCampaign] = UseCampaign()
    const axiosPublic = useAxiosPublic ()
    console.log(AllCampaign);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/campaign/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted Please Refresh",
                                icon: "success"

                            });
                        }

                    })

            }
        });

    }

    return (
      <div>
        <Helmet>
          <title> DashBoard | All Donation  </title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center mb-6" > Total Donation Campaign : {AllCampaign.length}</h2>
  
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Num</th>
                <th>Pet Name</th>
                <th>Max Amount</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Pause</th>
  
              </tr>
            </thead>
  
  
            <tbody>
  
              {
                AllCampaign.map((campaign, index) => <tr key={campaign._id}>
  
                  <th>
                    {index + 1}
                  </th>
                  <td>{campaign.name}</td>
                  <td>${campaign.amount}</td>
                  <td> <Link to={`/dashBoard/editCampaign/${campaign._id}`}><button className="btn btn-ghost text-white btn-sm bg-red-600"><FontAwesomeIcon icon={faFilePen} /></button> </Link></td>

                    <td> <button onClick={() => handleDelete(campaign._id)} className="btn btn-ghost text-white btn-sm bg-red-600"><FaTrashAlt /></button>
                    </td>
                  
                  <td> 
                    <button className="btn btn-ghost text-white btn-sm bg-red-600"><FontAwesomeIcon icon={faCirclePause} /></button></td>

  
                </tr>
                )
  
              }
  
  
  
            </tbody>
  
  
          </table>
        </div>
  
      </div>
    );
};

export default AllDonation; 