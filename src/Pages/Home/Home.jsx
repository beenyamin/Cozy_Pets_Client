import { Helmet } from "react-helmet-async";
import Banner from "../Headers/Banner";
import AddHere from "../../Components/DashBoard/AddHere/AddHere";
import PetCategory from "./PetCategory/PetCategory";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title> New | Home </title>
            </Helmet>

            <div>

                <Banner></Banner>
                <div className="max-w-5xl mx-auto " >
                <PetCategory></PetCategory>
               
                <AddHere></AddHere>
                </div>

            </div>

        </div>
    );
};

export default Home;