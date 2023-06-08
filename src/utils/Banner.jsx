import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Banner = () => {
  const [toggleNum, setToggleNum] = useState(false);

  return (
    <div className="relative h-screen">
      <div>
        <div className=" absolute top-0 bg-homeBg w-full h-screen md:bg-center bg-cover bg-no-repeat rounded-[20px] bg-bottom"></div>
        <div className=" custom-gradient_top h-[344px] top-0 absolute w-full  rounded-[20px]"></div>
        <div className=" custom-gradient_bottom h-[338px] absolute bottom-0  w-full rounded-[20px]"></div>
        <div className="absolute h-screen md:h-[651px] w-full bottom-0">
          <div className=" flex flex-col mt-10 items-center z-50">
            <div className="">
              <h3 className=" font-allison text-[80px] md:text-[90px] text-center leading-[100px] pb-[30px] text-[#FFF] -rotate-[4deg]">
                Book Your Vacation
              </h3>
              <p className=" text-center text-[#FFFFFF] text-[22px] px-[20px] pb-[30px] mb-[20px]">
                Explore new experience with Hotale
              </p>
            </div>

            <div className=" absolute bottom-20">
              <form className=" flex flex-col md:flex-row gap-3 flex-wrap justify-center">
                <div className="md:flex gap-3">
                  <div className=" w-72 bg-white p-3 z-50 rounded-md mb-3 md:mb-0">
                    <div className=" text-[#8f8f8f]">Check In</div>
                    <div className="flex items-center justify-between">
                      <input type="date" />
                      <IoMdArrowDropdown />
                    </div>
                  </div>

                  <div className=" bg-white p-3 z-50 rounded-md">
                    <div className=" text-[#8f8f8f]">Check Out</div>
                    <div className="flex items-center justify-between">
                      <input type="date" />
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                <div>
                  <div className=" bg-white p-3 z-50 rounded-md">
                    <div className=" text-[#8f8f8f] cursor-pointer">Room</div>
                    <div className="flex items-center gap-10 cursor-pointer">
                      <div>1</div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                <div className=" bg-white p-3 z-50 rounded-md">
                  <div className=" text-[#8f8f8f]">Guests</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span>Adult 2</span>
                      <span>children</span>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <button className=" bg-transparent border-2 text-white border-white px-[35px] py-[15px] md:py-[5px] rounded-md font-semibold">SEARCH ROOM</button>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
