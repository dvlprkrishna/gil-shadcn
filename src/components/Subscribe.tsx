import React from "react";

const Subscribe = () => {
  return (
    <div className="container text-center py-24 px-10 rounded-3xl bg-[linear-gradient(to_top,_rgba(0,_73,_223,_0)_67%,_#fe0f83)]">
      {/* <div className="container py-24 rounded-3xl bg-[rgb(0,73,223)] bg-[linear-gradient(0deg,_rgba(0,73,223,0)_0%,_rgba(254,15,131,1)_100%)]"> */}
      <h1 className="  text-[60px] leading-[70px] mb-10 font-semibold ">
        Let&apos;s keep the conversation going
      </h1>
      <p className="text-[#d4beff] font-medium text-xl ">
        Subscribe to our newsletter and get updates on what we do
      </p>
      <div className="my-10 max-w-3xl text-center mx-auto ">
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Enter your email address"
            className="w-full rounded-full border-gray-200 py-2.5 px-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
