import React from "react";
import TitlePara from "../../utils/TitlePara";
import RoomCard from "../../utils/RoomCard";
import { HiOutlineChevronRight } from "react-icons/hi";

const OurRooms = () => {
  return (
    <div>
      <div className="h-[1100px] bg-[#F8F8F8] w-[750px] rounded-r-3xl absolute left-5 -z-50"></div>
      <TitlePara title={"Our Rooms"} />
      <div className="flex flex-col items-center gap-10 justify-center">
        <RoomCard />
        <p className="flex gap-2 items-center  border-b  border-[#dadada] pb-2 uppercase text-sm font-semibold">
          View All Rooms <HiOutlineChevronRight className="text-xl" />
        </p>
      </div>
    </div>
  );
};

export default OurRooms;
