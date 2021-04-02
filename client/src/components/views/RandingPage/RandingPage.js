import React from "react";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";
import { destination } from "./Filter/Datas";

const RandingPage = () => {
  return (
    <>
      <CarouselSlide />
      <Filter list={destination} />
      <Cards />
    </>
  );
};

export default RandingPage;
