import {  useLoaderData } from "react-router-dom";




const AddHere = () => {
    const pets = useLoaderData();
    console.log(pets);
    const {  name, image,age, } = pets || {};

    return (
       <div>
<div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <img className="w-full " src={image} alt='' />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">Type: {}</p>
        <p className="text-gray-700 text-base">Age: {age} years</p>
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg mb-2">More Details about Cozy Pets</h3>
        <p className="text-gray-700 text-base">{}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => alert(`You adopted ${name}!`)}
        >
          Adopt
        </button>
      </div>
    </div>






        
    </div>
 






    
    );
};

export default AddHere;