import React from 'react';
import Image from 'next/image';
import './Hero.css';

export default function HeroSlide({ title, subtitle, description, imageSrc }) {
  return (
    <div className='w-full h-full flex'>
      <div className='w-[33%] h-full flex flex-col justify-center items-start gap-4'>
        <p className='text-[#9CDEFF] font-regular text-[16px]'>New Inspirations</p>
        
        <h2 className='font-bold text-[48px] text-white'>
          {title} <br />
          <span className='text-[#9CDEFF]'>{subtitle}</span>
        </h2>

        <p className='text-[#ffffff] font-medium text-[16px]'>{description}</p>

        <button className="relative w-[130px] h-[50px] bg-white text-[#023047] font-semibold text-[16px] cursor-pointer border-2 border-[#023047] overflow-hidden group hover:shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)]">
          <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-white">Shop Now</span>
          <span className="absolute top-0 left-0 w-full h-full bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
        </button>
      </div>

      <div className='w-[67%] h-full flex justify-start items-center'>
        <Image src={imageSrc} alt={title} width={750} height={500} />
      </div>
    </div>
  );
}
