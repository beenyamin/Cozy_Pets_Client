import { Link, useLoaderData } from "react-router-dom";
import useStyledButton from "../../Hooks/useStyledButton";
import AnotherComponents from "../../Components/AnotherComponents";


const PetDetails = () => {
    const buttonStyles = useStyledButton();
    const pets = useLoaderData();
    const { _id, age, name, image } = pets;

    return (
        <div>
        <div className="hero space-y-5 rounded-lg   min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
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

                    </div>
                    <hr />
                    <p className="mb-4"> <span className="text-sky-400 text-xl font-semibold ">Details:</span> </p>


                    <button {...buttonStyles}>
                        Adopt
                    </button>


                </div>
            </div>
          
           
        </div>

        <AnotherComponents></AnotherComponents>
        </div>
    );
};

export default PetDetails;
