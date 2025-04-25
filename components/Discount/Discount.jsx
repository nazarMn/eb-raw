import React from 'react'

export default function Discount() {
  return (
    <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/DiscountBg.png')" }}>
  <div className="absolute w-full h-full bg-[#023047] opacity-95">

  </div>
  <div className="absolute w-full h-full flex justify-center items-center">

    <div className='w-[970px] h-[100px] flex justify-evenly items-center bg-[#E5F6FF]'>
        <h2 className='text-[#333333] text-[24px] font-medium'>Super discount for your first purchase</h2>

        <button className='w-[170px] h-[50px] border border-dashed border-[#023047] text-[#023047] font-medium text-[16px] text-center'>FREE10DELIVERY</button>

        <h2 className='text-[#333333] text-[18px] font-medium'>Use discount code in checkout!</h2>

        

    </div>
   
  </div>
 
</div>

  )
}
