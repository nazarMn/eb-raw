"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      <div className="flex items-center justify-between h-[50px] px-4 sm:px-6 md:px-10 lg:px-[135px]">

       
        <div className="flex items-center pr-8 space-x-2 sm:space-x-4">
          <Image
            src="/BurgerMenu.svg"
            alt="Burger Menu"
            width={25}
            height={25}
            className="cursor-pointer block lg:hidden"
            priority
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <h2 className="font-semibold text-sm sm:text-[15px] text-[#333] cursor-pointer whitespace-nowrap">
            All Departments
          </h2>
        </div>

       
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {[
            "Home", "Shop", "Categories", "Man", "Woman",
            "Accessories", "Blog", "Page", "Elements"
          ].map((item, index) => (
            <h2
              key={index}
              className="text-[15px] text-[#333] hover:text-black cursor-pointer transition-colors"
            >
              {item}
            </h2>
          ))}
        </nav>

      
        <div className="hidden pl-4 md:block">
          <h2 className="text-[15px] font-semibold text-[#333] hover:text-black cursor-pointer">
            Recently Viewed
          </h2>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="lg:hidden px-4 py-4 bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            {[
              "Home", "Shop", "Categories", "Man", "Woman",
              "Accessories", "Blog", "Page", "Elements",
              "Recently Viewed"
            ].map((item, index) => (
              <h2
                key={index}
                className="text-sm text-[#333] hover:text-black cursor-pointer"
              >
                {item}
              </h2>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
