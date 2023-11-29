
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import img from "../../../assets/images/cats3.jpg"
import img1 from "../../../assets/images/dogs.jpg"
import img2 from "../../../assets/images/fish.jpg"
import img3 from "../../../assets/images/rabbit.jpg"
import img4 from "../../../assets/images/hamsters.jpg"
import img5 from "../../../assets/images/birds.jpg"
import { Link } from "react-router-dom";




const PetCategory = () => {

    return (
        <div className=' my-14 ' >
            <div className="mx-auto  text-center max-w-2xl space-y-4">
                <h2 className="text-4xl text-rose-500 font-bold">Pets Category</h2>
                <p className="text-gray-600 text-sm ">Find joy in our diverse selection of adorable <br /> companions for a  delightful and fulfilling experience.</p>
                <img className="items-center pt-5 mx-auto" 
                src={'https://d339b5nop2tkmp.cloudfront.net/assets/our-work/dotted-line-loop-2-7c257f1b3e5318c07df9a9fb495318f7182c649ac790fe5279084b0fd01051f3.svg'} alt="" />

            </div>

            {/* card */}
           
                <div className="pt-6 ml-20 lg:ml-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:px-16  lg:grid-cols-3 xl:grid-cols-5 ">          
        <Link className='col-span-1 transition-transform transform-gpu hover:scale-105 hover:border-2 hover:border-rose-500  w-60 h-64  shadow-lg   rounded-lg cursor-pointer group rounded-xl'>
                <div className=' pb-6  relative overflow-hidden rounded-xl'>
                    <img className='object-cover group-hover:scale-110 transition'
                        src={img}
                        alt='card' />
                    <div className="absolute top-2 right-2">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
                    </div>

                </div>

                <div className="text-center">
                    <div className='font-semibold text-lg'>Sweet Cats</div>
                    <button className="bg-rose-500 btn btn-xs text-white rounded-full">Adopt Now</button>
                </div>
        </Link>
        
        <Link className='col-span-1 transition-transform transform-gpu hover:scale-105 hover:border-2 hover:border-rose-500  w-60 h-64  shadow-lg   rounded-lg cursor-pointer group rounded-xl'>
            <div className=''>
                <div className=' pb-6 relative overflow-hidden rounded-xl'>
                    <img className='object-cover group-hover:scale-110 transition'
                        src={img1}
                        alt='card' />
                    <div className="absolute top-2 right-2">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
                    </div>

                </div>

                <div className="text-center">
                    <div className='font-semibold text-lg'>Alone Dogs</div>
                    <button className="bg-rose-500 btn btn-xs text-white rounded-full">Adopt Now</button>
                </div>
            </div>
        </Link>
        <Link className='col-span-1 transition-transform transform-gpu hover:scale-105 hover:border-2 hover:border-rose-500  w-60 h-64  shadow-lg   rounded-lg cursor-pointer group rounded-xl'>
            <div className=''>
                <div className=' pb-6 relative overflow-hidden rounded-xl'>
                    <img className='object-cover group-hover:scale-110 transition'
                        src={img2}
                        alt='card' />
                    <div className="absolute top-2 right-2">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
                    </div>

                </div>

                <div className="text-center">
                    <div className='font-semibold text-lg'>Aquarium Fish</div>
                    <button className="bg-rose-500 btn btn-xs text-white rounded-full">Adopt Now</button>
                </div>
            </div>
        </Link>

        <Link className='col-span-1 transition-transform transform-gpu hover:scale-105 hover:border-2 hover:border-rose-500  w-60 h-64  shadow-lg   rounded-lg cursor-pointer group rounded-xl'>
            <div className=''>
                <div className=' pb-6 relative overflow-hidden rounded-xl'>
                    <img className='object-cover group-hover:scale-110 transition'
                        src={img3}
                        alt='card' />
                    <div className="absolute top-2 right-2">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
                    </div>

                </div>

                <div className="text-center">
                    <div className='font-semibold text-lg'>Cute Rabbits</div>
                    <button className="bg-rose-500 btn btn-xs text-white rounded-full">Adopt Now</button>
                </div>
            </div>
        </Link>
        <Link className='col-span-1 transition-transform transform-gpu hover:scale-105 hover:border-2 hover:border-rose-500  w-60 h-64  shadow-lg   rounded-lg cursor-pointer group rounded-xl'>
            <div className=''>
                <div className=' pb-6 relative overflow-hidden rounded-xl'>
                    <img className='object-cover group-hover:scale-110 transition'
                        src={img4}
                        alt='card' />
                    <div className="absolute top-2 right-2">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
                    </div>

                </div>

                <div className="text-center">
                    <div className='font-semibold text-lg'>Hamsters</div>
                    <button className="bg-rose-500 btn btn-xs text-white rounded-full">Adopt Now</button>
                </div>
            </div>
        </Link>
        <Link className='col-span-1 transition-transform transform-gpu hover:scale-105 hover:border-2 hover:border-rose-500  w-60 h-64  shadow-lg   rounded-lg cursor-pointer group rounded-xl'>
            <div className=''>
                <div className=' pb-6 relative overflow-hidden rounded-xl'>
                    <img className='object-cover group-hover:scale-110 transition'
                        src={img5}
                        alt='card' />
                    <div className="absolute top-2 right-2">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
                    </div>

                </div>

                <div className="text-center">
                    <div className='font-semibold text-lg'>Parakeet parrot</div>
                    <button className="bg-rose-500 btn btn-xs text-white rounded-full">Adopt Now</button>
                </div>
            </div>
        </Link>

                </div>


            
        </div>


    );
};

export default PetCategory;
