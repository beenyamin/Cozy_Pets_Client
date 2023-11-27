

petName,
petImage,
maxDonationAmount,
donatedAmount,
description





<div>

const [AllPets] = useAllPets();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets(AllPets);
  }, [AllPets]);

  return (
    <div className=''>
      <Helmet>
        <title>Cozy Pets | Pet Listing</title>
      </Helmet>
      <div className='pt-28  text-center '>
        
      <div className="join ">
          <div>
            <div>
              <input className="input  w-14 md:w-36 input-bordered join-item" placeholder="Search" />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn join-item">Search</button>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {pets.map((pet) => (
          <PetPageCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );


  const recommendedDonations = [
        {
          id: 4,
          petName: 'Mittens',
          petImage: 'https://placekitten.com/300/200',
          maxDonationAmount: 80,
          donatedAmount: 20,
        },
        {
          id: 5,
          petName: 'Rover',
          petImage: 'https://placedog.net/300/200?id=5',
          maxDonationAmount: 200,
          donatedAmount: 100,
        },
        {
          id: 6,
          petName: 'Smokey',
          petImage: 'https://placekitten.com/300/200',
          maxDonationAmount: 90,
          donatedAmount: 40,
        },
        // Add more recommended donation data as needed
      ];
    return (


        <div className="container mx-auto pt-24 grid grid-cols-3 gap-8">
      {donationCampaigns.map(campaign => (
        <div key={campaign.id} className="bg-white rounded shadow p-4">
          <img className="w-full h-32 object-cover mb-4" src={campaign.petImage} alt={campaign.petName} />
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{campaign.petName}</h3>
            <p className="mb-2">Max Donation: ${campaign.maxDonationAmount}</p>
            <p className="mb-4">Donated: ${campaign.donatedAmount}</p>
            <Link to={`/donation/`}>
             <button className="bg-rose-500 btn btn-sm rounded-full text-white  ">
             View Details
           </button>
           </Link>
          </div>
        </div>
      ))}

      
          {/* Recommended Donation Section */}
          <div className="mt-6 card pt-4">
            <h4 className="text-lg font-semibold mb-2">Recommended Donations</h4>
            {recommendedDonations.map(recommended => (
              <div key={recommended.id} className="mb-2">
                <img className="w-12 h-12 object-cover inline-block mr-2" src={recommended.petImage} alt={recommended.petName} />
                <span className="text-gray-700">{recommended.petName}</span>
                <span className="ml-2">${recommended.maxDonationAmount}</span>
              </div>
            ))}
          </div>

    </div>
     
         
        
    );



























<div className='flex justify-center items-center min-h-screen'>
<div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
  <div className='mb-8 text-center'>
    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
    <p className='text-sm text-gray-400'>
      Sign in to access your account
    </p>
  </div>
  <form
    onSubmit={handleSubmit}
    noValidate=''
    action=''
    className='space-y-6 ng-untouched ng-pristine ng-valid'
  >
    <div className='space-y-4'>
      <div>
        <label htmlFor='email' className='block mb-2 text-sm'>
          Email address
        </label>
        <input
          type='email'
          name='email'
          id='email'
          required
          placeholder='Enter Your Email Here'
          className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
          data-temp-mail-org='0'
        />
      </div>
      <div>
        <div className='flex justify-between'>
          <label htmlFor='password' className='text-sm mb-2'>
            Password
          </label>
        </div>
        <input
          type='password'
          name='password'
          autoComplete='current-password'
          id='password'
          required
          placeholder='*******'
          className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
        />
      </div>
    </div>

    <div>
      <button
        type='submit'
        className='bg-rose-500 w-full rounded-md py-3 text-white' >
        {loading ? (
          < PiSpinnerBold className='animate-spin m-auto' />
        ) : (
          'Continue'
        )}
      </button>
    </div>
  </form>
  
  <div className='space-y-1'>
    <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
      Forgot password?
    </button>
  </div>
  <div className='flex items-center pt-4 space-x-1'>
    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
    <p className='px-3 text-sm dark:text-gray-400'>
      Login with social accounts
    </p>
    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
  </div>
  <div
    onClick=''
    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
  >
    <FcGoogle size={32} />

    <p>Continue with Google</p>
  </div>
  <p className='px-6 text-sm text-center text-gray-400'>
    Don&apos;t have an account yet?{' '}
    <Link
      to='/signup'
      className='hover:underline hover:text-rose-500 text-gray-600'
    >
      Sign up
    </Link>
    .
  </p>
</div>
</div>

{/* ======== */}

<div className="dropdown dropdown-end ">
<label tabIndex={0} className="flex cursor-pointer rounded-full border">
  <BsList className=" text-white mt-1 ml-2" size={20} />
  <img src="https://i.ibb.co/NjVBtMq/stacked-peaks-haikei.png" className="inline-block h-7  ring-1 ring-white w-7 ml-2 rounded-full" alt="" />

</label>
<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
  <li>
    <a className="justify-between">Profile<span className="badge">New</span> </a>
  </li>
 <li> <Link to='/login'>Login</Link></li>
  <li><a>Logout</a></li>
</ul>
</div>


{/* ========> */}
<div className="dropdown dropdown-end">
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">

  <div className="w-10 rounded-full">
    <img src={user.photoURL} alt={user.displayName} />

  </div>
  <span>{user.displayName}</span>

</label>
<ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-200 rounded-box w-60">
  <li>
    <button className="btn btn-sm  btn-info"></button>
  </li>
  <li>
    <button className="btn btn-sm border-spacing-1 mt-3  "
      onClick={logOutBtn}
    >Logout</button>
  </li>

</ul>
</div>

</div>