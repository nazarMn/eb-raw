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
        
      

      <div className="w-[75%] h-full flex flex-col justify-start items-start">
        <h2 className='text-[24px] font-semibold text-[#333333]'>Free Shipping</h2>
        <p className="text-[16px] font-regular text-[#666666]">Orders over $200</p>
      </div>

      </div>

      






      <div className='w-[270px] h-[60px] flex  items-center border-[1px] border-[#CCCCCC]'>

<div className="w-[25%] h-full flex justify-center items-center">
<div className="w-[45px] h-[45px] bg-[#E5E5E5] rounded-full flex justify-center items-center ">
        <Image 
        src="/SecurePayment.svg" alt="SecurePayment" width={22} height={22}>

        </Image>
        </div>
        </div>
        
      

      <div className="w-[75%] h-full flex flex-col justify-start items-start">
        <h2 className='text-[24px] font-semibold text-[#333333]'>Secure Payment</h2>
        <p className="text-[16px] font-regular text-[#666666]">100% secure payment</p>
      </div>

      </div>







      <div className='w-[270px] h-[60px] flex  items-center border-[1px] border-[#023047]'>

<div className="w-[25%] h-full flex justify-center items-center">
<div className="w-[45px] h-[45px] bg-[#023047] rounded-full flex justify-center items-center ">
        <Image 
        src="/GiftCertificae.svg" alt="GiftCertificae" width={22} height={22}>

        </Image>
        </div>
        </div>
        
      

      <div className="w-[75%] h-full flex flex-col justify-start items-start">
        <h2 className='text-[24px] font-semibold text-[#333333]'>Gift Certificae</h2>
        <p className="text-[16px] font-regular text-[#666666]">Buy now $500 to $1000</p>
      </div>

      </div>







      <div className='w-[270px] h-[60px] flex  items-center border-[1px] border-[#CCCCCC]'>

<div className="w-[25%] h-full flex justify-center items-center">
<div className="w-[45px] h-[45px] bg-[#E5E5E5] rounded-full flex justify-center items-center ">
        <Image 
        src="/247Support.svg" alt="247Support" width={22} height={22}>

        </Image>
        </div>
        </div>
        
      

      <div className="w-[75%] h-full flex flex-col justify-start items-start">
        <h2 className='text-[24px] font-semibold text-[#333333]'>24/7 Support</h2>
        <p className="text-[16px] font-regular text-[#666666]">Ready support</p>
      </div>

      </div>
   
      
       

    </div>
  )
}
