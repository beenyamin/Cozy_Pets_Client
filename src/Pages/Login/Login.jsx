/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImSpinner } from "react-icons/im";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import LoginImg from '../../assets/images/Login.png'
import { useState } from "react";



const Login = () => {
    const { signIn, signInWithGoogle, loading } = useAuth()

    // form submit handler
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const handleLogin = async (e) => {

        e.preventDefault();
        const toastId = toast.loading('Logging in ...');

        try {
            await signIn(email, password);
            toast.success('Logged in', { id: toastId });
            navigate(location?.state ? location?.state : '/');

        } catch (error) {
            toast.error(error.message, { id: toastId });
        }

    }

    const handleGoogleLogin = async () => {
        const toastId = toast.loading('Logging in ...');

        try {
            await signInWithGoogle(email, password);
            toast.success('Logged in', { id: toastId });
            navigate(location?.state ? location?.state : '/');
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
    };




    return (
        <div>
            <Helmet>
                <title> New | Login </title>
            </Helmet>

    <div className="flex flex-col sm:flex-row">
        {/* Left half for the image */}

        <div className="sm:flex-1 bg-rose-400 flex items-center justify-center">
            <img className="w-80 h-80" src={LoginImg} alt="Login" />
        </div>
        {/* Right half for the login form */}
        <div className="sm:flex-1 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96">
                
            <Link to='/'><button className="absolute hidden btn-sm rounded-full lg:block top-3 right-14 m-4 bg-rose-400 text-white   hover:bg-rose-600 focus:outline-none focus:ring focus:border-blue-300">
             <IoIosCloseCircle size={15}/>
           </button></Link>

                <h2 className="  text-gray-300 text-center">WelCome Back</h2>
                <h2 className="text-2xl font-semibold mb-4 text-center"> Please Login</h2>
                
                <form onSubmit={handleLogin}>
                    <div className="mb-4 relative">
                        <MdMarkEmailRead className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
                            required
                            onBlur={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6 relative">
                        <RiLockPasswordFill className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                            type="password"
                            name="password"
                            placeholder="*****"
                            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
                            required
                            onBlur={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit" className="w-full bg-rose-400 text-white py-2 rounded-md hover:bg-rose-600 focus:outline-none focus:ring focus:border-blue-300" >
                       {loading ? (
                                < ImSpinner className='animate-spin m-auto' />
                              ) : (
                                ' Login'
                              )}
                      
                    </button>
                    <div className='space-y-1'>
                        <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                            Forgot password?
                        </button>
                    </div>
                    <div className="divider ">Or Log in With</div>
                    <div onClick={handleGoogleLogin}className='flex justify-center items-center space-x-2 border  m-2 p-2 border-gray-300 border-rounded cursor-pointer'>                   
                        <FcGoogle size={20} />
                        <p> Google</p>
                    </div>
                 
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Don't have an account ?{' '}
                        <Link
                            to='/register'
                            className='hover:underline text-rose-400 hover:text-rose-500 '
                        >
                            Sign up
                        </Link>
                        
                    </p>

                </form>
            </div>



        </div>
    </div>




        </div>
    );
};

export default Login;