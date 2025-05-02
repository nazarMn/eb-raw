import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
   <header className="w-full">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 md:px-10 lg:px-[135px] py-4 border-b border-[#E5E5E5] ">
           
         
           <div className="flex-shrink-0 pr-4">
             <Image src="/Logo.svg" alt="Logo" width={130} height={27.36} priority />
           </div>


   
          
           <div className="flex items-center gap-5 pl-1 sm:pl-4 mt-2 md:mt-0">
                {["Profile"].map((icon, i) => (
                  <div key={i} className="relative">
                    <Image
                      src={`/${icon}.svg`}
                      alt={icon}
                      width={26}
                      height={25}
                      className="cursor-pointer"
                    />
                   
                  </div>
                ))}
               
              </div>
   
     
          
         </div>
       </header>
  )
}
