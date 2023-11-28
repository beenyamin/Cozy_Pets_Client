import { ImSpinner } from "react-icons/im";
import useAuth from "../Hooks/useAuth";

const AnotherComponents = () => {

  const {user, loading} = useAuth ()

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const location = form.location.value
    const category = form.category.value
    const date = form.date.value
    const age = form.age.value
    const shortDescription = form.shortDescription.value
    const longDescription = form.longDescription.value
    const name = form.name.value
    // const image = form.image.files[0]
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }
    // const image_url = await ImageUpload(image)

    const petsData = {
      location,
      category,
      date,
      age,
      shortDescription,
      longDescription,
      name,
      host,
      // image: image_url?.data?.display_url,
    }

    // fetch ('http://localhost:5000/addPets',{

    // method :"POST",
    // headers: {
    //     'content-type' : 'application/json'
    // },

    // body:JSON.stringify(petsData)

    // })

    console.table(petsData)
  }

    return (
        <div>

<form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 pt-5 lg:grid-cols-2 gap-10'>
          <div className='space-y-6 '>

            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='price' className='block text-gray-600'>
                Pet Age
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='age'
                id='age'
                type='number'
                placeholder='Pet Age'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Date
              </label>
              <input
                className='w-full px-10 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='date'
                id='date'
                type='date'
                placeholder='Date'
                required
              />
            </div>



            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Short Description
              </label>

              <textarea
                id='shortDescription'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='shortDescription'
              ></textarea>
            </div>

          </div>
          <div className='space-y-6 '>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Pet Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='Pet Name'
                required
              />
            </div>


            {/*  */}

            <div className="form-control space-y-1 text-sm">
              <label className=" text-gray-600 ">
                <span className="label-text">Pets Category</span>
              </label>
              <select
                name="category"
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                id='category'
                placeholder='Pet category'
                required
                defaultValue="default" // Use defaultValue prop here
              >
                <option disabled value="default">Pets Category</option>
                <option value="Dogs">Dogs</option>
                <option value="Cats">Cats</option>
                <option value="Birds">Birds</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Fish">Fish</option>
                <option value="Hamsters">Hamsters</option>
              </select>
            </div>

            {/* <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>

                  <label>
                    <input
                      onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                    
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div> */}


            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Long Description
              </label>

              <textarea
                id='longDescription'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='longDescription'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mb-6 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {loading ? (
            < ImSpinner className='animate-spin m-auto' />
          ) : (
            'Add Pets'
          )}
        </button>
      </form>
  
        </div>
      );
    };

export default AnotherComponents;