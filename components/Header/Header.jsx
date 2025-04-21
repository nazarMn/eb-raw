import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="w-full h-[110px] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.15)] flex items-center justify-between">
      <div className="w-full flex align-middle justify-between shadow-[0px_1px_1px_rgba(0,0,0,0.15)] mx-auto px-4 md:px-10 lg:px-[135px] py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

       
        <div className="flex-shrink-0 pr-4">
          <Image src="/Logo.svg" alt="Logo" width={130} height={27.36} priority />
        </div>

     
        <form
          onSubmit={handleSearch}
          className="relative w-full max-w-[670px] h-[50px] flex-shrink mt-2 md:mt-0"
        >
          <input
            type="text"
            placeholder="Search in 20,000 Products..."
            className="w-full h-full pl-4 pr-[110px] bg-white rounded-[5px] border border-[#023047] text-[#666] text-sm outline-none"
          />

          
          <div className="absolute right-[100px] top-1/2 transform -translate-y-1/2">
            <select className="text-[#999999] text-sm bg-transparent outline-none">
              <option value="">All</option>
            </select>
          </div>

       
          <button
            type="submit"
            className="absolute right-0 top-0 w-[100px] h-[50px] bg-[#023047] rounded-r-[5px] text-white text-sm hover:bg-[#022048] active:bg-[#021838]"
          >
            Search
          </button>
        </form>

      
        <div className="flex items-center gap-5 mt-2 pl-4 md:mt-0">
          <Image
            src="/Catalog.svg"
            alt="Catalog"
            width={25}
            height={25}
            className="cursor-pointer"
            priority
          />
          <Image
            src="/Love.svg"
            alt="Love"
            width={26.64}
            height={25}
            className="cursor-pointer"
            priority
          />
          <Image
            src="/Profile.svg"
            alt="Profile"
            width={22.67}
            height={25}
            className="cursor-pointer"
            priority
          />
        </div>
      </div>
    </header>
  );
}
