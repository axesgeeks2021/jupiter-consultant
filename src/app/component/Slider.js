"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';


function page() {
    return (
        <div className='slider__container' style={{position: 'relative'}}>
        <Swiper
            slidesPerView={1}
            style={{position:'relative'}}
            loop={true}
            autoplay={true}
        >
            <SwiperSlide className='each__slide'>
            <div className='banner__content' >
                <p className='main__heading'>Global Opportunities Await You</p>
                <p className='sub__heading'>Your Trusted Partner for International Immigration</p>
                <p className='content'>Your Bridge to New Horizons – Jupiter
                Consultants</p>
            </div>
                <Image src="/banner1.webp" width={1000} height={400} />
            </SwiperSlide>
            <SwiperSlide className='each__slide'>
            <div className='banner__content'>
                <p className='main__heading'>Explore the World with Confidence</p>
                <p className='sub__heading'>Your Trusted Travel Partner</p>
                <p className='content'>Discover, travel, and make memories with Jupiter Consultants.</p>
            </div>
                <Image src="/banner2.webp" width={1000} height={400} />
            </SwiperSlide>
            <SwiperSlide className='each__slide'>
            <div className='banner__content' >
                <p className='main__heading'>Simplify Your Visa Application</p>
                <p className='sub__heading'>Visa Experts for Seamless Travel</p>
                <p className='content'>Trust us to make your travel dreams a reality.</p>
            </div>
                <Image src="/banner3.webp" width={1000} height={400} />
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default page
