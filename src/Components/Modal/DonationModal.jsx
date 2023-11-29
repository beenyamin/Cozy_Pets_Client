import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useAuth from '../../Hooks/useAuth';
import { ImSpinner } from 'react-icons/im';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY)


const DonationModal = ({ closeModal, isOpen }) => {
    const { user, loading } = useAuth()
    const navigate = useNavigate ()

    // console.log("from donation",Donation);


    const handleDonate = e => {
          e.preventDefault ()
          const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const donateAmount = form.donateAmount.value;
    const donationDetails = {name , email, donateAmount }
    console.log(donationDetails);

    fetch('http://localhost:5000/singleDonation', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(donationDetails)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          
          if (data.insertedId) {
            toast.success('Donation successful !');
            navigate('/dashboard/myDonation')
          } else {
            toast.error('Failed to Donate pet. Please try again.');
          }
  
  
        })


    }



    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg mb-4 font-bold text-center leading-6 text-gray-900'
                                >
                                    Donate Now ! Show Some Kindness.
                                </Dialog.Title>

                                <form onSubmit={handleDonate}>

                                    <div className='mt-4'>
                                        <label htmlFor='donationInput' className='text-black'>
                                           Your Name
                                        </label>
                                        <input
                                        defaultValue={user?.displayName}
                                            type='text'  
                                            name='name' 
                                            id='name'
                                            placeholder='Your Name'
                                            className='rounded-md focus:rose-300 text-gray-800 border border-rose-300 focus:outline-rose-500 p-2 w-full mt-1'

                                        />
                                       
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor='donationInput' className='text-black'>
                                          Your Email
                                        </label>
                                        <input
                                        defaultValue={user?.email}
                                        name='email'
                                            type='text'
                                            id='email'
                                            placeholder='Your Mail'
                                            className='rounded-md focus:rose-300 text-gray-800 border border-rose-300 focus:outline-rose-500 p-2 w-full mt-1'

                                        />
                                       
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor='donateAmount' className='text-black'>
                                            Enter Donation Amount
                                        </label>
                                        <input
                                            type='number'
                                            name='donateAmount'
                                            id='donateAmount'
                                            placeholder='Enter Amount'
                                            className='rounded-md focus:rose-300 text-gray-800 border border-rose-300 focus:outline-rose-500 p-2 w-full mt-1'

                                        />
                                       
                                    </div>

                                    {loading ? (
                                        < ImSpinner className='animate-spin m-auto' />
                                    ) : (
                                        <input type="submit" value="Donate" className="btn btn-error w-full text-white mt-4" />
                                    )}


                                </form> 

                                <hr className='mt-8 ' />
                                {/* Card data form */}
                           <div className='text-center mt-3'>

                           <Link to='/dashboard/myDonation'><button className='btn btn-sm text-center text-white rounded-full btn-error'>View Donation</button></Link>

                           </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default DonationModal;





