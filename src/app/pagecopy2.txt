import Container from "@/components/Container";
import Announcement from "@/components/Announcement";
import DesktopNavbar from "@/components/DesktopNavbar";
import React from "react";
import LoremIpsum from "@/components/LoremIpsum";
import HeroIntro from "@/components/HeroIntro";

const Home = () => {
  return (
    <>
      {/* <Announcement /> */}
      <HeroIntro />
      <LoremIpsum />
      <LoremIpsum />
      <Container className="header-container pt-4" tag="header">
        <DesktopNavbar />

        {/* Hero / Intro */}
        {/* Client logos */}
        {/* Robot */}
        {/* ACT Cards */}
        {/* Expertise Globe */}
        {/* Our Offerings Cards */}
        {/* Results that Matters Cards */}
        {/* Subscribe CTA form */}
        {/* Footer */}
      </Container>
    </>
  );
};

export default Home;
