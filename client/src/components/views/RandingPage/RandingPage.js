import React from "react";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";

const RandingPage = () => {
  return (
    <>
      <CarouselSlide />
      <Filter />
      <Cards />
    </>
  );
};

export default RandingPage;
