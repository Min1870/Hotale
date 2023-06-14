import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "../utils/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import CustomDropdown from "../utils/CustomDropdown";
import { useRef, useState } from "react";

const OurTeamBanner = ({
  openLoginModal,
  setOpenLoginModal,
  openSignUpModal,
  setOpenSignUpModal,
}) => {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleDropdownCancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };
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
              <div className=" relative">
                <div className=" flex items-center gap-10 text-[13px] font-[600] tracking-[2px]">
                  <NavLink
                    className=" pb-1"
                    to={`/`}
                    onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                  >
                    HOME
                  </NavLink>
                  <div>
                    <NavLink
                      to={`/`}
                      className="pb-1"
                      onMouseEnter={(e) => {
                        setOffsetLeft(e.target.offsetLeft);
                        handleDropdownToggle();
                      }}
                      onMouseLeave={handleDropdownClose}
                    >
                      PAGES
                    </NavLink>
                    <div
                      onMouseEnter={handleDropdownCancelClose}
                      onMouseLeave={handleDropdownClose}
                      className={`${
                        isDropdownOpen ? "opacity-100" : "opacity-0"
                      } cursor-default absolute top-8 transition duration-500 bg-white w-52 shadow py-5 px-4 flex flex-col space-y-5 z-[100]`}
                    >
                      <NavLink
                        to={"/about-us"}
                        className={`${
                          !isDropdownOpen && "cursor-default"
                        } text-[#757575] font-normal text-[16px] transition-all hover:text-black`}
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to={"/our-team"}
                        className={`${
                          !isDropdownOpen && "cursor-default"
                        } text-[#757575] font-normal text-[16px] transition-all hover:text-black`}
                      >
                        Our Team
                      </NavLink>
                      <NavLink
                        to={"/hotel-review"}
                        className={`${
                          !isDropdownOpen && "cursor-default"
                        } text-[#757575] font-normal text-[16px] transition-all hover:text-black`}
                      >
                        Hotel Reviews
                      </NavLink>
                    </div>
                  </div>
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
                </div>
                <div
                  style={{ transform: `translateX(${offsetLeft}px)` }}
                  className=" transition duration-300 w-[30px] h-[2px] bg-white"
                ></div>
              </div>
              <div className="flex items-center gap-8 text-white">
                <div className=" flex items-center gap-2">
                  <div className="">USD</div>
                  <IoMdArrowDropdown />
                </div>
                <Link to={"/reservation"}>
                  <div className=" cursor-pointer">
                    <Button text="BOOK NOW" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" px-5 lg:px-0 text-center text-white mt-20 space-y-5 md:max-w-[70%] mx-auto">
            <h1 className=" text-[40px] md:text-[98px] font-[400]">Our team</h1>
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
