import { Helmet } from "react-helmet-async";
import Banner from "../Headers/Banner";
import AddHere from "../../Components/DashBoard/AddHere/AddHere";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title> New | Home </title>
            </Helmet>

            <div>

                <Banner></Banner>
                <AddHere></AddHere>
            </div>

        </div>
    );
};

export default Home;