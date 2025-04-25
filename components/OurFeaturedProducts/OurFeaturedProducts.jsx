import React from 'react'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'

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

        <div className="w-full h-[80%] flex justify-around items-start flex-wrap p-10">



        <div className="w-[370px] h-[461px] bg-white flex flex-col shadow-md overflow-hidden">
  <Image
    src="/sliderImg1.png"
    alt="OurFeaturedProducts-Img1"
    width={370}
    height={700}
    className="w-full h-[75%] object-cover"
  />

  <div className="w-full h-[25%] flex justify-between items-start p-3">
    <div className="w-1/2 h-full flex flex-col justify-between">
      <h2 className="text-black text-[18px] font-medium">Man Sweet Hoodie</h2>
      <button className="w-[130px] h-[40px] border border-[#333] text-black text-[15px] font-medium bg-white hover:bg-gray-100 transition">
        Add to cart
      </button>
    </div>

    <div className="flex flex-col items-end justify-between gap-4">


<div class="flex items-center gap-2">
<Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly sx={{
      color: '#023047', 
      '& .MuiRating-iconEmpty': {
        color: '#cfd8dc', 
      },
    }} />
    
    </Stack>
<p>(99+)</p>
</div>

        
      <h2 className="text-black text-[18px] font-medium">$150.00</h2>
    </div>
  </div>
</div>





</div>


    </div>
  )
}
