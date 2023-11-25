import { Helmet } from "react-helmet-async";
import Banner from "../Headers/Banner";
import AddHere from "../../Components/DashBoard/AddHere/AddHere";
import PetCategory from "./PetCategory/PetCategory";
import Inspire from "./Inspire/Inspire";
import Extra1 from "./Extra/Extra1";
import AboutUs from "./AboutUs/AboutUs";
import Extra2 from "./Extra/Extra2";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title> Cozy Pets | Home </title>
            </Helmet>

            <div>

                <div className="max-w-5xl mx-auto" >
                <Banner></Banner>
                <PetCategory></PetCategory>
                <Inspire></Inspire>
                <Extra1></Extra1>
                <AboutUs></AboutUs>
                <Extra2></Extra2>
                <AddHere></AddHere>


                </div>

            </div>

        </div>
    );
};

export default Home;