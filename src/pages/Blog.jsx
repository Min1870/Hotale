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
            <img
              className=""
              src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/kelsey-roenau-608583-unsplash-900x500.jpg"
              alt=""
            />
          
          </Link>
          <div className="px-[40px] py-[45px]">
            <Link to={""}>
              <h5 className="mb-[20px] text-[30px] font-medium transition duration-100 hover:text-[#656565]">
                Luxury Suite
              </h5>
            </Link>
            <div class="mb-[30px] font-normal flex gap-4 flex-col md:flex-row"></div>
            <Link
              to={""}
              className="inline-flex mb-[30px] items-center py-2 text-sm font-medium text-center text-black tracking-widest uppercase focus:ring-4 focus:outline-none"
            >
              Book Now
              <MdArrowRightAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
