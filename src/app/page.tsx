import Container from "@/components/Container";
import Announcement from "@/components/Announcement";
import DesktopNavbar from "@/components/DesktopNavbar";
import React from "react";
import HeroIntro from "@/components/HeroIntro";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import ClientLogos from "@/components/ClientLogos";

const Home = () => {
  return (
    <>
      {/* <Announcement /> */}
      <Container className="header-container mt-8" tag="header">
        <DesktopNavbar />
      </Container>
      <HeroIntro />
      <ClientLogos />
      <Container className=" mt-8 flex-col px-10 " tag="main">
        <Subscribe />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
