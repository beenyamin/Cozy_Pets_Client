
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCat , faDove} from '@fortawesome/free-solid-svg-icons';



const Inspire = () => {
    return (
        <div className='bg-slate- '>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="relative rounded-md flex items-center flex-col my-20">
                        <section
                            className=" lg:w-11/12 md:w-3/4 w-4/6  lg:h-96 mx-auto relative"
                            style={{
                                backgroundImage: 'url("https://i.ibb.co/ryGsxgm/pngtree.jpg")',
                            }}
                        >
                            <div
                                className="container py-12 bg-slate-400 bg-opacity-50 mx-auto text-center text-white"
                                style={{
                                    height: '100%', // Set the height to full height
                                    backdropFilter: 'blur(4px)', // Adjust the blur intensity as needed
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the background color for better contrast
                                }}
                            >
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    Give a Forever Home <br /> <span className='text-rose-500'>to a Furry Friend</span>
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg mb-8">
                                    Embrace the joy of pet companionship. Adopt a <br /> loving friend and make a difference in their life.
                                </p>
                                <div className="flex justify-center items-center mb-8">
                                    <FontAwesomeIcon icon={faCat} className="text-lg md:text-2xl mr-2" />
                                    <p>Your new best friend is waiting for you!</p>
                                </div>
                                <button className="bg-rose-500 text-white py-2 px-6 rounded-full hover:bg-rose-700 transition duration-300">
                                    Adopt Now
                                </button>
                            </div>
                        </section>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative rounded-md flex items-center flex-col my-20">
                        <section
                            className=" lg:w-11/12 md:w-3/4 w-4/6  lg:h-96 mx-auto relative"
                            style={{
                                backgroundImage: 'url("https://i.ibb.co/s1DHRbV/HD-wallpaper-blue-white-parakeet-bird-on-white-ring-birds-budgie-bird.jpg")',
                            }}
                        >
                            <div
                                className="container py-12 bg-slate-400 bg-opacity-50 mx-auto text-center text-white"
                                style={{
                                    height: '100%', 
                                    backdropFilter: 'blur(2px)', 
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                                }}
                            >
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    Give a Forever Home <br /> <span className='text-rose-500'>to a Furry Friend</span>
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg mb-8">
                                    Embrace the joy of pet companionship. Adopt a <br /> loving friend and make a difference in their life.
                                </p>
                                <div className="flex justify-center items-center mb-8">
                              
                                    <FontAwesomeIcon icon={faDove} className="text-lg md:text-2xl mr-2" />
                                    <p>Your new best friend is waiting for you!</p>
                                </div>
                                <button className="bg-rose-500 text-white py-2 px-6 rounded-full hover:bg-rose-700 transition duration-300">
                                    Adopt Now
                                </button>
                            </div>
                        </section>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative rounded-md flex items-center flex-col my-20">
                        <section
                            className=" lg:w-11/12 md:w-3/4 w-4/6  lg:h-96 mx-auto relative"
                            style={{
                                backgroundImage: 'url("https://i.ibb.co/jfkmfdY/pexels-mikhail-nilov-6530652.jpg")',
                            }}
                        >
                            <div
                                className="container py-12 bg-slate-400 bg-opacity-50 mx-auto text-center text-white"
                                style={{
                                    height: '100%', 
                                    backdropFilter: 'blur(4px)', 
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    Give a Forever Home <br /> <span className='text-rose-500'>to a Furry Friend</span>
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg mb-8">
                                    Embrace the joy of pet companionship. Adopt a <br /> loving friend and make a difference in their life.
                                </p>
                                <div className="flex justify-center items-center mb-8">
                                    <FontAwesomeIcon icon={faCat} className="text-lg md:text-2xl mr-2" />
                                    <p>Your new best friend is waiting for you!</p>
                                </div>
                                <button className="bg-rose-500 text-white py-2 px-6 rounded-full hover:bg-rose-700 transition duration-300">
                                    Adopt Now
                                </button>
                            </div>
                        </section>
                    </div>
                </SwiperSlide>
            </Swiper>



        </div>
    );
};

export default Inspire;