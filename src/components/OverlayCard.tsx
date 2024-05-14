"use client";
import { easeIn } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
interface OverlayCardProps {
  imageUrl: string;
  title: string;
  link: string;
}

const OverlayCard: React.FC<OverlayCardProps> = ({ imageUrl, title, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="blog"
      style={{
        position: "relative",
        maxWidth: "400px",
        maxHeight: "400px",
        display: "inline-block",
        margin: "60px",
      }}
    >
      <a
        href={link}
        style={{
          textDecoration: "none",
          position: "relative",
          display: "inline-block",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={imageUrl}
          height={512}
          width={512}
          alt=""
          style={{
            maxWidth: "100%",

            transition: "transform 0.2s",
          }}
        />
        <div
          className="circle"
          style={{
            width: isHovered ? "fit-content" : "full",
            height: isHovered ? "100%" : "max-content",
            background: isHovered ? "rgba(240,82,86, 0.75)" : "rgba(0,0,0,.75)",

            position: "absolute",
            top: "10%",
            // transform: "translateY(-10%)",
            left: "10%",
            transition: ".2s",
            // opacity: isHovered ? 1 : 0,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            className="title"
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "22px",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            {title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default OverlayCard;
