import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
import axios from "axios";


const UpdateAllPets = () => {
    const pets = useLoaderData ()
    const {name, image, location, category, date, shortDescription, age, 
        longDescription} = pets ;

    // console.log(pets);
    // const { loading } = useAuth()
  const navigate = useNavigate ()

  const handleUpdatePets = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const age = form.age.value;
    const location = form.location.value;
    const category = form.category.value;
    const date = form.date.value;
    const shortDescription = form.shortDescription.value
    const longDescription = form.longDescription.value
    const updatePets = { name, image, location, category, date, shortDescription, age, longDescription }
    console.log(updatePets);

  axios.patch(`http://localhost:5000/getPets/${pets._id}`, updatePets, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    const data = response.data;
    console.log(data);

    
    if (data.modifiedCount) {
      toast.success('Pet Updated successfully!');
      navigate('/dashboard/myAddedPets');
    } else {
      toast.error('Failed to Update This pet. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error Updating pet:', error);
    toast.error('Failed to Update pet. Please try again.');
  });


    }
   
    return (
        <div>
       <Helmet>
                <title> DashBoard | Update Pets </title>
            </Helmet>
      <div className="shadow-md bg-slate-100 rounded-md mt-6 mb-10 px-6 md:px-12 lg:px-24 py-10">
        <h2 className="text-3xl text-center dark:text-black justify-center mb-3 font-extrabold">Update Pets</h2>
        <form onSubmit={handleUpdatePets}>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

            {/* row 1 */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name="image" defaultValue={image} placeholder="Image Url" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" defaultValue={name} placeholder="Pets Name" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            {/* row 2 */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" name="location" defaultValue={location} placeholder="Location Of Pets" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Pets Category</span>
              </label>
              <select
           
              defaultValue={category}
                name="category"
                className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500"
              >
                <option disabled selected>Pets Category</option>
                <option>Dogs</option>
                <option>Cats</option>
                <option>Rabbit</option>
                <option>Birds</option>
                <option>Fish</option>
                <option>Hamsters</option>
              </select>
            </div>

            {/* row 3 */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" defaultValue={date} placeholder="date" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Pets Age</span>
              </label>
              <input type="number" name="age" defaultValue={age} placeholder="Pets Age" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea className="textarea textarea-error" defaultValue={shortDescription} name="shortDescription" placeholder="Short Description" ></textarea>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <textarea className="textarea textarea-error" name="longDescription"  defaultValue={longDescription} placeholder="Short Description" ></textarea>
            </div>

          </div>

            <input type="submit" value="Update A Pets" className="btn btn-error w-full text-white mt-4" />


        </form>
      </div>



    </div>
    );
};

export default UpdateAllPets;