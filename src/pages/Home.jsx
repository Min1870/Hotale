import React from "react";
import Hero from "../components/Home/Hero";
import OurRooms from "../components/Home/OurRooms";
import Facilites from "../components/Home/Facilites";
import Testimonial from "../components/Home/Testimonial";
import NewsOffers from "../components/Home/NewsOffers";
import NewsLetter from "../components/Home/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurRooms />
      <Facilites />
      <Testimonial />
      <NewsOffers />
      <NewsLetter />
    </div>
  );
};

export default Home;
