
 
import aboutImg from "../../../assets/images/About.jpg"

const AboutUs = () => {
    return (
        <section id="about-us" className="bg-gray-100  lg:pl-4 rounded-md">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mt-5 lg:mt-0  pl-2 mb-8 md:mb-0">
              <h2 className="text-4xl  font-bold mb-4 pl-3 border-rose-500 text-rose-500 border-l-2">About Us</h2>
              <p className="text-gray-700 text-sm">
                Welcome to our cozy pets community! Our website is dedicated to providing a warm and loving space for pet owners and animal enthusiasts.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                At Cozy Pets, we understand the special bond you share with your furry friends. Our platform is designed to celebrate this bond and offer a range of resources to make the journey of pet ownership even more delightful.
              </p>
            </div>
            <div className="md:w-1/2 transition-transform transform-gpu hover:scale-105">
              {/* You can add an image or other media here */}
              <img src={aboutImg} alt="About Us" className="w-full rounded-r-md h-auto " />
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;