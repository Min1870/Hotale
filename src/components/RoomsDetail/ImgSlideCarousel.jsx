import React, { useEffect, useRef, useState } from 'react'
import {motion as m} from 'framer-motion'

const ImgSlideCarousel = () => {

    const[width,setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
    },[width])
    
    const images = [
        {
            id:1,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2020/10/shutterstock_560973166.jpg"
        },
        {
            id:2,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_324822821.jpg"
        },
        {
            id:3,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/andrii-podilnyk-766487-unsplash-scaled.jpg"
        },
        {
            id:4,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1298236804.jpg"
        },
        {
            id:5,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/single-room-gallery-img.jpg"
        },
        {
            id:6,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1354405256.jpg"
        },
        {
            id:7,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2020/10/roberto-nickson-emqnSQwQQDo-unsplash-scaled.jpg"
        },
        {
            id:8,
            url:"https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2020/10/paul-postema-mr0Dp231IEw-unsplash.jpg"
        },
    ]
  return (
    <div>
        <m.div ref={carousel} className='overflow-x-scroll cursor-grab'>
            <m.div className='flex gap-2 w-full cursor-grab' drag="x" dragConstraints={{right:0,left:-width}}>
                {images.map((img) => {
                    return <m.div key={img?.id} className=''>
                        <img src={img?.url} className='min-w-[400px] h-[500px] object-cover pointer-events-none'/>
                    </m.div>
                })}
            </m.div>
        </m.div>
    </div>
  )
}

export default ImgSlideCarousel