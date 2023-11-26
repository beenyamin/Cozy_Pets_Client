import { Helmet } from 'react-helmet-async';
import useAllPets from '../../Hooks/useAllPets';
import PetPageCard from './PetPageCard';
import { useState, useEffect } from 'react';

const PetPage = () => {
  const [AllPets] = useAllPets();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets(AllPets);
  }, [AllPets]);

  return (
    <div className=''>
      <Helmet>
        <title>Cozy Pets | Pet Listing</title>
      </Helmet>

      <div className='pt-28  text-center '>
        
      <div className="join ">
          <div>
            <div>
              <input className="input  w-14 md:w-36 input-bordered join-item" placeholder="Search" />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn join-item">Search</button>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {pets.map((pet) => (
          <PetPageCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetPage;
