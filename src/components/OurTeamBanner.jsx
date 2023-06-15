import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../utils/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import CustomDropdown from "../utils/CustomDropdown";
import { useEffect, useRef, useState } from "react";

const OurTeamBanner = ({
  openLoginModal,
  setOpenLoginModal,
  openSignUpModal,
  setOpenSignUpModal,
}) => {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [active, setActive] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation()
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const roomRef = useRef(null);
  const reservationRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(()=> {
    if(location.pathname === "/about-us" || location.pathname === "/our-team" || location.pathname === "/hotel-review"){
        setActive(aboutRef.current.offsetLeft)
        setOffsetLeft(aboutRef.current.offsetLeft)
    }else if(location.pathname === "/rooms"){
      setActive(roomRef.current.offsetLeft)
      setOffsetLeft(roomRef.current.offsetLeft)
    }else if(location.pathname === "/reservation"){
      setActive(reservationRef.current.offsetLeft)
      setOffsetLeft(reservationRef.current.offsetLeft)
    }else if(location.pathname === "/blogs"){
      setActive(blogRef.current.offsetLeft)
      setOffsetLeft(blogRef.current.offsetLeft)
    }else if(location.pathname === "/contact"){
      setActive(contactRef.current.offsetLeft)
      setOffsetLeft(contactRef.current.offsetLeft)
    }
  }, [])
  return (
    <>
      <div className=" bg-contactBgGradient overflow-hidden bg-cover rounded-[20px] min-h-[60vh] md:min-h-[70vh] lg:min-h-[100vh] bg-no-repeat relative">
        <div className=" text-white">
          <div className=" py-8 px-10 space-y-10 hidden lg:block">
            <div className=" flex items-center justify-between">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2 text-[16px]">
                  <BsTelephone />
                  <span>1-634-567-34</span>
                </div>
                <div className="flex items-center gap-2 text-[16px]">
                  <HiOutlineMail size={15} />
                  <span>Book@Hotale.co</span>
                </div>
              </div>
              <div className=" flex gap-5">
                <button
                  onClick={() => setOpenLoginModal(!openLoginModal)}
                  className=" bg-transparent border-r-2 px-4 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => setOpenSignUpModal(!openSignUpModal)}
                  className=" font-medium"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className=" flex items-center justify-between">
              <Link to={`/`}>
                <img
                  src={logo}
                  alt=""
                  className="w-[147px] h-[37px] mb-3 cursor-pointer"
                />
              </Link>
              <div
              onMouseLeave={() => setOffsetLeft(active)}
              className=" relative flex gap-10 text-white tracking-widest text-[13px] font-semibold "
            >
              <div
                style={{ transform: `translateX(${offsetLeft}px)` }}
                className=" absolute mt-[30px] transition duration-300 w-[18px] h-[2px] bg-white"
              ></div>
              <NavLink
                to={"/"}
                className=" pb-1"
                onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                ref={homeRef}
              >
                HOME
              </NavLink>
              <div className="">
                <NavLink
                  className=" pb-6"
                  to={`/`}
                  onMouseEnter={(e) => {
                    setIsDropdownOpen(true);
                    setOffsetLeft(e.target.offsetLeft);
                  }}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  ref={aboutRef}
                >
                  PAGES
                </NavLink>
                {/* dropdown  */}
                <div
                  onMouseEnter={() => {
                    setIsDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setIsDropdownOpen(false);
                    }, 500);
                  }}
                  className={`${
                    isDropdownOpen ? "block" : "hidden"
                  } cursor-default absolute top-10 transition duration-500 bg-white w-52 shadow py-5 px-4 flex flex-col space-y-5 z-[100]`}
                >
                  <NavLink
                    to={"/about-us"}
                    className="text-[#757575] font-normal text-[16px] transition-all hover:text-black"
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to={"/our-team"}
                    className="text-[#757575] font-normal text-[16px] transition-all hover:text-black"
                  >
                    Our Team
                  </NavLink>
                  <NavLink
                    to={"/hotel-review"}
                    className="text-[#757575] font-normal text-[16px] transition-all hover:text-black"
                  >
                    Hotel Reviews
                  </NavLink>
                </div>
              </div>
              <NavLink
                to={"/rooms"}
                className=" pb-1"
                onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                ref={roomRef}
              >
                ROOMS
              </NavLink>
              <NavLink
                to={"/reservation"}
                className=" pb-1"
                onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                ref={reservationRef}
              >
                RESERVATION
              </NavLink>
              <NavLink
                to={"/blogs"}
                className=" pb-1"
                onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                ref={blogRef}
              >
                BLOG
              </NavLink>
              <NavLink
                to={"/contact"}
                className=" pb-1"
                onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                ref={contactRef}
              >
                CONTACT
              </NavLink>
            </div>
              <div className="flex items-center gap-8 text-white pb-1">
                    <div className=" flex items-center gap-2">
                      <div className="">USD</div>
                      <IoMdArrowDropdown />
                    </div>
                    <Link to={`/reservation`}>
                    <div className=" cursor-pointer">
                      <Button text="BOOK NOW" />
                    </div>
                    </Link>
                  </div>
            </div>
          </div>
          <div className=" px-5 lg:px-0 text-center text-white mt-20 space-y-5 md:max-w-[70%] mx-auto">
            <h1 className=" text-[40px] md:text-[98px] font-[400]">Our Team</h1>
            <p className=" text-[31px] font-[400] tracking-[3px]">
              Our staff and fellows are well experienced in hospitality
              industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// OurTeamBanner.defaultProps = {
//   text: "About Us",
// };

export default OurTeamBanner;
