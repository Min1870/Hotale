import React, { useState } from "react";
import AboutUsBanner from "../components/AboutUsBanner";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";
import HotelReviewCard from "../components/HotelReviewCard";
import { useNavigate } from "react-router-dom";

const HotelReview = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
      {openSignUpModal && (
        <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
      )}
      <div>
        <AboutUsBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        >
          <div className=" text-center text-white min-h-[350px] lg:mb-10 flex flex-col items-center justify-center space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[70px] font-[400]">
              Hotel Review
            </h1>
            <p className=" text-[28px] font-[400] ">
              Hotels for the elite passionate about luxury
            </p>
          </div>
        </AboutUsBanner>
        <div className=" py-[50px] md:py-[75px] flex flex-col items-center gap-5">
          <h1 className=" text-[28px] font-[400] ">
            What Our Clients are saying
          </h1>
          <div className=" bg-[#0a0a0a] w-[100px] h-[3px] mb-4 md:mb-8"></div>
        </div>
        <div className=" mx-10 grid grid-cols-3 gap-10 py-[50px]">
          <HotelReviewCard />
          <HotelReviewCard />
          <HotelReviewCard />
        </div>
        <div className=" py-[50px] grid md:grid-cols-2 min-h-[100vh]">
          <div className=" h-full">
            <img
              className=" h-full object-cover"
              src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1386982532.jpg"
              alt=""
            />
          </div>
          <div className=" bg-[#2C2D39] flex flex-col items-center justify-center py-20 md:py-0 px-10 sm:px-20 text-center">
            <p className=" text-[#898989] text-[18px] leading-[30px] mb-5">
              “The rooms were clean, very comfortable, and the staff was
              amazing. They went over and beyond to help make our stay
              enjoyable. I highly recommend this hotel for anyone visiting
              downtown.”
            </p>
            <h4 className="text-[#fff] text-[18px] font-[500] leading-[30px]">
              Vincent Smith
            </h4>
            <h4 className=" text-[#fff] text-[16px] leading-[30px]">
              New York
            </h4>
          </div>
        </div>

        <div className=" py-[50px] grid md:grid-cols-2 px-10 gap-20 md:gap-10">
          <div className=" space-y-8 w-[90%] md:mt-20">
            <h1 className=" text-[24px] font-[500] leading-[28px]">
              3 Michelin Stars Restaurant, Vézère
            </h1>
            <div className=" bg-[#0a0a0a] w-[100px] h-[3px] mb-4 md:mb-8"></div>
            <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
              A brasserie inspired by French cuisine, a fresh and modern place
              to visit and enjoy dishes always handmade of the best ingredients
              of the season.
            </p>
            <button className=" font-[500] text-[15] uppercase bg-[#181818] hover:bg-gray-500 transition duration-500 rounded text-white py-[13px] px-[29px]">
              learn more
            </button>
          </div>
          <div className=" overflow-hidden relative">
            <a href="https://www.youtube.com/watch?time_continue=2&v=US7bGTUkBfg&feature=emb_title">
              <img
                className=" w-full object-cover  rounded-[20px] "
                src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/01/review-video-player-bg.jpg"
                alt=""
              />
              <span className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                <img
                  className=" w-[90px] cursor-pointer"
                  src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/play.png"
                  alt=""
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelReview;
