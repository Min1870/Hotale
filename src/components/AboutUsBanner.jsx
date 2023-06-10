import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "../utils/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import CustomDropdown from "../utils/CustomDropdown";

const AboutUsBanner = ({
  openLoginModal,
  setOpenLoginModal,
  openSignUpModal,
  setOpenSignUpModal,children
}) => {
  return (
    <>
      <div className=" bg-bannerBg overflow-hidden bg-cover rounded-[20px] max-h-[65vh] md:max-h-[100vh] bg-no-repeat relative">
        <div className=" text-white">
          <div className=" pt-8 px-10 space-y-10 hidden lg:block">
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
              <div className=" flex items-center gap-10">
                <NavLink to={`/`} className="cursor-pointer">
                  HOME
                </NavLink>
                <CustomDropdown />
                <NavLink>ROOMS</NavLink>
                <NavLink>RESERVATION</NavLink>
                <NavLink>BLOG</NavLink>
                <NavLink>CONTACT</NavLink>
                <div className="flex items-center gap-8 text-white">
                  <div className=" flex items-center gap-2">
                    <div className="">USD</div>
                    <IoMdArrowDropdown />
                  </div>
                  <div className=" cursor-pointer">
                    <Button text="BOOK NOW" />
                  </div>
                </div>
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
