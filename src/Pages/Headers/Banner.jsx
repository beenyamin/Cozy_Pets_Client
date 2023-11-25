
const Banner = () => {
    return (
        <div className="relative h-screen   bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://i.ibb.co/ryGsxgm/pngtree.jpg")'}}
       
        >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center" 
      style={{
        height: '100%', 
        backdropFilter: 'blur(3px)', 
        backgroundColor: 'rgba(0, 0, 0, 0.3)',}}
      
      >

        <div className="text-white md:text-start text-center md:ml-96 mt-5 lg:mt-36 md:mt-20" >
    
      
          <h1 className="text-xl font-medium mb-2">ANIMALS NEED</h1>
          <h1 className="text-5xl text-rose-500 font-bold mb-3">Your Help!</h1>
          <p className="text-sm md:pl-3 md:border-l-2">You can chip in with money & effort Cats,<br /> Dogs and Even Raccoons Adopt Any Pet You Like!</p>
              <button className=" text-white mt-3 px-3 py-2  font-semibold  rounded-full bg-rose-500 ">Donate Now</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;