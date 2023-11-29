import axiosSecure from "./Auth"

// Fetch all pets from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/getPets')
  return data
}


// Save a pet data in db
export const addPets = async petsData => {
  const { data } = await axiosSecure.post(`/addPets`, petsData)
  return data
}
