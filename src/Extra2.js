axios.post('http://localhost:5000/addPets', updatePets, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    const data = response.data;
    console.log(data);

    // Check if data has the insertedId (adjust accordingly based on your response structure)
    if (data.insertedId) {
      toast.success('Pet added successfully!');
      navigate('/dashboard/myAddedPets');
    } else {
      toast.error('Failed to add pet. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error adding pet:', error);
    toast.error('Failed to add pet. Please try again.');
  });