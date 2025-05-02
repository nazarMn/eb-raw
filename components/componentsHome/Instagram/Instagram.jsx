import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Instagram() {


    const InstImg = [
        {
            id: 1,
            img: '/Blog-img3.png',
        },
        {
            id: 2,
            img: '/Blog-img2.png',
        },
        {
            id: 3,
            img: '/Blog-img1.png',
        },
        {
            id: 1,
            img: '/Blog-img3.png',
        }
        ]

  return (
    <div className="w-full h-auto flex flex-col bg-[#F3F3F3] xl:h-[535px]">

        <header className="w-full h-[100px] flex justify-center items-end pt-8"><h2 className="font-semibold text-[24px] text-[#000000] text-center">Follow us in instagram @graphic_raz</h2></header>



<div className="w-full h-auto flex justify-center items-center gap-4 flex-wrap pt-16 pb-16">

{InstImg.map((card, index) => (

         <div  key={index} className="group w-[285px] h-[285px] flex flex-col bg-[#F0F0F0] overflow-hidden">
       
         <div className="relative w-full h-full ">
           <Image
             src={card.img}
             alt={card.img}
             width={285}
             height={285}
             className="w-full h-full object-cover transition-all duration-500"
           />
           
        
         <div className="absolute flex justify-center  items-center flex-col top-[5%] left-[5%] w-[90%] h-[90%] bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 cursor-pointer">

            <FontAwesomeIcon icon={faInstagram} className="text-white text-[24px]" />
       
       </div>
       
         </div>
       
       
       </div>

       ))}
       </div>




      
    </div>
  )
}
