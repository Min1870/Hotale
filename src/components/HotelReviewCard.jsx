import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const HotelReviewCard = () => {
  return (
    <div className=' bg-gray-100 rounded'>
        <img className=' rounded-full w-[100px] mx-auto -my-10 border-2 border-gray-100' src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/name2-150x150.jpg" alt="" />
        <div className=' flex flex-col items-center text-center py-16 px-8'>
            <h1 className=' font-[500] text-[15px] mb-3'>CYNTHIA HILL</h1>
            <div className=' flex items-center gap-2 mb-8'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <p className=' leading-[27.5px] text-[#898989]'>A very pleasant stay! The hospitality and services provided by each staff of the hotel were excellent.</p>
        </div>
    </div>
  )
}

export default HotelReviewCard