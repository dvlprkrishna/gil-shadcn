import React from "react";

const ResultSection = () => {
  return (
    <div className="">
      <div className="  ">
        <div className="flex flex-col pt-10 items-center justify-center">
          <h2 className=" font-semibold text-[60px] leading-[70px] text-[#fff] text-center text-2xl mb-2 ">
            Delivering <br />
            Results that Matters
          </h2>
          <p className="text-center text-[#fff] max-w-[50%]  text-xl font-[500] leading-8 ">
            World&apos;s top-notch businesses choose us for our excellent
            technical acumen and proven standards
          </p>{" "}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-x-16 py-20 h-auto sm:h-screen md:h-auto relative w-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="row-span-2">
            <article className=" rounded-xl h-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition  ">
              <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    How to center an element using JavaScript and jQuery
                  </h3>
                </a>

                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    Snippet
                  </span>

                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    JavaScript
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className=" rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition  ">
              <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    How to center an element using JavaScript and jQuery
                  </h3>
                </a>

                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    Snippet
                  </span>

                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    JavaScript
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div className="col-start-2">
            <article className=" rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition  ">
              <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    How to center an element using JavaScript and jQuery
                  </h3>
                </a>

                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    Snippet
                  </span>

                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    JavaScript
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
