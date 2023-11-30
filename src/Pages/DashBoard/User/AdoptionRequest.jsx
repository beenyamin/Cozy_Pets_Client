import { Helmet } from "react-helmet-async";


const AdoptionRequest = () => {
    return (
        <div>
             <Helmet>
                <title> DashBoard | AdoptionRequest </title>
            </Helmet>
             
        <h2 className="text-center text-xl font-bold mt-40"> No Adoption Request Found</h2>
        </div>
    );
};

export default AdoptionRequest;