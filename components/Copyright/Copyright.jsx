import React from 'react'
import Image from 'next/image'

export default function Copyright() {
  return (
    <div className="w-full h-[80] bg-[#ffffff] flex justify-between items-center pl-[135px] pr-[135px]">

        <p className="text-[#666] text-[15px] sm:text-[14px] font-regular">Copyright @2021 ebRaw. All Rights Reserved By <span className='text-[#333] font-medium'> Graphic Raz </span></p>

        <div className="flex items-center gap-3">

            <Image src="/Paypal.svg" alt="Paypal" width={45} height={45}></Image>
            <Image src="/Skrill.svg" alt="Skrill" width={45} height={45}></Image>
            <Image src="/Visa.svg" alt="Visa" width={45} height={45}></Image>
            <Image src="/MasterCard.svg" alt="MasterCard" width={45} height={45}></Image>

        </div>

    </div>
  )
}
