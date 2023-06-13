import React, { useEffect, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import Button from "../utils/Button";
import { NavLink } from "react-router-dom";
import CustomDropdown from "../utils/CustomDropdown";
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      }
      window.scrollY < 300 && setShowNav(false);
    });
  }, [scrollY]);
  return (
    <>
      <div
        className={`bg-[#000] fixed top-0 left-0 transition-all duration-500 w-full text-[#fff] z-50 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center w-[90%] mx-auto py-5">
          <img src={logo} className="h-[37px]"></img>
          <div className=" hidden lg:flex gap-10 text-white tracking-widest text-[13px] font-semibold">
            <NavLink to={"/"}>HOME</NavLink>
            <CustomDropdown />
            <NavLink to={"/rooms"}>ROOMS</NavLink>
            <NavLink to={"/reservation"}>RESERVATION</NavLink>
            <NavLink to={"/blogs"}>BLOG</NavLink>
            <NavLink to={"/contact"}>CONTACT</NavLink>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-white">
            <div className=" flex items-center gap-2">
              <div className="">USD</div>
              <IoMdArrowDropdown />
            </div>
            <div>
              <Button text="BOOK NOW" />
              {/* <button className=" bg-transparent border-2 text-white border-white px-5 py-3 font-semibold text-[13px] tracking-[2px]">BOOK NOW</button> */}
            </div>
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <p className="px-4 border-r">Login</p>
            <p>Sign Up</p>
            <IoMenuSharp className="text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
