import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

export default function Hero() {
  return (
    <div className="w-full h-[650px]  ">

<Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      className="w-full h-full  overflow-hidden"
    >
      <SwiperSlide><div className="bg-red-300 p-8">Слайд 1</div></SwiperSlide>
      <SwiperSlide><div className="bg-blue-300 p-8">Слайд 2</div></SwiperSlide>
      <SwiperSlide><div className="bg-green-300 p-8">Слайд 3</div></SwiperSlide>
      <SwiperSlide><div className="bg-yellow-300 p-8">Слайд 4</div></SwiperSlide>
    </Swiper>
      
    </div>
  )
}
