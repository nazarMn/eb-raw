import React from 'react'
import styles  from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full h-[110px] bg-white flex items-center justify-between pl-[135px] pr-[135px] shadow-[0px_1px_1px_rgba(0,0,0,0.15)]'>
        <h1><Image src="/Logo.svg" alt="Logo" width={130} height={27.36} />
        </h1>

        <form  className='relative w-[670px] h-[50px]'>
            <input type="text" placeholder='Search in 20,000 Products...' className='w-full h-full pl-[15px] pr-[15px] bg-[#f5f5f5] rounded-[5px] border-[1.5px] border-[#023047] text-[#999999] size-[13px] bg-[#ffffff] outline-0'/>

            <div className="absolute right-27 top-3">
  <select className='text-[#999999] '>
    <option value="">All</option>
  </select>
 
</div>

         
  <button className='absolute right-0 top-0 w-[100px] h-[50px] bg-[#023047] rounded-r-[5px] text-white cursor-pointer hover:bg-[#022048] active:bg-[#023048]'>Search</button>

        </form >

        <div className='flex items-center gap-[30px]'>
            <Image src="/Catalog.svg" alt="Catalog" width={25} height={25} className='cursor-pointer'></Image>
            <Image src="/Love.svg" alt="Love" width={26.64} height={25} className='cursor-pointer'></Image>
            <Image src="/Profile.svg" alt="Profile" width={22.67} height={25} className='cursor-pointer'></Image>

        </div>



    </header>
  )
}
