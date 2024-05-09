"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const OfferingsSlider = () => {
  return (
    <>
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(220, 233, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(220, 233, 255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,36L120,48C240,60,480,84,720,88C960,92,1200,76,1440,66C1680,56,1920,52,2160,42C2400,32,2640,16,2880,18C3120,20,3360,40,3600,48C3840,56,4080,52,4320,48C4560,44,4800,40,5040,32C5280,24,5520,12,5760,14C6000,16,6240,32,6480,48C6720,64,6960,80,7200,72C7440,64,7680,32,7920,24C8160,16,8400,32,8640,36C8880,40,9120,32,9360,30C9600,28,9840,32,10080,42C10320,52,10560,68,10800,70C11040,72,11280,60,11520,52C11760,44,12000,40,12240,48C12480,56,12720,76,12960,72C13200,68,13440,40,13680,26C13920,12,14160,12,14400,24C14640,36,14880,60,15120,68C15360,76,15600,68,15840,54C16080,40,16320,20,16560,20C16800,20,17040,40,17160,50L17280,60L17280,120L17160,120C17040,120,16800,120,16560,120C16320,120,16080,120,15840,120C15600,120,15360,120,15120,120C14880,120,14640,120,14400,120C14160,120,13920,120,13680,120C13440,120,13200,120,12960,120C12720,120,12480,120,12240,120C12000,120,11760,120,11520,120C11280,120,11040,120,10800,120C10560,120,10320,120,10080,120C9840,120,9600,120,9360,120C9120,120,8880,120,8640,120C8400,120,8160,120,7920,120C7680,120,7440,120,7200,120C6960,120,6720,120,6480,120C6240,120,6000,120,5760,120C5520,120,5280,120,5040,120C4800,120,4560,120,4320,120C4080,120,3840,120,3600,120C3360,120,3120,120,2880,120C2640,120,2400,120,2160,120C1920,120,1680,120,1440,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
        ></path>
      </svg>
      <div className=" bg-[#DCE9FF] ">
        <div className="flex flex-col pt-10 items-center justify-center">
          <h2 className=" font-semibold text-[60px] leading-[70px] text-[#000614] text-center text-2xl mb-2 ">
            Our Offerings
          </h2>
          <p className="text-center text-[#000614] max-w-[50%]  text-xl font-[500] leading-8 ">
            Explore the boundless possibilities that our industry-focused
            expertise and reliable partnerships bring
          </p>{" "}
        </div>
        <HorizontalScrollCarousel />
        {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="container relative h-[300vh] bg-[#DCE9FF] "
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  // Array of predefined background colors
  const backgroundColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];
  // Array of corresponding font colors
  const fontColors = ["text-white", "text-white", "text-white", "text-black"];

  // Function to pick random index
  const getRandomIndex = () =>
    Math.floor(Math.random() * backgroundColors.length);

  // Get random index
  const randomIndex = getRandomIndex();

  // Get random background color class
  const randomColorClass = backgroundColors[randomIndex];

  // Get corresponding font color class
  const fontColorClass = fontColors[randomIndex];

  return (
    <div
      key={card.id}
      //   className={`group relative rounded-2xl me-8 h-[450px] w-[450px] overflow-hidden ${randomColorClass}`}
      className={`group relative  rounded-2xl me-8 h-[450px] w-[450px] overflow-hidden ${randomColorClass}`}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-start">
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 px-8 py-4 tracking-wide font-semibold rounded-full capitalize text-base leading-6 text-white backdrop-blur-lg m-8"> */}
        <p
          className={`px-8 py-4 tracking-wide font-semibold rounded-full capitalize text-base leading-6 backdrop-blur-lg m-8 ${randomColorClass} ${fontColorClass}`}
        >
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default OfferingsSlider;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/offerings/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/offerings/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/offerings/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/offerings/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/offerings/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/offerings/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/offerings/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
