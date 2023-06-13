import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "../utils/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import CustomDropdown from "../utils/CustomDropdown";
import { useState } from "react";

const AboutUsBanner = ({
  openLoginModal,
  setOpenLoginModal,
  openSignUpModal,
  setOpenSignUpModal,
  children,
}) => {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="  pt-8 px-10 bg-bannerBg overflow-hidden bg-cover rounded-[20px] max-h-[65vh] md:max-h-[100vh] bg-no-repeat relative">
        <div className=" text-white  max-w-[1200px] mx-auto">
          <div className=" space-y-8 hidden lg:block">
            <div className=" flex items-center justify-between">
              <div className="flex items-center gap-10 text-[15px] font-[400] tracking-[1px]">
                <div className="flex items-center gap-2">
                  <BsTelephone />
                  <span>1-634-567-34</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMail size={15} />
                  <span>Book@Hotale.co</span>
                </div>
              </div>
              <div className=" flex gap-5 text-[15px] font-[600] tracking-[1px]">
                <button
                  onClick={() => setOpenLoginModal(!openLoginModal)}
                  className=" bg-transparent border-r-2 px-4"
                >
                  Login
                </button>
                <button
                  onClick={() => setOpenSignUpModal(!openSignUpModal)}
                  className=""
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
              <div onMouseLeave={() => setOffsetLeft(0)} className=" relative">
                <div className=" flex items-center gap-10 text-[13px] font-[600] tracking-[2px]">
                  <NavLink
                    className=" pb-1"
                    to={`/`}
                    onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                  >
                    HOME
                  </NavLink>
                  <div className="">
                    <NavLink
                      className=" pb-6"
                      to={`/`}
                      onMouseEnter={(e) => {
                        setOffsetLeft(e.target.offsetLeft);
                        setShowDropdown(true);
                      }}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      PAGES
                    </NavLink>
                    {/* dropdown  */}
                    <div
                      onMouseEnter={() => {
                        setShowDropdown(true);
                      }}
                      onMouseLeave={() => {
                        setTimeout(() => {
                          setShowDropdown(false);
                        }, 500);
                      }}
                      className={`${
                        showDropdown ? "block" : "hidden"
                      } cursor-default absolute top-14 transition duration-500 bg-white w-52 shadow py-5 px-4 flex flex-col space-y-5 z-[100]`}
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
                  {/* <CustomDropdown setOffsetLeft={setOffsetLeft}/> */}
                  <NavLink
                    className=" pb-1"
                    onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                    to={`/rooms`}
                  >
                    ROOMS
                  </NavLink>
                  <NavLink
                    className=" pb-1"
                    onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                    to={`/reservation`}
                  >
                    RESERVATION
                  </NavLink>
                  <NavLink
                    className=" pb-1"
                    onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                    to={`/blogs`}
                  >
                    BLOG
                  </NavLink>
                  <NavLink
                    className=" pb-1"
                    onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                    to={`/contact`}
                  >
                    CONTACT
                  </NavLink>
                  <div className="flex items-center gap-8 text-white  pb-1">
                    <div className=" flex items-center gap-2">
                      <div className="">USD</div>
                      <IoMdArrowDropdown />
                    </div>
                    <div className=" cursor-pointer text-[13px] font-[600] tracking-[2px]">
                      <Button text="BOOK NOW" />
                    </div>
                  </div>
                </div>
                <div
                  style={{ transform: `translateX(${offsetLeft}px)` }}
                  className=" -mt-[10px] transition duration-300 w-[30px] h-[2px] bg-white"
                ></div>
              </div>
            </div>


            
          </div>
          {/* <div className=" text-center text-white mt-20 space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[98px] font-[400]">Our Team</h1>
            <p className=" text-[31px] font-[400] tracking-[3px]">
              Our staff and fellows are well experienced in hospitality
              industry.
            </p>
          </div> */}
          {children}
        </div>
      </div>
    </>
  );
};

// AboutUsBanner.defaultProps = {
//   text: "About Us",
// };

export default AboutUsBanner;
