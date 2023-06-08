import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [toggleNum, setToggleNum] = useState(false);
  
  

  return (
    <>
      <div className="relative h-[120vh]">
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
              <button className=" bg-transparent border-r-2 px-5">Login</button>
              <button>Sign Up</button>
            </div>
          </div>
          <div className="hidden lg:flex min-w-full items-center absolute z-50 text-black px-[40px] xl:px-[120px] justify-between top-20">
            <img src={logo} alt="" className="w-[147px] h-[37px] mb-3" />
            <div className="flex gap-10 text-white tracking-widest text-[13px] font-semibold">
              <NavLink>HOME</NavLink>
              <NavLink>
                PAGES

              </NavLink>
              <NavLink>ROOMS</NavLink>
              <NavLink>RESERVATION</NavLink>
              <NavLink>BLOG</NavLink>
              <NavLink>CONTACT</NavLink>
            </div>
            <div className="flex items-center gap-8 text-white">
              <div className=" flex items-center gap-2">
                <div className="">USD</div>
                <IoMdArrowDropdown/>
              </div>
              <div>
                <button className=" bg-transparent border-2 text-white border-white px-5 py-3 font-semibold text-[13px] tracking-[2px]">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" custom-gradient_top h-[344px] top-0 absolute w-full  rounded-[20px]"></div>
        <div className=" custom-gradient_bottom h-[338px] absolute bottom-0  w-full rounded-[20px]"></div>

        <div className="absolute h-screen md:h-[671px] w-full bottom-0">
          <div className=" flex flex-col mt-10 items-center ">
            <div className="">
              <h3 className=" font-allison text-[80px] md:text-[70px] text-center leading-[100px] pb-[30px] text-[#FFF] -rotate-[4deg]">
                Book Your Vacation
              </h3>
              <p className=" text-center text-[#FFFFFF] text-[22px] px-[20px] pb-[30px] mb-[20px]">
                Explore new experience with Hotale
              </p>
            </div>

            <div className=" absolute bottom-20">
              <form className=" flex flex-col md:flex-row gap-3 flex-wrap justify-center">
                <div className="md:flex gap-3">
                  <div className=" w-72 bg-white p-3  rounded-md mb-3 md:mb-0">
                    <div className=" text-[#8f8f8f]">Check In</div>
                    <div className="flex items-center justify-between">
                      <input type="date" />
                      <IoMdArrowDropdown />
                    </div>
                  </div>

                  <div className=" bg-white p-3  rounded-md">
                    <div className=" text-[#8f8f8f]">Check Out</div>
                    <div className="flex items-center justify-between">
                      <input type="date" />
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                <div>
                  <div className=" bg-white p-3 rounded-md">
                    <div className=" text-[#8f8f8f] cursor-pointer">Room</div>
                    <div className="flex items-center gap-10 cursor-pointer">
                      <div>1</div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                <div className=" bg-white p-3  rounded-md">
                  <div className=" text-[#8f8f8f]">Guests</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span>Adult 2</span>
                      <span>children</span>
                      <IoMdArrowDropdown />
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
