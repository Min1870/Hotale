import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import resortSwim from "../../assets/Home/resort-swim.jpg";
import resortGroup from "../../assets/Home/resort-group.png";
import Banner from "../../utils/Banner";
const Hero = () => {
  return (
    <>
      <Banner />
      <div className="flex items-center justify-between flex-wrap w-[85%] mx-auto mt-20 lg:mb-[400px] relative">
        <div className="flex flex-col items-start gap-20 w-[90%] mb-5 lg:m-0 lg:w-[50%] ">
          <h1 className="text-2xl tracking-[.6rem]">
            <span className="text-6xl font-medium">5</span> stars{" "}
            <span className="text-6xl font-medium ml-9">25</span> rooms
          </h1>
          <p className=" text-4xl leading-[3rem]">
            Our hotel is located in the heart of the New Forrest. A five stars
            lifestyle surrounded by the forest.
          </p>
          <button className="flex gap-2 items-center border-b border-[#dadada] pb-2 transition-all duration-500 uppercase text-sm font-semibold hover:border-black">
            More About Us <HiOutlineChevronRight className="text-xl" />
          </button>
        </div>
        <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden">
          <img src={resortSwim} alt="" className="h-[500px]" />
        </div>
        <div className="absolute -bottom-96 right-0 hidden xl:block">
          <img src={resortGroup} className="h-[500px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
