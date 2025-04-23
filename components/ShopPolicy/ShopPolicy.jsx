import Image from "next/image"

export default function ShopPolicy() {
  return (
    <div className='w-full h-[260px] flex  justify-around items-center bg-[#F3F3F3] '>


      <div className='w-[270px] h-[60px] flex  items-center border-[1px] border-[#CCCCCC]'>

<div className="w-[25%] h-full flex justify-center items-center">
<div className="w-[45px] h-[45px] bg-[#E5E5E5] rounded-full flex justify-center items-center ">
        <Image 
        src="/FreeShipping.svg" alt="FreeShipping" width={22} height={22}>

        </Image>
        </div>
        </div>
        
      

      <div className="w-[75%] h-full flex flex-col justify-start">
        <h2 className='text-[24px] font-semibold text-[#333333]'>Free Shipping</h2>
        <p className="text-[16px] font-regular text-[#666666]">Orders over $200</p>
      </div>

      </div>
   
      
       

    </div>
  )
}
