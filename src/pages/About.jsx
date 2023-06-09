import React from "react";
import BtnAbout from "../components/BtnAbout";

const About = () => {
  return (
    <div className="mx-5">
      <div>Banner goes here</div>
      <div className=" py-[50px] mx-auto space-y-5 text-center w-[80%] md:w-[55%]">
        <h1 className=" font-allison text-[55px] lg:text-[80px] leading-[66px]">
          Visit Our Famous Facilities
        </h1>
        <div className=" flex flex-col items-center gap-5">
          <p className=" text-[21px] text-[#898989] fw-[400] leading-[35.7px]">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
          <div className=" w-[40px] bg-[#0a0a0a] h-[3px] "></div>
        </div>
      </div>
      {/* section 2  */}
      <div className=" md:mx-10 md:space-y-10">
        {/* photo one  */}
        <div className=" py-[50px] grid md:grid-cols-2 gap-10 md:gap-20">
          <div className=" overflow-hidden">
            <img
              className=" w-full object-cover  rounded-[20px] "
              src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/chef-cook.jpg"
              alt=""
            />
          </div>
          <div className=" space-y-10 w-[90%]">
            <h1 className=" text-[30px] font-[500] tracking-[1px]">
              3 Michelin Stars Restaurant, Vézère
            </h1>
            <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
              A brasserie inspired by French cuisine, a fresh and modern place
              to visit and enjoy dishes always handmade of the best ingredients
              of the season.
            </p>
            <BtnAbout/>
          </div>
        </div>
        {/* photo two  */}
        <div className=" py-[50px] md:grid md:grid-cols-2 flex flex-col-reverse gap-10 md:gap-20">
          <div className=" space-y-10 w-[90%]">
            <h1 className=" text-[30px] font-[500] tracking-[1px]">
              The Penthouse Bar, An iconic american bar
            </h1>
            <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
              The cozy bar area accompanying the Penthouse is a classic cocktail
              bar at it’s finest. Our experienced bartenders are here to offer
              you both the classic bewerages and the newest global trends.
            </p>
            <BtnAbout/>
          </div>
          <div className=" overflow-hidden">
            <img
              className=" w-full object-cover rounded-[20px] "
              src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/bar.jpg"
              alt=""
            />
          </div>
        </div>
        {/* photo three  */}
        <div className=" py-[50px] grid md:grid-cols-2 gap-10 md:gap-20">
          <div className=" overflow-hidden">
            <img
              className=" w-full object-cover  rounded-[20px] "
              src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/spa.jpg"
              alt=""
            />
          </div>
          <div className=" space-y-10 w-[90%]">
            <h1 className=" text-[30px] font-[500] tracking-[1px]">
              The Spa. Refresh Yourself
            </h1>
            <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
              Whether you are in search of a well-appointed gym or a pampering
              moment on the massage table and inside the warm saunas, you can
              always find a place for yourself at our spa.
            </p>
            <BtnAbout/>
          </div>
        </div>
      </div>

      {/* section three  */}
      <div className=" py-[80px] md:mx-10 md:space-y-10">
        <div className=" py-[50px] grid md:grid-cols-2 gap-10 md:gap-20">
          <div className=" flex gap-10 md:gap-20 text-[55px] font-[500]">
            <h1>
              5{" "}
              <span className=" text-[22px] font-[400] tracking-[7px]">
                stars
              </span>
            </h1>
            <h1>
              25{" "}
              <span className=" text-[22px] font-[400] tracking-[7px]">
                rooms
              </span>
            </h1>
          </div>
          <div className=" space-y-10 md:-ml-14">
            <h1 className=" text-[34px] font-[400] tracking-[5px] leading-[47.6px] text-[#0A0A0A]">
              Our hotel is located in the heart of the New Forrest. A five stars
              lifestyle surrounded by the forest.
            </h1>
          </div>
        </div>
      </div>

      {/* section four  */}
      <div className=" overflow-hidden bg-cover rounded-[20px] h-[80vh] relative flex justify-center items-center bg-[url('https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/01/shutterstock_783346942.jpg')]">
        <div className=" w-[90%] md:w-[60%] text-center z-20">
          <h1 className=" text-[#fff] text-[40px] md:text-[60px] font-[400]">
            Choose from a wide range of <span className=" font-[700]">luxury rooms <span className=" text-[#193573]">.</span></span>
          </h1>
          <button className=" uppercase bg-[#fff] hover:bg-[#cecece] transition text-[13px] font-[500] tracking-[2px] text-[#141414] py-[15px] px-[33px] mt-10">book now</button>
        </div>
        <div className=" absolute top-0 left-0 w-full h-full bg-[#00000045] z-10"></div>
      </div>
      {/* section sticker  */}
      <div className=" py-[100px] md:grid md:grid-cols-6 flex flex-col items-center gap-10 md:gap-0 mx-0 md:mx-10">
        <div className="">
          <img className=" max-w-[100px] md:max-w-[120px] lg:max-w-[180px]  " src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/logo1.png" alt="" />
        </div>
        <div className="">
          <img className=" max-w-[100px] md:max-w-[120px] lg:max-w-[180px] " src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/logo2.png" alt="" />
        </div>
        <div className="">
          <img className=" max-w-[100px] md:max-w-[120px] lg:max-w-[180px] " src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/logo3.png" alt="" />
        </div>
        <div className="">
          <img className=" max-w-[100px] md:max-w-[120px] lg:max-w-[180px] " src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/logo4.png" alt="" />
        </div>
        <div className="">
          <img className=" max-w-[100px] md:max-w-[120px] lg:max-w-[180px] " src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/logo5.png" alt="" />
        </div>
        <div className="">
          <img className=" max-w-[100px] md:max-w-[120px] lg:max-w-[180px] " src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/logo6.png" alt="" />
        </div>
      </div>

      
    </div>
  );
};

export default About;
