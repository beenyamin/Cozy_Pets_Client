import { Link, useLoaderData } from "react-router-dom";



const PetDetails = () => {
    const pets = useLoaderData();
    const { _id, age, name, image,location,longDescription } = pets;

    return (
        <div>
       <div className="pt-14">

<div className="hero space-y-5 mt-8 rounded-lg  min-h-screen bg-base-200">
    <div className="hero-content flex-col md:flex-row">
        <img src={image} className=" w-96 md:mr-10 rounded-lg shadow-2xl" />
        <div>
            <h1 className="text-5xl mb-5 font-bold ">{name}</h1>
            <hr />
            <p className="text-xl font-semibold"> <span className="text-rose-500 text-xl font-semibold ">Pets : </span> {name}</p>
            <hr />
            <p className="text-xl font-semibold"> <span className="text-rose-500 text-xl font-semibold "> Pets Age : </span> {age}</p>
            <hr />
            <p className="text-xl font-semibold"> <span className="text-rose-500 text-xl font-semibold "> Location: </span> {location}</p>
            <hr />
            <p className=""> <span className="text-rose-500 text-xl font-semibold "> About This Pets :</span> {longDescription}</p>
            <hr />

            <Link><button className=" text-white rounded-lg py-2 mt-4 ml-2 font-medium  px-4 bg-rose-500 hover:bg-sky-500 ...">Adopt</button></Link>

        </div>
    </div>
</div>






</div>

    
        </div>
    );
};

export default PetDetails;
