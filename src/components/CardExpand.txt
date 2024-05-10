"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

const Slide = ({ image, sideText, number, title, subtitle }) => {
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    // Logic for animating slide
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div
      className={`slide ${isCurrent ? "slide--current slide--visible" : ""}`}
    >
      <div className="slide__img-wrap">
        <div
          className="slide__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="slide__side">{sideText}</div>
      <div className="slide__title-wrap">
        <span className="slide__number">{number}</span>
        <h3 className="slide__title">{title}</h3>
        <h4 className="slide__subtitle">{subtitle}</h4>
      </div>
    </div>
  );
};

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Logic for slideshow navigation and animations
    return () => {
      // Cleanup logic if needed
    };
  }, [currentSlide]);

  const navigate = (direction) => {
    // Logic for navigating slides
  };

  return (
    <div className="slideshow">
      <div className="slideshow__deco"></div>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          image={slide.image}
          sideText={slide.sideText}
          number={slide.number}
          title={slide.title}
          subtitle={slide.subtitle}
        />
      ))}
      <button className="nav nav--prev" onClick={() => navigate("prev")}>
        <svg className="icon icon--navarrow-prev">
          <use xlinkHref="#icon-navarrow"></use>
        </svg>
      </button>
      <button className="nav nav--next" onClick={() => navigate("next")}>
        <svg className="icon icon--navarrow-next">
          <use xlinkHref="#icon-navarrow"></use>
        </svg>
      </button>
    </div>
  );
};

const Content = ({ number, title, subtitle, text, onClose }) => {
  useEffect(() => {
    // Logic for showing content
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div className="content__item content__item--current">
      <button className="content__close" onClick={onClose}>
        <svg className="icon icon--longarrow">
          <use xlinkHref="#icon-longarrow"></use>
        </svg>
      </button>
      <span className="content__number">{number}</span>
      <h2 className="content__title">{title}</h2>
      <h3 className="content__subtitle">{subtitle}</h3>
      <p className="content__text">{text}</p>
    </div>
  );
};

const CardExpand = () => {
  const [slides, setSlides] = useState([]);
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load images and set slides
    const images = document.querySelectorAll(".slide__img");
    imagesLoaded(images, { background: true }, () => {
      const newSlides = []; // Populate slides array with data
      const newContents = []; // Populate contents array with data
      setSlides(newSlides);
      setContents(newContents);
      setIsLoading(false);
    });
  }, []);

  const showContent = (index) => {
    // Logic for showing content
  };

  const hideContent = () => {
    // Logic for hiding content
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <div className="frame">{/* Header code */}</div>
      <Slideshow slides={slides} />
      <div className="content">
        {contents.map((content, index) => (
          <Content
            key={index}
            number={content.number}
            title={content.title}
            subtitle={content.subtitle}
            text={content.text}
            onClose={hideContent}
          />
        ))}
      </div>
    </main>
  );
};

export default CardExpand;
