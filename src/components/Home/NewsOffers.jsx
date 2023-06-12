import React from "react";
import TitlePara from "../../utils/TitlePara";
import { HiOutlineChevronRight, HiOutlineClock } from "react-icons/hi";
const NewsOffers = () => {
  return (
    <div>
      <TitlePara
        title="News & Offers"
        para="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
      />
      <div className="flex justify-center items-center flex-col gap-10 relative">
        <div className="h-[600px] bg-[#F8F8F8] w-[500px] rounded-3xl absolute left-28 top-28 -z-50 hidden lg:block"></div>

        <div className="h-[600px] w-[400px] overflow-hidden rounded-2xl relative bg-black group cursor-pointer">
          <img
            src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/roan-lavery-sEcYfPfKOhw-unsplash-700x990.jpg"
            alt=""
            className="h-[100%] w-full transition-all duration-500 hover:scale-105 group-hover:opacity-50"
          />
          <div className="absolute bottom-10 font-semibold text-white text-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <h1 className="text-2xl mb-3">
              Tips For Picking Vacation Accommodation
            </h1>
            <p className=" text-sm flex gap-2 items-center justify-center">
              <HiOutlineClock className="text-lg" /> DEC 17, 2021
            </p>
          </div>
        </div>
        <p className="flex gap-2 items-center  border-b  border-[#dadada] pb-2 uppercase text-sm font-semibold transition-all duration-500 hover:border-black">
          Read the blogs <HiOutlineChevronRight className="text-xl" />
        </p>
      </div>
    </div>
  );
};

export default NewsOffers;
