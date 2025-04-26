import React from 'react'
import Image from 'next/image'

export default function OfferNewslatter() {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-[350px] bg-[#FFFFFF] flex justify-evenly items-center">

<div className="w-[570px] h-full relative flex justify-center items-center">
      
      <Image 
        src="/Blog-img1.png" 
        alt="Blog" 
        fill  
        style={{ objectFit: 'cover', objectPosition: 'top center'   }} 
          
      />

      <div className="w-full h-full bg-[rgba(0,0,0,0.65)] flex justify-center items-center flex-col relative z-10">
        <p className="text-[#FFFFFF] font-medium text-[30px]">SAVE UP</p>
        <h2 className="text-[#FFFFFF] font-bold text-[72px]">50%</h2>
        <p className="text-[#FFFFFF] font-medium text-[30px]">OFF</p>
      </div>

    </div>

      <div className='w-[570px] relative h-full flex justify-center items-center bg-cover'>

      <Image
        src="/Blog-img1.png" alt="Blog" fill style={{ objectFit: 'cover', objectPosition: 'top center' }}/>

<div className="relative w-full h-full bg-[rgba(0,0,0,0.65)] flex justify-center items-start flex-col pl-8 gap-4">

<h2 className='text-[#FFFFFF] font-medium text-[30px]'>Sign Up Now & Get 10% Off</h2>
<p className="text-[#FFFFFF] font-regular text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>

<form
          onSubmit={handleSearch}
          className="relative w-full max-w-[466px] h-[45px] md:h-[50px] flex-shrink mt-2 md:mt-0 "
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full h-full pl-4 pr-[110px] bg-[#FFFFFF] text-[15px] text-[#999] text-regular outline-none"
          />

<button className="absolute top-0 right-0 w-[110px] sm:w-[130px] h-[40px] sm:h-[50px] bg-[#333333] text-white font-semibold text-[14px] sm:text-[16px] cursor-pointer overflow-hidden group">
          <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-[#333333]">
            Shop Now
          </span>
          <span className="absolute top-0 left-0 w-full h-full bg-white scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0" />
        </button>
        </form>

</div>



</div>
      
    </div>
  )
}
