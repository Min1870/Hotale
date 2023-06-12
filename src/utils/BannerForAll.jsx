import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";
import CustomDropdown from "./CustomDropdown";

const BannerForAll = ({ text, desc }) => {
  return (
    <>
      <div className="relative h-[20vh] md:min-h-[30vh] lg:h-[65vh]">
        <div className=" absolute top-0 bg-bannerBg w-full h-full bg-center bg-cover bg-no-repeat rounded-[20px]">
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
              <button className=" bg-transparent border-r-2 px-4 font-medium">
                Login
              </button>
              <button className=" font-medium">Sign Up</button>
            </div>
          </div>
          <div className="hidden lg:flex min-w-full items-center absolute z-50 text-black px-[40px] xl:px-[120px] justify-between top-24">
            <img src={logo} alt="" className="w-[147px] h-[37px] mb-3" />
            <div className="flex gap-10 text-white tracking-widest text-[13px] font-semibold">
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
        {/* <div className=" custom-gradient_top h-[344px] top-0 absolute w-full  rounded-[20px]"></div> */}
        {/* <div className=" custom-gradient_bottom h-[338px] absolute bottom-0  w-full rounded-[20px]"></div> */}

        <div className="absolute h-[20vh] md:h-[30vh] lg:h-[80vh] w-full flex items-center justify-center">
          <div className=" flex flex-col  items-center justify-center ">
            <h1 className=" text-[40px] md:text-[70px] text-white font-light">
              {text}
            </h1>
            <p className=" text-[15px] md:text-[31px] text-white font-light">
              {desc}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

BannerForAll.defaultProps = {
  text: "About Us",
  desc: "",
};

export default BannerForAll;
