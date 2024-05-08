"use client";
import React, { useEffect } from "react";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const Announcement = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 5000,
      },
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: ".swiper-prev-button ",
        nextEl: ".swiper-next-button",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <>
      <div className="  px-4 py-3 bg-gray-900">
        <div className="mx-auto flex max-w-3xl items-baseline justify-center">
          <button
            className="swiper-prev-button  hidden sm:block sm:rounded sm:transition text-gray-400 hover:text-gray-300"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 rtl:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <p className="text-center text-sm font-medium text-white">
                  Love Alpine JS?
                  <a href="#" className="block underline sm:inline-block">
                    {" "}
                    Check out this new course!{" "}
                  </a>
                </p>
              </div>

              <div className="swiper-slide">
                <p className="text-center text-sm font-medium text-white">
                  Love Tailwind CSS?
                  <a href="#" className="block underline sm:inline-block">
                    {" "}
                    Check out this new course!{" "}
                  </a>
                </p>
              </div>

              <div className="swiper-slide">
                <p className="text-center text-sm font-medium text-white">
                  Love Laravel?
                  <a href="#" className="block underline sm:inline-block">
                    {" "}
                    Check out this new course!{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <button
            className="swiper-next-button hidden sm:block sm:rounded sm:transition text-gray-400 hover:text-gray-300"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 rtl:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Announcement;
