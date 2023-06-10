import React from "react";
import BannerForAll from "../utils/BannerForAll";
import RoomCard from "../utils/RoomCard";

const Rooms = () => {
  return (
    <div>
      <BannerForAll text={"Rooms"} />
      <div className="flex flex-wrap mt-20 items-center justify-center gap-10">
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
      </div>
    </div>
  );
};

export default Rooms;
