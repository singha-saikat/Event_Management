import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="">
      <div className="mt-8">
        <h1 className="text-inherit text-5xl text-center font-roboto mb-4">
          <span className="text-5xl text-violet-600">About</span> Us
        </h1>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex-1">
          <img
            src="https://i.ibb.co/jhvDp8b/event-manager-showing-laptop-happy-woman.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-3xl pt-4 pb-8 text-center">We Will Give A Very Special Celebration For You</h2>
          <p>
            We are passionate about turning your special moments into
            unforgettable memories. With years of experience in event
            management, we specialize in creating magical weddings, exciting
            birthday parties, heartwarming baby showers, and more.. 
          </p>
          <div className="card-actions justify-center">
         <Link to={"/contact"}>
         <button className="btn btn-info  rounded-lg">Contact Us</button>
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
