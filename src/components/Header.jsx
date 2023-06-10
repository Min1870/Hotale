import React, { useEffect, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import Button from "../utils/Button";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      }
      window.scrollY < 100 && setShowNav(false);
    });
  }, [scrollY]);
  return (
    <>
      <div className=" text-[#fff] hidden lg:flex flex-col gap-8 w-[85%] mx-auto absolute top-10 lg:left-[80px] xl:left-[120px] z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <HiOutlinePhone /> <span>1-634-567-34</span>
            </p>

            <p className="flex items-center gap-1">
              <HiOutlineEnvelope />
              Book@Hotale.co
            </p>
          </div>
          <div className="flex gap-3">
            <p>Login</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <img src={logo} className="h-[37px]"></img>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Pages</li>
            <li>Rooms</li>
            <li>Blog</li>
            <li>Reservation</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-3 items-center">
            <p>USD</p>
            <Button text={"Book Now"}></Button>
          </div>
        </div>
      </div>

      <div className="bg-[#000] text-[#fff] flex lg:hidden py-5 px-6 md:px-16 z-50">
        <div className="flex justify-between items-center w-full">
          <img src={logo} className="h-[37px]"></img>

          <div className="flex items-center gap-3">
            <p>Login</p>
            <p>Sign Up</p>
            <IoMenuSharp className="text-3xl" />
          </div>
        </div>
      </div>

      <div
        className={`bg-[#000] fixed top-0 left-0 transition-all duration-500 w-full text-[#fff] z-50 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center w-[85%] mx-auto py-5">
          <img src={logo} className="h-[37px]"></img>
          <ul className=" gap-5 hidden lg:flex">
            <li>Home</li>
            <li>Pages</li>
            <li>Rooms</li>
            <li>Blog</li>
            <li>Reservation</li>
            <li>Contact</li>
          </ul>
          <div className=" gap-3 items-center hidden lg:flex">
            <p>USD</p>
            <Button text={"Book Now"}></Button>
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <p>Login</p>
            <p>Sign Up</p>
            <IoMenuSharp className="text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
