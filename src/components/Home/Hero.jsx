import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import resortSwim from "../../assets/Home/resort-swim.jpg";
import resortGroup from "../../assets/Home/resort-group.png";
const Hero = () => {
  return (
    <>
      <div
        className="min-h-[900px] rounded-3xl bg-homeBg bg-cover overflow-hidden relative"
        style={{ backgroundPosition: "center top 30%" }}
      >
        <div className="h-[300px] bg-gradient-to-b from-black to-transparent"></div>
        <div className="flex flex-col justify-center items-center text-white gap-9">
          <h1 className="font-allison text-7xl -skew-y-3">Book Your Vaction</h1>
          <p className="font-normal text-2xl ">
            Explore new experience with Hotale
          </p>
        </div>

        <div className="h-[200px] w-full bg-gradient-to-t from-black to-transparent absolute bottom-0">
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-12 gap-2 px-10">
              <div className="col-span-3 bg-white rounded-md px-5 flex flex-col justify-center gap-2 ">
                <h1 className="text-[#898989]">Check In</h1>
                <p className="flex gap-10 items-center justify-between uppercase">
                  Jan 22, 2023 <FaCaretDown />
                </p>
              </div>
              <div className="col-span-3 bg-white rounded-md  px-5 flex flex-col  justify-center gap-2 ">
                <h1 className="text-[#898989]">Check Out</h1>
                <p className="flex gap-10 items-center justify-between uppercase">
                  Jan 22, 2023 <FaCaretDown />
                </p>
              </div>
              <div className="col-span-1 bg-white rounded-md py-4 px-5 flex flex-col  justify-center gap-2">
                <h1 className="text-[#898989]">Rooms</h1>
                <p className="flex gap-10 items-center justify-between">
                  1 <FaCaretDown />
                </p>
              </div>
              <div className="col-span-3 bg-white rounded-md py-4 px-5 flex flex-col  justify-center gap-2 ">
                <h1 className="text-[#898989]">Guests</h1>
                <p className="flex gap-10 items-center justify-between uppercase">
                  Adults 2 Children <FaCaretDown />
                </p>
              </div>

              <button className="col-span-2 border-2 border-white rounded text-white uppercase font-semibold">
                Search Room
              </button>
            </div>
          </div>
        </div>
      </div>
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
