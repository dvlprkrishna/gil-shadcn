import Container from "@/components/Container";
import Announcement from "@/components/Announcement";
import DesktopNavbar from "@/components/DesktopNavbar";
import React from "react";
import HeroIntro from "@/components/HeroIntro";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import ClientLogos from "@/components/ClientLogos";
import OfferingsSlider from "@/components/OfferingsSlider";
import HubExpertise from "@/components/HubExpertise";
import CardsSection from "@/components/CardsSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Home = () => {
  const dataArray = [
    {
      quote: "lorem",
      name: "krishna",
      title: "developer",
    },
    {
      quote: "asdasdas",
      name: "aas",
      title: "s2",
    },
    {
      quote: "asdawe24rtrgfvds",
      name: "asdasd",
      title: "asfgwu5",
    },
  ];

  return (
    <>
      {/* <Announcement /> */}
      <Container className="header-container mt-8" tag="header">
        <DesktopNavbar />
      </Container>
      <HeroIntro />
      <ClientLogos />
      <CardsSection />
      <HubExpertise />
      <OfferingsSlider />

      <InfiniteMovingCards items={dataArray} />

      {/* <CardExpand /> */}

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
