import { Link, useLoaderData } from "react-router-dom";


const PetDetails = () => {
    const pets = useLoaderData();    
    const { _id,age,name, image } = pets ;

    return (
        <div className="hero space-y-5 rounded-lg  min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src={image} className=" w-96 lg:mr-24 rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl mb-5 font-bold ">{name}</h1>
                <hr />
                <p className="text-xl font-semibold"> <span className="text-sky-400 text-xl font-semibold ">Age :{age} </span> </p>
                <hr />
             
               

{/* rating */}
                 <div className="flex ">

                    <div>
                    <p className="text-xl font-semibold"> <span className="text-sky-400 text-xl font-semibold ">Rating </span>5</p>
                    </div>

                    <div className="ml-3">
                    <div className="rating ">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>

                    </div>


                 </div>


                <hr />

                <p className=""> <span className="text-sky-400 text-xl font-semibold ">Details:</span> </p>
                <hr />

                <Link to={'/borrowedBooks'}><button  className=" text-white rounded-lg py-2 mt-4 font-medium  px-4 bg-pink-400 hover:bg-sky-600 ...">Adopt</button></Link>
                <Link><button className=" text-white rounded-lg py-2 mt-4 ml-2 font-medium  px-4 bg-pink-400 hover:bg-sky-500 ...">Read</button></Link>

            </div>
        </div>
    </div>
    );
};

export default PetDetails;
