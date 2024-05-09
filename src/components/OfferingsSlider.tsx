"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const OfferingsSlider = () => {
  return (
    <div className="bg-neutral-800">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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
      className={`group relative rounded-2xl me-8 h-[450px] w-[450px] overflow-hidden ${randomColorClass}`}
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
        <p className="bg-gradient-to-br from-white/20 to-white/0 px-8 py-4 tracking-wide font-semibold rounded-full capitalize text-base leading-6 text-white backdrop-blur-lg m-8">
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
