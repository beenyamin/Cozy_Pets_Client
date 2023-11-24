import { BsSmartwatch } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';


const Extra1 = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faPaw} className="mt-4 text-4xl text-gray-800" />

            {/* card */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-5 pl-14 lg:pl-0 space-y-5 ">

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                <BsSmartwatch className='w-52 h-16'></BsSmartwatch>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Smart Watch</h2>
                </div>
            </div>

            {/* <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">

                    <MdLaptopMac className='w-52 h-16'></MdLaptopMac>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mac Book</h2>
                </div>
            </div> */}


            {/* <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">

                  <TbDeviceAirpods className='w-52 h-16'></TbDeviceAirpods>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Air Pods</h2>
                </div>
            </div>



            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">

                
                  <BsSpeakerFill className='w-52 h-16'></BsSpeakerFill>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Speakers</h2>
                </div>
            </div>


            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <GiKeyboard className='w-52 h-16'></GiKeyboard>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">KeyBoard</h2>
                </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <FaTabletAlt className='w-52 h-16'></FaTabletAlt>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Tablets</h2>
                </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <TfiHeadphoneAlt className='w-52 h-16'></TfiHeadphoneAlt>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Overhead HeadPhone</h2>
                </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                 
                  <GiDeliveryDrone className='w-52 h-16'></GiDeliveryDrone>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Overhead HeadPhone</h2>
                </div>
            </div> */}



      </div>
        </div>
    );
};

export default Extra1;