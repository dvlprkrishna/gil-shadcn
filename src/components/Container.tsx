import React from "react";

const Container = ({
  children,
  className,
  tag: Tag = "div",
  map,
}: {
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  map?: any;
}) => {
  return (
    <Tag
      className={`container mx-auto px-8 text-center flex justify-center ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Container;
