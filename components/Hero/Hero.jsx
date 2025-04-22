import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css';

import HeroSlide from './HeroSlide';

export default function Hero() {
  const year = new Date().getFullYear();

  const slides = [
    {
      title: "Man",
      subtitle: `Collection ${year}`,
      description: "Trendy for man and woman collections",
      imageSrc: "/sliderImg1.png"
    },
    {
      title: "Woman",
      subtitle: `New Arrivals ${year}`,
      description: "Elegant fashion for the modern woman",
      imageSrc: "/sliderImg1.png"
    },
    {
      title: "Unisex",
      subtitle: `Limited Edition ${year}`,
      description: "Styles for everyone – express your vibe",
      imageSrc: "/sliderImg1.png"
    }
  ];

  return (
    <div className='w-full h-[650px] bg-cover' style={{ backgroundImage: "url('/HeroBG.png')" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="w-full h-full mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className='w-full h-full flex pl-30' key={index}>
            <HeroSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
