import { IoMdArrowDropdown } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import CustomDropdown from "./CustomDropdown";
import { IoMenuSharp } from "react-icons/io5";
import DatePickerHome from "./homeBanner/DatePickerHome";
import { useState } from "react";
import RoomModalHome from "./homeBanner/RoomModalHome";
import GuestModalHome from "./homeBanner/GuestModalHome";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

const Banner = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const [roomNum, setRoomNum] = useState(1);
  const [roomToggle, setRoomToggle] = useState(false);

  const [adultNum, setAdultNum] = useState(2);
  const [childrenNum, setChildrenNum] = useState(0);
  const [guestToggle, setGuestToggle] = useState(false);

  return (
    <>
      {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
      {openSignUpModal && (
        <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
      )}
      {/* Mobile Navbar */}
      <div className="lg:hidden flex min-w-full items-center justify-between py-5 px-[40px] xl:px-[120px] text-white bg-black z-50 absolute top-0 left-0">
        <img src={logo} alt="" className="w-[147px] h-[37px]" />
        <div className="flex items-center gap-3">
          <p
            className="border-r px-4 cursor-pointer"
            onClick={() => setOpenLoginModal((pre) => !pre)}
          >
            Login
          </p>
          <p
            className=" cursor-pointer"
            onClick={() => setOpenSignUpModal((pre) => !pre)}
          >
            Sign Up
          </p>
          <IoMenuSharp className="text-3xl" />
        </div>
      </div>
      <div className="relative h-[120vh] mt-28 lg:m-0">
        {/* Laptop Navbar */}
        <div className=" absolute top-0 bg-homeBg w-full h-full bg-center bg-cover bg-no-repeat rounded-[20px]">
          <div className="hidden lg:flex min-w-full items-center justify-between absolute z-50 text-black px-[40px] xl:px-[120px] top-8">
            <div className=" text-white flex items-center gap-5">
              <div className="flex items-center gap-2 text-[15px]">
                <BsTelephone />
                <span>1-634-567-34</span>
              </div>
              <div className="flex items-center gap-2 text-[15px]">
                <HiOutlineMail size={15} />
                <span>Book@Hotale.co</span>
              </div>
            </div>
            <div className=" text-white flex gap-5">
              <button
                onClick={() => setOpenLoginModal((pre) => !pre)}
                className=" bg-transparent border-r-2 px-4 font-medium"
              >
                Login
              </button>
              <button
                className="font-medium"
                onClick={() => setOpenSignUpModal((pre) => !pre)}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="hidden lg:flex min-w-full items-center absolute z-50 text-black px-[40px] xl:px-[120px] justify-between top-20">
            <img src={logo} alt="" className="w-[147px] h-[37px] mb-3" />
            <div className="flex gap-10 text-white tracking-widest text-[13px] font-semibold ">
              <NavLink to={"/"}>HOME</NavLink>
              <CustomDropdown />
              <NavLink to={"/rooms"}>ROOMS</NavLink>
              <NavLink to={"/reservation"}>RESERVATION</NavLink>
              <NavLink to={"/blogs"}>BLOG</NavLink>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </div>
            <div className="flex items-center gap-8 text-white">
              <div className=" flex items-center gap-2">
                <div className="">USD</div>
                <IoMdArrowDropdown />
              </div>
              <div>
                <Button text="BOOK NOW" />
                {/* <button className=" bg-transparent border-2 text-white border-white px-5 py-3 font-semibold text-[13px] tracking-[2px]">BOOK NOW</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" custom-gradient_top h-[344px] top-0 absolute w-full  rounded-[20px]"></div>
        <div className=" custom-gradient_bottom h-[338px] absolute bottom-0  w-full rounded-[20px]"></div>

        <div className="absolute h-[115vh] md:h-[671px] w-full bottom-0">
          <div className=" flex flex-col mt-2 md:mt-10 items-center ">
            <div className="">
              <h3 className=" font-allison text-[80px] md:text-[70px] text-center leading-[100px] pb-[30px] text-[#FFF] -rotate-[4deg]">
                Book Your Vacation
              </h3>
              <p className=" text-center text-[#FFFFFF] text-[22px] px-[20px] pb-[30px] mb-[20px]">
                Explore new experience with Hotale
              </p>
            </div>

            <div className=" absolute bottom-5 lg:bottom-20">
              <form className=" flex flex-col xl:flex-row gap-3 flex-wrap">
                <div>
                  <div className="md:flex gap-[10px]">
                    <div className=" md:w-1/2 bg-white py-[15px] px-[25px] rounded-md mb-3 md:mb-0">
                      <div className=" text-[#8f8f8f]">Check In</div>
                      <DatePickerHome />
                    </div>
                    <div className=" md:w-1/2 bg-white py-[15px] px-[25px]  rounded-md">
                      <div className=" text-[#8f8f8f]">Check Out</div>
                      <DatePickerHome />
                    </div>
                  </div>
                </div>

                <div className=" lg:w-[121px] bg-white py-[15px] px-[25px] rounded-md">
                  <div className=" text-[#8f8f8f] cursor-pointer mb-[5px]">
                    Room
                  </div>
                  <div className="flex items-center justify-between cursor-pointer">
                    <p>{roomNum}</p>
                    <div>
                      <IoMdArrowDropdown
                        onClick={() => setRoomToggle((pre) => !pre)}
                      />
                    </div>
                  </div>
                  <div className=" relative">
                    {roomToggle ? (
                      <RoomModalHome
                        roomNum={roomNum}
                        setRoomNum={setRoomNum}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className=" bg-white py-[15px] px-[25px]  rounded-md">
                  <div className=" text-[#8f8f8f] mb-[5px]">Guests</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5 justify-between">
                      <div>
                        <span className=" mr-4">Adult {adultNum}</span>
                        <span>children {childrenNum}</span>
                      </div>
                      <IoMdArrowDropdown
                        className=" cursor-pointer"
                        onClick={() => setGuestToggle((pre) => !pre)}
                      />
                    </div>
                    <div className=" relative">
                      {guestToggle && (
                        <GuestModalHome
                          adultNum={adultNum}
                          setAdultNum={setAdultNum}
                          setChildrenNum={setChildrenNum}
                          childrenNum={childrenNum}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <button className=" bg-transparent border-2 text-white border-white px-[35px] py-[15px] md:py-[5px] rounded-md font-semibold">
                  SEARCH ROOM
                </button>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Banner;
