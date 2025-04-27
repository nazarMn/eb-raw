import React from 'react'
import Image from 'next/image'

export default function Copyright() {
  return (
    <div className="w-full min-h-[80px] bg-[#ffffff] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6 sm:px-[135px] py-4">

      <p className="text-[#666] text-[14px] text-center sm:text-left">
        Copyright @2021 ebRaw. All Rights Reserved By 
        <span className='text-[#333] font-medium'> Graphic Raz</span>
      </p>

      <div className="flex items-center gap-3">
        <Image src="/Paypal.svg" alt="Paypal" width={45} height={45} />
        <Image src="/Skrill.svg" alt="Skrill" width={45} height={45} />
        <Image src="/Visa.svg" alt="Visa" width={45} height={45} />
        <Image src="/MasterCard.svg" alt="MasterCard" width={45} height={45} />
      </div>

    </div>
  )
}
