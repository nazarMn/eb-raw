import React from 'react'
import Image from 'next/image'

export default function MenuBar() {
  return (
    <div className="w-full h-[45px] bg-white flex items-center justify-between px-4 pl-[135px] pr-[135px]">
    
      <div className="flex items-center space-x-4">

        <Image src="/BurgerMenu.svg" alt="BurgerMenu" width={25} height={25} className='cursor-pointer'></Image>

        <h2 className="font-semibold text-[16px] text-[#333333] cursor-pointer">All Departments</h2>
      </div>

    
      <nav className="flex space-x-7">
        {["Home", "Shop", "Categories", "Man", "Woman", "Accessories", "Blog", "Page", "Elements"].map((item, index) => (
          <h2 key={index} className="text-[16px] font-regular text-[#333333] hover:underline cursor-pointer">
            {item}
          </h2>
        ))}
      </nav>

   
      <div>
        <h2 className="text-[16px] text-[#333333] font-regular hover:text-black cursor-pointer">
          Recently Viewed
        </h2>
      </div>
    </div>
  )
}
