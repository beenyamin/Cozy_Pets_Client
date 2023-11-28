
// import { toast } from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'

import { ImSpinner } from "react-icons/im";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const AddPets = () => {

  const { loading } = useAuth()
  const navigate = useNavigate ()

  const handleAddPets = e => {
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
    const addPets = { name, image, location, category, date, shortDescription, age, longDescription }
    console.log(addPets);

    fetch('http://localhost:5000/addPets', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addPets)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Check if data has the insertedId (adjust accordingly based on your response structure)
        if (data.insertedId) {
          toast.success('Pet added successfully!');
          navigate('/dashboard/myAddedPets')
        } else {
          toast.error('Failed to add pet. Please try again.');
        }


      })

     
      





  }

  // try {
  //   const data = await addPets(petsData)
  //   console.log(data)
  //   setUploadButtonText('Uploaded!')
  //   toast.success('Room Added!')
  //   navigate('/dashboard')
  // } catch (err) {
  //   console.log(err)
  //   toast.error(err.message)
  // } finally {
  //   // setLoading(false)
  // }


  return (
    <div>
       <Helmet>
                <title> DashBoard | Add Pets </title>
            </Helmet>
      <div className="shadow-md bg-slate-100 rounded-md mt-6 mb-10 px-6 md:px-12 lg:px-24 py-10">
        <h2 className="text-3xl text-center dark:text-black justify-center mb-3 font-extrabold">Add Pets</h2>
        <form onSubmit={handleAddPets}>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

            {/* row 1 */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name="image" placeholder="Image Url" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Pets Name" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            {/* row 2 */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" name="location" placeholder="Location Of Pets" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Pets Category</span>
              </label>
              <select
                name="category"
                className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500"
              >
                <option disabled selected>Pets Category</option>
                <option>Dogs</option>
                <option>Cats</option>
                <option>Rabbit</option>
                <option>Birds</option>
              </select>
            </div>

            {/* row 3 */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" placeholder="date" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Pets Age</span>
              </label>
              <input type="number" name="age" placeholder="Pets Age" className="input input-bordered w-full rounded-md focus:rose-300  text-gray-800  border border-rose-300 focus:outline-rose-500" />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea className="textarea textarea-error" name="shortDescription" placeholder="Short Description" ></textarea>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <textarea className="textarea textarea-error" name="longDescription" placeholder="Short Description" ></textarea>
            </div>

          </div>

          {loading ? (
            < ImSpinner className='animate-spin m-auto' />
          ) : (
            <input type="submit" value="Add Pets" className="btn btn-error w-full text-white mt-4" />
          )}



        </form>
      </div>



    </div>
  );

};
export default AddPets;