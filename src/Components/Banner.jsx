/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <div>
      <div className="relative  font-sans pt-20 mb-4 ">
        <h1 className=" text-3xl md:text-5xl uppercase text-center text-inherit font-roboto ">
          Its time to celebrate!{" "}
          <span className="text-blue-600 font-semibold">
            The <br />
            best event organizers
          </span>{" "}
        </h1>
        <div className="flex justify-center mt-6">
          <Link to={"/contact"}>
          <button className="btn btn-info  rounded-sm">Contact Us</button>
          </Link>
        </div>
        <div className="swiper mySwiper w-full py-12 mt-4">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-center bg-cover w-72">
              <img
                src="https://i.ibb.co/w7wZ7LC/bunch-flowers-leaves-table.jpg"
                alt="Nature Image 1"
                className="w-full h-72"
              />
            </div>
            <div className="swiper-slide bg-center bg-cover w-72">
              <img
                src="https://i.ibb.co/YttxbQQ/man-takes-picture-gorgeous-scandinavian-landscape.jpg"
                alt="Nature Image 2"
                className="w-full h-72"
              />
            </div>
            <div className="swiper-slide bg-center bg-cover w-72 ">
              <img
                src="https://i.ibb.co/0fvkYfQ/cute-couple-holding-christmas-decorations-gift.jpg"
                alt="Nature Image 3"
                className="w-full h-72"
              />
            </div>
            <div className="swiper-slide bg-center bg-cover w-72 ">
              <img
                src="https://i.ibb.co/jy1zybD/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs.jpg"
                alt="Nature Image 4"
                className="w-full h-72"
              />
            </div>
            <div className="swiper-slide bg-center bg-cover w-72 ">
              <img
                src="https://i.ibb.co/5KPrC2q/tall-vases-with-white-candles-stand-shiny-branches.jpg"
                alt=" Image 5"
                className="w-full h-72"
              />
            </div>
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
