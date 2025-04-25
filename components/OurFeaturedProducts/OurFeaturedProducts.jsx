import React from 'react'
import Image from 'next/image'

export default function OurFeaturedProducts() {
  return (
    <div className='w-full h-[1466px] bg-[#F3F3F3] flex flex-col'>

        <div className='w-full h-[20%] flex justify-center items-center gap-4 flex-col '>
            <div className='w-full h-[60%] flex flex-col justify-end items-center gap-2 text-center'>
                <h2 className='text-[#333] text-[30px] font-bold'>Our Featured Products</h2>

                <p className='text-[#666] text-[15px] font-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
         



            <nav className="w-full h-[40%] flex items-end justify-evenly">
          {[
            "Hoodie", "Accessories", "Mens", "Womens", "Trendy", "T-shirt"
          ].map((item, index) => (
            <button
              key={index}
              className="w-[100px] h-[45px] bg-[#F3F3F3] text-[15px] text-[#333] font-semibold hover:text-[#ffffff] hover:bg-[#023047] cursor-pointer "
            >
              {item}
            </button>
          ))}
        </nav>



        </div>


        <div>
            <Image></Image>
        </div>

    </div>
  )
}
