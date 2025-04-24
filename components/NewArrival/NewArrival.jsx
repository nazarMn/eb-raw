import React from 'react'
import Image from 'next/image'

export default function NewArrival() {
  return (
    <div className="w-full h-[650px] flex flex-wrap  justify-evenly items-center">

<div className='flex justify-center items-center w-[570px] h-[450px] bg-[#C4C4C4] bg-cover' style={{ backgroundImage: "url('/NewArrival-Img1.png')" }}>

    <div className='w-[65%] h-full'>

      
    </div>

    <div className='w-[35%] h-full flex flex-col justify-center items-center gap-4'>
        <p className='text-[#023047] font-semibold text-[14px]'>Top Collection</p>
        
        <h2 className='font-semibold text-[18px] text-[#000000]'>SHOP WOMANS</h2>

        <button className="relative w-[130px] h-[50px] bg-[#023047] text-[#ffffff] font-semibold text-[16px] cursor-pointer overflow-hidden group hover:shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)]">
          <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-[#023047]">Shop Now</span>
          <span className="absolute top-0 left-0 w-full h-full bg-[#ffffff] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
        </button>


    </div>

</div>

<div className='flex justify-center items-center w-[570px] h-[450px] bg-[#C4C4C4] bg-cover' style={{ backgroundImage: "url('/NewArrival-Img2.png')" }}>

    <div className='w-[65%] h-full'>

      
    </div>

    <div className='w-[35%] h-full flex flex-col justify-center items-center gap-4'>
        <p className='text-[#023047] font-semibold text-[14px]'>New Collection</p>
        
        <h2 className='font-semibold text-[18px] text-[#000000]'>SUMMER FASHION</h2>

        <button className="relative w-[130px] h-[50px] bg-[#023047] text-[#ffffff] font-semibold text-[16px] cursor-pointer overflow-hidden group hover:shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)]">
          <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-[#023047]">Shop Now</span>
          <span className="absolute top-0 left-0 w-full h-full bg-[#ffffff] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0"></span>
        </button>


    </div>

</div>

      
    </div>
  )
}
