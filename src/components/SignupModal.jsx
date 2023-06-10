import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

const SignupModal = ({ setOpenSignUpModal }) => {

  const closeSignUpModal = (e) => {
    if(e.target.classList.contains('backdrop')){
      setOpenSignUpModal(false)
    }
  }
  return (
    <div onClick={closeSignUpModal} className="backdrop select-none bg-[#00000060] overflow-hidden flex justify-center items-center h-screen fixed top-0 left-0 right-0 z-50 w-full">
      <div className="relative w-[80%] lg:w-[65%] max-h-[90%] overflow-y-scroll">
        <div className=" bg-white shadow px-8">
          <div className=" flex justify-between items-center border-b-2 py-5 border-gray-200 rounded-t">
            <span></span>
            <h3 className="uppercase text-[14px] font-[600] tracking-wider text-[#000]">
              Sign up
            </h3>

            <button
              type="button"
              onClick={() => setOpenSignUpModal(false)}
              className=" text-[#000] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5"
            >
              <RxCross1 />
            </button>
          </div>

          <div className=" py-10 border-b border-gray-200 space-y-5">
            <p className=" text-[15px] font-[400] text-[#5c5c5c]">
              After creating an account, you'll be able to track your payment
              status, track the confirmation and you can also rate the tour
              after you finished the tour.
            </p>
            <div className=" grid md:grid-cols-2 gap-5 md:gap-10">
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Username*
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div></div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Password*
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Confirm Password*
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div className=" space-y-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Birth Date*
                </label>
                <div className=" flex items-center">
                  <div className=" flex items-center mr-7">
                    <select className=" appearance-none outline-none py-3 px-4 border-2 border-gray-300 rounded w-[80px]">
                      <option value="">Date</option>
                      <option value="">aaa</option>
                      <option value="">aaa</option>
                    </select>
                    <IoMdArrowDropdown className=" -ml-[25px]" />
                  </div>
                  <div className=" flex items-center mr-14">
                    <select className=" appearance-none outline-none py-3 px-4 border-2 border-gray-300 rounded w-[110px]">
                      <option value="">Month</option>
                      <option value="">aaa</option>
                      <option value="">aaa</option>
                    </select>
                    <IoMdArrowDropdown className=" -m-[25px]" />
                  </div>
                  <div className=" flex items-center">
                    <select className=" appearance-none outline-none py-3 px-4 border-2 border-gray-300 rounded w-[90px]">
                      <option value="">Year</option>
                      <option value="">aaa</option>
                      <option value="">aaa</option>
                    </select>
                    <IoMdArrowDropdown className=" -m-[25px]" />
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Email
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Country
                </label>
                <div className=" flex items-center">
                  <select className=" appearance-none outline-none py-3 px-4 border-2 border-gray-300 rounded w-[300px]">
                    <option value="">United State of America (USA) </option>
                    <option value="">aaa</option>
                    <option value="">aaa</option>
                  </select>
                  <IoMdArrowDropdown className=" -m-[25px]" />
                </div>
              </div>
            </div>
            <div className=" text-[15px] font-[400] text-[#5c5c5c]">
              <input type="checkbox" /> * Creating an account means you're okay
              with our Terms of Service and Privacy Statement.
            </div>
            <div className=" text-center bg-[#141414] text-white py-3">
              <button className=" text-[14px] font-[500] uppercase">
                Sign up
              </button>
            </div>
          </div>

          <div className=" text-center py-10 space-y-3">
            <h1 className=" font-[700] text-[16px] text-[#141414]">
              ALREADY A MEMBER?
            </h1>
            <p className=" font-[500] uppercase text-[12px] transition text-[#141414] hover:text-[#898989]">
              login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
