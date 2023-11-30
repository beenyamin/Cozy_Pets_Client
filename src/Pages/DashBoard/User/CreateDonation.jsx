import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const CreateDonation = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic ()

    const handleCreateCampaign = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const amount = form.amount.value;
        const image = form.image.value;
        const date = form.date.value;
        const shortDescription = form.shortDescription.value
        const longDescription = form.longDescription.value
        const createCampaign = { name,amount, image, date, shortDescription, longDescription }
        console.log(createCampaign);

        axiosPublic.post('/addCampaign', createCampaign, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Campaign Added !');
                    navigate('/dashboard/myDonationCampaign')
                } else {
                    toast.error('Failed to add pet. Please try again.');
                }
            })

    }




    return (
        <div>
            <Helmet>
                <title> DashBoard |Create Donation Campaign</title>
            </Helmet>
            <div className="shadow-md bg-stone-100 rounded-md mt-6 mb-10 px-6 md:px-12 lg:px-24 py-10">
                <h2 className="text-3xl text-center dark:text-black justify-center mb-3 font-extrabold">Create Campaign</h2>
                <form onSubmit={handleCreateCampaign}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                        {/* row 1 */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text"> Pet Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Image Url" className="input input-bordered  rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Pet Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Pets Name" className="input input-bordered   rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
                        </div>

                        </div>

                        {/* row 3 */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="date" className="input input-bordered   rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Max Donate Amount</span>
                            </label>
                            <input type="number" name="amount" placeholder="Max Donate Amount" className="input input-bordered   rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
                        </div>

                       </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea className="textarea textarea-error  " name="shortDescription" placeholder="Short Description" ></textarea>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <textarea className="textarea textarea-error  " name="longDescription" placeholder="Long Description" ></textarea>
                        </div>


                        </div>

                    

                    <input type="submit" value="Create A Campaign" className="btn btn-error w-full text-white mt-4" />
                </form>
            </div>



        </div>
    );
};

export default CreateDonation;