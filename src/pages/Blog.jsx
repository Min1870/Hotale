import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import BannerForAll from "../utils/BannerForAll";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <BannerForAll
        text={"Blogs"}
        desc={"Cities To Visit For Your First Time In Europe"}
      />
      <div className="flex items-center justify-center gap-10 mt-20">
        <div className="max-w-sm bg-white border border-gray-100 shadow ">
          <Link to={""} className="relative">
            <div className=" inline-block border-2 overflow-hidden relative group">
              <img
                className="group-hover:scale-110 transition-all duration-300"
                src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/kelsey-roenau-608583-unsplash-900x500.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
            </div>
          </Link>
          <div className="pl-[40px] pr-[45px] pt-[35px] pb-[20px]">
            <Link to={""}>
              <span className=" text-[#4c4c4c] text-[13px] font-bold">
                Dec 17, 2021
              </span>
              <h5 className="mb-[20px] text-[30px] font-medium transition duration-200 hover:text-[#656565]">
                Cities To Visit For Your First Time In Europe
              </h5>
            </Link>
            <p className=" text-[#656565] mb-5 text-[17px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind...
            </p>
            <Link
              to={""}
              className="inline-flex gap-3 mb-[30px] items-center py-2 text-sm font-medium text-center text-black tracking-widest uppercase focus:ring-4 focus:outline-none"
            >
              Read More
              <MdArrowRightAlt size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
