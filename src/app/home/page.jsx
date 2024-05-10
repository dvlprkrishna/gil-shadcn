"use client";
import React from "react";
import { BackgroundGradient } from "../../components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Container from "../../components/Container";
import Animated3dCards from "../../components/Animated3dCards";
const page = () => {
  return (
    <Container className="header-container" tag="header">
      test
      <Animated3dCards />
    </Container>
  );
};

export default page;
