
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowUpRightDots , faHouse,faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';
import { GiRabbit } from "react-icons/gi";

const Extra1 = () => {
    return (
        <div className='mb-10' >  
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold  text-rose-500">Our Goals ..!</h2>
        <p className="text-gray-600 text-sm mt-2 "> Explore our world of pets, where companionship  <br />  meets care in a community  dedicated <br />  to furry happiness and well-being.</p>
        <div>
            <img className="items-center pt-5 mx-auto" 
                src={'https://d339b5nop2tkmp.cloudfront.net/packs/static/assets/images/our-work/dashed-line-0896c1b47aeeb44b29e9.svg'} alt="" />
            </div>  
      </div>


            
            {/* card */}
        <div className="grid md:grid-cols-2 ml-14 md:ml-0 lg:grid-cols-4 grid-cols-1 mt-5 pl-14 lg:pl-16 gap-5 md:px-20 ">
          
            <div className="card w-48 h-56 bg-base-100 shadow-xl  transition-transform transform-gpu hover:scale-105">
                <figure className="pt-8">
                    <FontAwesomeIcon  icon={faHouse} className=" w-52 text-4xl text-rose-500" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className='text-sm font-medium'>Our main objective is to ensure that all Pets have a home</p>
                </div>       
            </div>
           


            <div className="card w-48 h-56 bg-base-100 shadow-xl  transition-transform transform-gpu hover:scale-105">
                <figure className="pt-8">
                <FontAwesomeIcon className=" w-52 text-4xl text-rose-500" icon={faHandHoldingHeart} />
              
                </figure>
                <div className="card-body items-center text-center">
                    <p className='text-sm font-medium'>Increase capacity for rescue groups to help the most vulnerable pets</p>
                </div>
            </div>
          
            <div className="card w-48 h-56 bg-base-100 shadow-xl  transition-transform transform-gpu hover:scale-105">
                <figure className="pt-8">
                    <GiRabbit  className=" w-52 text-5xl text-rose-500" ></GiRabbit>
                   
                </figure>
                <div className="card-body items-center text-center">
                    <p className='text-sm font-medium'>Recognition & support of the bond between pets and their families</p>
                </div>
            </div>

            <div className="card w-48 h-56 bg-base-100 shadow-xl  transition-transform transform-gpu hover:scale-105">
                <figure className="pt-8">
                <FontAwesomeIcon className=" w-52 text-4xl text-rose-500" icon={faArrowUpRightDots} />
                </figure>
                <div className="card-body items-center text-center">
                    <p className='text-sm font-medium'>Increase capacity for rescue groups to help the most vulnerable pets</p>
                </div>
            </div>


           


           



      </div>
        </div>
    );
};

export default Extra1;