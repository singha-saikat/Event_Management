import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


const Gallery = () => {
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({ once: false });
      }, []);
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-slate-200 text-5xl text-center font-roboto mb-4">
          Our <span className="text-5xl text-blue-600">Services</span>
        </h1>
        
      </div>
      <div className=" text-white">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/L9rS2MB/side-view-lovely-married-couple-which-hugging-dancing-first-wedding-dance-cozy-restaurant-while-thei.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/L9rS2MB/side-view-lovely-married-couple-which-hugging-dancing-first-wedding-dance-cozy-restaurant-while-thei.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/L9rS2MB/side-view-lovely-married-couple-which-hugging-dancing-first-wedding-dance-cozy-restaurant-while-thei.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/L9rS2MB/side-view-lovely-married-couple-which-hugging-dancing-first-wedding-dance-cozy-restaurant-while-thei.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/L9rS2MB/side-view-lovely-married-couple-which-hugging-dancing-first-wedding-dance-cozy-restaurant-while-thei.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.ibb.co/L9rS2MB/side-view-lovely-married-couple-which-hugging-dancing-first-wedding-dance-cozy-restaurant-while-thei.jpg" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
