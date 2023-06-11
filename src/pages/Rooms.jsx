import React, { useState } from "react";
import RoomCard from "../utils/RoomCard";
import LoginModal from '../components/LoginModal'
import SignupModal from '../components/SignupModal'
import AboutUsBanner from '../components/AboutUsBanner'
import { rooms } from "../utils/rooms";

const Rooms = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openSignUpModal, setOpenSignUpModal] = useState(false)
  return (
    <>
    {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal}/>}
    {openSignUpModal && <SignupModal setOpenSignUpModal={setOpenSignUpModal}/>}
    <div>
      <AboutUsBanner
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
        openSignUpModal={openSignUpModal}
        setOpenSignUpModal={setOpenSignUpModal}
      >
        <div className=" text-center text-white h-[300px] lg:mb-10 flex flex-col items-center justify-center space-y-5 md:max-w-[60%] mx-auto">
          <h1 className=" text-[40px] md:text-[70px] font-[400]">
            Room Grid Style 1
          </h1>
        </div>
      </AboutUsBanner>
      <div className="flex flex-wrap my-20 items-center justify-center gap-10">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default Rooms;
