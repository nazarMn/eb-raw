import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import'./Hero.css'

export default function Hero() {
  const year = new Date().getFullYear();
  return (
    <div className='w-full h-[650px] bg-cover' style={{ backgroundImage: "url('/HeroBG.png')" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="w-full h-full mySwiper"
      >

        <SwiperSlide className='w-full h-full flex pl-30'>
          <div className='w-full h-full flex'>
          
       <div className='w-[33%] h-full flex flex-col justify-center items-start gap-4 '>
        <p className='text-[#9CDEFF] font-regular text-[16px]'>New Inspirations</p>
        <h2 className='font-bold text-[48px] text-white'>Man <br />
        <span className='text-[#9CDEFF]'>
        Collection {year}
        </span></h2>
        <p className='text-[#ffffff] font-medium text-[16px]'>Trendy for man and woman collections</p>
        <button className="relative w-[130px] h-[50px] bg-white text-[#023047] font-semibold text-[16px] cursor-pointer border-2 border-[#023047] overflow-hidden group hover:shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)]">
  <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-white">Shop Now</span>
  <span className="absolute top-0 left-0 w-full h-full bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
</button>

        </div>
       <div className='w-[67%] h-full flex justify-start items-center'>

        <Image 
        src="/sliderImg1.png" alt="Hero" width={750} height={500}>



        </Image>


       </div>
       </div>

          </SwiperSlide>




          <SwiperSlide className='w-full h-full flex pl-30'>
          <div className='w-full h-full flex'>
          
       <div className='w-[33%] h-full flex flex-col justify-center items-start gap-4 '>
        <p className='text-[#9CDEFF] font-regular text-[16px]'>New Inspirations</p>
        <h2 className='font-bold text-[48px] text-white'>Man <br />
        <span className='text-[#9CDEFF]'>
        Collection {year}
        </span></h2>
        <p className='text-[#ffffff] font-medium text-[16px]'>Trendy for man and woman collections</p>
        <button className="relative w-[130px] h-[50px] bg-white text-[#023047] font-semibold text-[16px] cursor-pointer border-2 border-[#023047] overflow-hidden group hover:shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)]">
  <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-white">Shop Now</span>
  <span className="absolute top-0 left-0 w-full h-full bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
</button>

        </div>
       <div className='w-[67%] h-full flex justify-start items-center'>

        <Image 
        src="/sliderImg1.png" alt="Hero" width={750} height={500}>



        </Image>


       </div>
       </div>

          </SwiperSlide>



          <SwiperSlide className='w-full h-full flex pl-30'>
          <div className='w-full h-full flex'>
          
       <div className='w-[33%] h-full flex flex-col justify-center items-start gap-4 '>
        <p className='text-[#9CDEFF] font-regular text-[16px]'>New Inspirations</p>
        <h2 className='font-bold text-[48px] text-white'>Man <br />
        <span className='text-[#9CDEFF]'>
        Collection {year}
        </span></h2>
        <p className='text-[#ffffff] font-medium text-[16px]'>Trendy for man and woman collections</p>
        <button className="relative w-[130px] h-[50px] bg-white text-[#023047] font-semibold text-[16px] cursor-pointer border-2 border-[#023047] overflow-hidden group hover:shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)]">
  <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-white">Shop Now</span>
  <span className="absolute top-0 left-0 w-full h-full bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
</button>

        </div>
       <div className='w-[67%] h-full flex justify-start items-center'>

        <Image 
        src="/sliderImg1.png" alt="Hero" width={750} height={500}>



        </Image>


       </div>
       </div>

          </SwiperSlide>

          
         
        
      </Swiper>
    </div>
  )
}
