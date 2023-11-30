import { Helmet } from 'react-helmet-async';
import useAllPets from '../../Hooks/useAllPets';
import PetPageCard from './PetPageCard';
import { useEffect, useState } from 'react';

const PetPage = () => {
  const [AllPets] = useAllPets();
  // console.log(AllPets);
  const [search , setSearch] = useState('')

  const handleSearch = e => {
    e.preventDefault ();
    const searchText = e.target.search.value 
    console.log(searchText);
    setSearch(searchText);
  }


useEffect( () => {
  fetch(`http://localhost:5000/Pets?search=${search}`)
  .then (res => res.json ())
  .then (data => {
    console.log(data);
  })
}, [search])


  
  return (
    <div className=''>
      <Helmet>
        <title>Cozy Pets | Pet Listing</title>
      </Helmet>
      <div className='pt-28  text-center '>
     
     <form onSubmit={handleSearch}>
         
     <div className="join ">
          <div>
            <div>
              <input name='search' className="input  w-14 md:w-36 input-bordered join-item" placeholder="Search" />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>Filter</option>
            <option>Dogs</option>
            <option>Cats</option>
            <option>Birds</option>
            <option>Fish</option>
            <option>Rabbit</option>
          </select>
          <div className="indicator bg-white">
            <input type="submit" value="Search" className='btn btn-error rounded' />
          </div>
        </div>


     </form>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {AllPets.map((pet) => (
          <PetPageCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetPage;
