import React from "react";

const HeroIntro = () => {
  return (
    <div className="">
      <h1 className="py-14 text-[23vw] text-center sm:text-8xl leading-none select-none tracking-tightest font-semibold">
        <span
          data-content="Automation."
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
            {" "}
            Automation.
          </span>
        </span>
        <span
          data-content="Cloudification."
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
            {" "}
            Cloudification.
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
  );
};

export default HeroIntro;
