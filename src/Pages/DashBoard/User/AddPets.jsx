import { useState } from 'react'
import { ImageUpload } from '../../../Api/utils'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import AddPetsForm from './AddPetsForm'
import { addPets } from '../../../Api/pets'

const AddPets = () => {

  const navigate = useNavigate()
  const { user } = useAuth()
  // const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

  const handleSubmit = async e => {
    // setLoading(true)
    e.preventDefault()
    const form = e.target
    const location = form.location.value
    const category = form.category.value
    const date = form.date.value
    const age = form.age.value
    const shortDescription = form.shortDescription.value
    const longDescription = form.longDescription.value
    const name = form.name.value
    const image = form.image.files[0]

    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }
    const image_url = await ImageUpload(image)

    const petsData = {
      location,
      category,
      date,
      age,
      shortDescription,
      longDescription,
      name,
      host,
      image: image_url?.data?.display_url,
    }

    console.table(petsData)

    try {
      const data = await addPets(petsData)
      console.log(data)
      setUploadButtonText('Uploaded!')
      toast.success('Room Added!')
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      // setLoading(false)
    }

 
  }



  // Handle Image button text
  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }

  return (
    <div>
     
      {/* Form */}
      <AddPetsForm
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        // loading={loading}
        uploadButtonText={uploadButtonText}
      />
    </div>
  )
}

export default AddPets;