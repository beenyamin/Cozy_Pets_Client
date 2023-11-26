import { Link } from "react-router-dom";


const PetPageCard = ({ pet }) => {
  const { _id, name, image, location, age } = pet;

  return (
    <div className='mt-14 mb-10 max-w-5xl mx-auto'>
      <div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Name: {name}</h2>
            <p>Location: {location}</p>
            <p>Age: {age} Years</p>
            <div className="card-actions ">
                <Link to={`/pets/${_id}`}>
              <button className="btn btn-sm bg-rose-500 rounded-full text-white ">View Details</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetPageCard;
