import Container from "@/components/Container";
import Announcement from "@/components/Announcement";
import DesktopNavbar from "@/components/DesktopNavbar";
import React from "react";
import HeroIntro from "@/components/HeroIntro";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import ClientLogos from "@/components/ClientLogos";
import OfferingsSlider from "@/components/OfferingsSlider";

const Home = () => {
  return (
    <>
      {/* <Announcement /> */}
      <Container className="header-container mt-8" tag="header">
        <DesktopNavbar />
      </Container>
      <HeroIntro />
      <ClientLogos />
      <OfferingsSlider />

      <Container className=" mt-8 flex-col px-10 " tag="main">
        {/* Robot */}
        {/* ACT Cards */}
        {/* Expertise Globe */}
        {/* Our Offerings Cards */}
        {/* Results that Matters Cards */}
        <Subscribe />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
