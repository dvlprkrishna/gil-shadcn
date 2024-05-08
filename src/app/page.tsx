import Container from "@/components/Container";
import Announcement from "@/components/Announcement";
import DesktopNavbar from "@/components/DesktopNavbar";
import React from "react";
import HeroIntro from "@/components/HeroIntro";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

const Home = () => {
  return (
    <>
      {/* <Announcement /> */}
      <Container className="header-container mt-8" tag="header">
        <DesktopNavbar />
      </Container>

      <Container className="main-container mt-20" tag="main">
        <Subscribe />
      </Container>
      <Container className="footer-container pt-4" tag="footer">
        <Footer />
      </Container>
    </>
  );
};

export default Home;
