import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
          <div className="row-span-2">
            <motion.article className="flex flex-col rounded-xl bg-gradient-to-r h-full from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition  ">
              <div className="rounded-[10px] flex flex-col  h-full ">
                <div
                  className="w-full h-[60%] rounded-bl-[10px] rounded-tl-[10px]"
                  style={{
                    backgroundImage: `url('/results/1.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.8)",
                  }}
                ></div>
                <div className="w-full h-[40%] text-white p-6 rounded-[10px] bg-[#000614]">
                  <div className="mb-4 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap sm:text-[16px] sm:leading-[24px] rounded-full bg-[rgb(195,21,169)] bg-[linear-gradient(90deg,_rgba(195,21,169,1)_0%,_rgba(137,40,200,1)_50%,_rgba(83,57,229,1)_100%)] px-8 text-xs py-4 text-[#fff]">
                      Automation
                    </span>
                  </div>
                  <Link href="#">
                    <h3 className="mb-10 sm:text-[24px] sm:leading-[30px] text-lg text-left font-medium text-[#fff]">
                      Revolutionizing TV Audience Measurement
                    </h3>
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
          <div>
            <motion.article
              whileHover={{
                width: "100%",
                transition: { duration: 0.3 }, // Expand the width to cover the whole card
              }}
              className=" rounded-xl bg-gradient-to-r h-full from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition  "
            >
              <div className="rounded-[10px] flex bg-white h-full ">
                <div
                  className="w-1/2 rounded-bl-[10px] rounded-tl-[10px]"
                  style={{
                    backgroundImage: `url('/results/2.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.8)",
                  }}
                ></div>
                <motion.div
                  className="w-1/2 text-white p-6 rounded-[10px] bg-[#000614]"
                  initial={{ width: "50%" }} // Initial width of the right div
                  whileHover={{ width: "100%" }} // Expand the width of the right div when hovering
                  transition={{ duration: 0.3 }} // Optional: adjust the duration of the animation
                >
                  <div className="mb-4 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap sm:text-[16px] sm:leading-[24px] rounded-full bg-[rgb(195,21,169)] bg-[linear-gradient(90deg,_rgba(195,21,169,1)_0%,_rgba(137,40,200,1)_50%,_rgba(83,57,229,1)_100%)] px-8 text-xs py-4 text-[#fff]">
                      Cloud
                    </span>
                  </div>
                  <Link href="#">
                    <h3 className="mb-10 sm:text-[24px] sm:leading-[30px] text-lg text-left font-medium text-[#fff]">
                      Prominent American Watch Brand Thrives ure Migration
                    </h3>
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          </div>
          <div className="col-start-2">
            <motion.article
              whileHover={{
                width: "100%",
                transition: { duration: 0.3 }, // Expand the width to cover the whole card
              }}
              className=" rounded-xl bg-gradient-to-r h-full from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition  "
            >
              <div className="rounded-[10px] flex bg-white h-full ">
                <div
                  className="w-1/2 rounded-bl-[10px] rounded-tl-[10px]"
                  style={{
                    backgroundImage: `url('/results/2.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.8)",
                  }}
                ></div>
                <motion.div
                  className="w-1/2 text-white p-6 rounded-[10px] bg-[#000614]"
                  initial={{ width: "50%" }} // Initial width of the right div
                  whileHover={{ width: "100%" }} // Expand the width of the right div when hovering
                  transition={{ duration: 0.3 }} // Optional: adjust the duration of the animation
                >
                  <div className="mb-4 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap sm:text-[16px] sm:leading-[24px] rounded-full bg-[rgb(195,21,169)] bg-[linear-gradient(90deg,_rgba(195,21,169,1)_0%,_rgba(137,40,200,1)_50%,_rgba(83,57,229,1)_100%)] px-8 text-xs py-4 text-[#fff]">
                      Cloud
                    </span>
                  </div>
                  <Link href="#">
                    <h3 className="mb-10 sm:text-[24px] sm:leading-[30px] text-lg text-left font-medium text-[#fff]">
                      Prominent American Watch Brand Thrives ure Migration
                    </h3>
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
