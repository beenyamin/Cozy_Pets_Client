
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useGetDonation from "../../../Hooks/useGetDonation";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { RiRefund2Fill } from "react-icons/ri";
import useGetPets from "../../../Hooks/useGetPets";

const MyDonation = () => {
    const axiosPublic = useAxiosPublic();
    const [getSingleDonation] = useGetDonation();
    const [getAllPets] = useGetPets();

    console.log(getSingleDonation);

 

      const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/pets/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            // refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    })
                    .finally(() => {
                        // Move refetch outside of the axios block
                      
                    });
            }
    
            
        });
    };

    return (
        <div>
              <Helmet>
                <title> DashBoard | My Donation </title>
            </Helmet>

            <h2 className="text-3xl text-center mb-3 font-semibold">My Donation :{getSingleDonation.length}</h2>
        
            <div className="overflow-x-auto rounded-t-xl">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-rose-500 text-white">
                        <tr>
                            <th>Num</th>
                            <th>Pet Image</th>
                            <th>Donor</th>
                            <th>Refund</th>
                          
                        </tr>
                    </thead>

                    <tbody >

                        {
                            getSingleDonation.map((oneDonation, index) => <tr key={oneDonation._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={getAllPets.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{oneDonation.name}  </td>
                              
                               
                                <th> <button onClick={() => handleDelete(oneDonation._id)} className="btn btn-ghost text-white btn-sm bg-rose-600"><RiRefund2Fill size={20} /></button>

                                </th>
                               
                            </tr>

                            )

                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyDonation;