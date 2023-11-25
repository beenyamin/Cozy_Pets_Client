





<div>
https://d339b5nop2tkmp.cloudfront.net/packs/static…ges/our-work/dashed-line-0896c1b47aeeb44b29e9.svg

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