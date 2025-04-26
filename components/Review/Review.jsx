import React, { useRef } from 'react'
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import Image from 'next/image';


export default function Review() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='w-full h-[627px] flex flex-col justify-center items-center bg-[#FFFFFF]'>

      <header className="w-full h-[30%] flex justify-end items-center flex-col gap-10">
        <h2 className='text-[#000000] font-semibold text-[30px]'>What Say Our Regular Customer</h2>

        <div className="w-full flex justify-evenly items-center">
          <div className='w-[25%]'></div>

          <div className="w-[50%] text-center">
            <p className='text-[#000000] font-regular text-[15px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by injected humour</p>
          </div>

          <div className="w-[25%] flex gap-[10px] justify-center">
          <div ref={prevRef} className="relative w-[40px] h-[40px] flex items-center justify-center bg-white border-[1px] border-[#023047] cursor-pointer overflow-hidden group">
    <FontAwesomeIcon  icon={faChevronLeft}  size="xl"  color="#023047" className="relative z-10 transition-all duration-300 ease-out group-hover:text-white"/>
    <span className="absolute top-0 left-0 w-full h-full bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
  </div>



  <div ref={nextRef} className="relative w-[40px] h-[40px] flex items-center justify-center bg-white border-[1px] border-[#023047] cursor-pointer overflow-hidden group">
    <FontAwesomeIcon  icon={faChevronRight}  size="xl"  color="#023047" className="relative z-10 transition-all duration-300 ease-out group-hover:text-white"/>
    <span className="absolute top-0 left-0 w-full h-full bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
  </div>
</div>

        </div>
      </header>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true} 
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full h-[70%]"
      >
        <SwiperSlide className="w-full h-full flex justify-center items-center">
          <div className="w-[270px] h-[214px] flex flex-col justify-center items-center border-[1px] border-[#CCCCCC] gap-1 pd-5">
          <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={4}
                      precision={0.5}
                      readOnly
                      sx={{
                        color: '#023047',
                        fontSize: '15px',
                        '& .MuiRating-iconEmpty': {
                          color: '#cfd8dc',
                        },
                      }}
                    />
                  </Stack>

                  <h2 className="text-black text-[18px] font-medium text-center">
                  These settings don’t provide big changes but only some small css changes in spaces or borders for example.
                  </h2>

                  <div className="w-[70%] flex justify-center items-center gap-5">
                    <Image src="/sliderimg1.png" alt="profile" width={70} height={70} className='w-[40px] h-[40px] rounded-full'></Image>
                    <h3 className="text-black text-[18px] font-medium">John Smith</h3>
                  </div>
          </div>
        </SwiperSlide>

        
        
        
        
      </Swiper>
    </div>
  )
}
