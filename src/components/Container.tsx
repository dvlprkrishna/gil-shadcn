import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  map?: any;
  tag?: keyof JSX.IntrinsicElements;
}

const Animated3dCards: React.FC<ContainerProps> = ({
  children,
  className,
  map,
  tag: Tag = "div",
}) => {
  return (
    <Tag
      className={`container mx-auto px-8 text-center flex justify-center ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Animated3dCards;
