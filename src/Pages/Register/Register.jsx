import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUserCheck } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { ImSpinner } from "react-icons/im";
import RegisterImg from '../../assets/images/Sign up.png'
import { ImageUpload } from "../../Api/utils";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { getToken, saveUser } from "../../Api";

const Register = () => {
    const { createUser, updateUserProfile, signInWithGoogle,loading } = useAuth();
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
    
        // Password length check
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters!');
            return;
        } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error("Password Must Be One Uppercase & One Special character");
            return;
        }   
        try {
            const imageData = await ImageUpload(image);
            const UserCreate = await createUser(email, password);
            await updateUserProfile(name, imageData?.data?.display_url);
            console.log(UserCreate);
            const userSaveDb = await saveUser(UserCreate?.user);
            console.log(userSaveDb);
            //token 
            await getToken(UserCreate?.user?.email);
            navigate('/');
            toast.success('Registration Successful');
        } catch (error) {
            toast.error(error?.message);
        }
    }
    

    const handleGoogleRegister = async () => {

        try {
            const GoogleRegister = await signInWithGoogle()
            const userSaveDb = await saveUser(GoogleRegister?.user)
            console.log(userSaveDb);

            //token 
            await getToken(GoogleRegister?.user?.email)
            navigate('/')
            toast.success(' SuccessFully Registration With Google')
        
        } catch (error) {
            toast.error(error?.message);
        }
    }


    return (
        <div>
            <Helmet>
                <title> New | Register </title>
            </Helmet>

            <div className="flex flex-col sm:flex-row">
                {/* Left half for the image */}
                <div className="sm:flex-1 bg-rose-400 flex items-center justify-center">
                    <img className="w-80 h-80" src={RegisterImg} alt="Login" />
                </div>

                {/* Right half for the login form */}
                <div className="sm:flex-1 min-h-screen flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96">
                        <Link to='/'><button className="absolute hidden btn-sm rounded-full lg:block top-5 right-14 m-4 bg-rose-400 text-white   hover:bg-rose-600 focus:outline-none focus:ring focus:border-blue-300">
                            <IoIosCloseCircle size={15} />
                        </button></Link>
                        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="mb-2 relative">
                                <FaUserCheck className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name"
                                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
                                    required
                                />
                            </div>
                            <div className="mb-3 relative">
                                <MdMarkEmailRead className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
                                    required
                                />
                            </div>
                            <div className="mb-3 relative">
                                <RiLockPasswordFill className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="*****"
                                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    className="mb-3 input-bordered cursor-pointer file-input-bordered file-input-error"
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*' />
                            </div>
                        
                            <button type="submit" className="w-full font-medium bg-rose-400 text-white py-2 rounded-md hover:bg-rose-600 focus:outline-none focus:ring focus:border-blue-300" >
                               
                                 {loading ? (
                                < ImSpinner className='animate-spin m-auto' />
                              ) : (
                                ' Create Account'
                              )}
                                
                            </button>

                            <div className="divider"> Sign Up With</div>
                            <div onClick={handleGoogleRegister}
                                className='flex justify-center items-center space-x-2 border  m-2 p-2 border-gray-300 border-rounded cursor-pointer' >
                                <FcGoogle size={20} />
                                <p>  Google</p>

                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Already have an account ?{' '}
                                <Link to='/login' className='hover:underline text-rose-400 hover:text-rose-500'>  Login
                                </Link>

                            </p>

                        </form>
                    </div>



                </div>
            </div>




        </div>
    );
};

export default Register;