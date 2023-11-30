
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetPets from "../../../Hooks/useGetPets";
import { useEffect, useState } from "react";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FaPaw, FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const MyAddedPets = () => {
    const axiosPublic = useAxiosPublic();
    const [getAllPets] = useGetPets();
    const [userPets, setUserPets] = useState([]);

    useEffect(() => {
        if (JSON.stringify(getAllPets) !== JSON.stringify(userPets)) {
            setUserPets(getAllPets);
        }
      }, [getAllPets, userPets]);

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
                <title> DashBoard | My Added Pets </title>
            </Helmet>
            <div className="flex mb-4 justify-center">
                <h2 className="text-3xl font-semibold">My Added Pets :{getAllPets.length}</h2>

            </div>
            <div className="overflow-x-auto rounded-t-xl ">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-rose-500 text-white">
                        <tr>
                            <th>Num</th>
                            <th>Pet Image</th>
                            <th>Pet Name</th>
                            <th>Pet category</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Adopt</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            userPets.map((pets, index) => <tr key={pets._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pets.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{pets.name}  </td>
                                <td>{pets.category}</td>

                                <th> <Link to={`/dashBoard/updatePets/${pets._id}`}>
                                <button className="btn btn-ghost text-white btn-sm bg-red-600"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                </Link>
                                </th>
                                <th> <button onClick={() => handleDelete(pets._id)} className="btn btn-ghost text-white btn-sm bg-red-600"><FaTrashAlt /></button>

                                </th>
                                <th> <button className="btn btn-ghost text-white btn-sm bg-red-600"><FaPaw /></button>

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

export default MyAddedPets;