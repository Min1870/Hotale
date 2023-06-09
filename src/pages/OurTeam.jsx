import React from "react";
import OurTeamCard from "../components/OurTeamCard";
import {BsSend} from 'react-icons/bs'

const teamMembers = [
  {
    id: 1,
    name: "Jane Smith", 
    position: "CEO & Founder",
    image: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-1-600x600.jpg",
  },
  {
    id: 2,
    name: "Paul Smith", 
    position: "General Manager",
    image: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-2-600x600.jpg",
  },
  {
    id: 3,
    name: "Alisa Doe", 
    position: "Chief Financial Officer",
    image: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-3-600x600.jpg",
  },
  {
    id: 4,
    name: "Saul Goodman", 
    position: "Building Manager",
    image: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-4-600x600.jpg",
  },
  {
    id: 5,
    name: "David Wick", 
    position: "Hr Manager",
    image: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-5-600x600.jpg",
  },
  {
    id: 6,
    name: "John Doe", 
    position: "Marking Leader",
    image: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-6-600x600.jpg",
  },
]

const OurTeam = () => {
  return (
    <div className="mx-5">
      <div>Banner goes here</div>
      <div className=" mt-20 md:mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers?.map(member => (
          <OurTeamCard key={member.id} member={member}/>
        ))}
      </div>
      {/* contact section  */}
      <div className=" mx-auto text-center mt-20">
        <h1 className=" font-allison text-[55px] font-[400] leading-[50px]">Newsletter</h1>
        <div className=" bg-gray-100 pt-5 pb-20 rounded-[20px] space-y-10 px-5 sm:px-10">
          <p className=" text-[18px] text-[#898989] fw-[400] leading-[30px]">
            Subscribe the newsletter to get updated to news and promotions
          </p>
          <div className=" flex items-center gap-3 justify-center">
            <input type="text" required placeholder="Your Email Address" className=" shadow-[0_10px_45px_rgba(0,0,0,.1)] text-[#898989] fw-[400] w-[170px] sm:w-[380px] h-[76px] rounded-[20px] py-[6px] px-[25px] outline-none text-[17px]"/>
            <button className=" bg-black text-white w-[76px] h-[76px] rounded-[20px] flex items-center justify-center text-xl"><BsSend/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
