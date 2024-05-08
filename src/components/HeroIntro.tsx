import React from "react";

const HeroIntro = () => {
  return (
    <div className="">
      <div
        className="relative flex items-center
        justify-center h-screen overflow-hidden"
      >
        <video
          src="https://deployednext.vercel.app/GITLBanner.mp4"
          autoPlay={true}
          loop
          muted
          className="absolute z-10 w-auto
            min-w-full min-h-full max-w-none"
        ></video>
        <div className=" w-full absolute flex z-[9999]">
          <h1 className="py-14 text-[13em] text-center sm:text-10xl leading-none select-none tracking-tightest font-[700]">
            <span
              data-content="Automate."
              className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1"
            >
              <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
                {" "}
                Automate.
              </span>
            </span>
            <span
              data-content="Cloud."
              className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2"
            >
              <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
                {" "}
                Cloud.
              </span>
            </span>
            <span
              data-content="Transformation."
              className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-3"
            >
              <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
                {" "}
                Transformation.
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
