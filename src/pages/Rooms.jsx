import React from "react";
import BannerForAll from "../utils/BannerForAll";
import luxury from "../assets/rooms/LuxurySuite.jpg";
import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { MdPeopleOutline, MdKeyboardArrowRight } from "react-icons/md";

const Rooms = () => {
  return (
    <div>
      <BannerForAll text={"Rooms"} />
      <div className="flex flex-wrap mt-10 items-center justify-center gap-5">
        <div className="max-w-sm bg-white border border-gray-100 rounded-[20px] shadow ">
          <Link to={""} className="relative">
            <img className="rounded-t-[20px]" src={luxury} alt="" />
            <div className=" absolute  px-[20px] py-[21px] text-[20px] rounded-[10px] bg-black bottom-[10px] left-[25px] font-semibold">
              <span className=" text-white mr-[5px] ">From</span>
              <span className=" text-white">$90</span>
              <span className=" text-white text-[15px] font-normal"> / night</span>
            </div>
          </Link>
          <div className="px-[40px] py-[45px]">
            <Link to={""}>
              <h5 className="mb-[20px] text-[30px] font-medium transition duration-100 hover:text-[#656565]">
                Luxury Suite
              </h5>
            </Link>
            <div class="mb-[30px] font-normal flex gap-4 flex-col md:flex-row">
              <div className=" flex items-center gap-4">
                <IoBedOutline className=" text-[#848484] text-[28px]" />
                <span className="text-[#656565]">1 King Bed</span>
              </div>
              <div className=" flex items-center gap-4">
                <MdPeopleOutline className=" text-[#848484] text-[28px]" />
                <span className="text-[#656565]">4 Guests</span>
              </div>
            </div>
            <Link
              to={""}
              className="inline-flex mb-[30px] items-center py-2 text-sm font-medium text-center text-black tracking-widest uppercase focus:ring-4 focus:outline-none"
            >
              Book Now
              <MdKeyboardArrowRight />
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Rooms;
