
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faPaw } from '@fortawesome/free-solid-svg-icons';


const Extra1 = () => {
    return (
        <div className='my-10' >
            

            {/* card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 mt-5 pl-14 lg:pl-0 space-y-5 ">

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                <FontAwesomeIcon icon={faPaw} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Pets</h2>
                </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <FontAwesomeIcon icon={faAdd} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mac Book</h2>
                </div>
            </div>


            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">

                  <FontAwesomeIcon icon={faAdd} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Air Pods</h2>
                </div>
            </div>



            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">

                
                <FontAwesomeIcon icon={faAdd} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Speakers</h2>
                </div>
            </div>


            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <FontAwesomeIcon icon={faAdd} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">KeyBoard</h2>
                </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <FontAwesomeIcon icon={faAdd} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Tablets</h2>
                </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <FontAwesomeIcon icon={faAdd} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Overhead HeadPhone</h2>
                </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                 
                <FontAwesomeIcon icon={faAdd} className="mt-4 w-52 h-16 text-4xl text-gray-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Overhead HeadPhone</h2>
                </div>
            </div> 



      </div>
        </div>
    );
};

export default Extra1;