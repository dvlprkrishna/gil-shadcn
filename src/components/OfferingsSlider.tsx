"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const OfferingsSlider = () => {
  return (
    <>
      {/*  */}
      <div className=" bg-[#DCE9FF]">
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
