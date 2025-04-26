import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Futter() {


    const FutterInfo = [
        {
            id: 1,
            title: 'Support Links',
            text1: 'Product Guides',
            text2: 'Terms & Conditions',
            text3: 'Delivery Policy',
            text4: 'Privacy Policy',
            text5: 'Feedback',
        },
        {
            id: 2,
            title: 'Quick Links',
            text1: 'Product Guides',
            text2: 'Terms & Conditions',
            text3: 'Delivery Policy',
            text4: 'Privacy Policy',
            text5: 'Feedback',
        },
        {
            id: 3,
            title: 'Company',
            text1: 'Product Guides',
            text2: 'Terms & Conditions',
            text3: 'Delivery Policy',
            text4: 'Privacy Policy',
            text5: 'Feedback',
        },
        {
            id: 4,
            title: 'Help',
            text1: 'Product Guides',
            text2: 'Terms & Conditions',
            text3: 'Delivery Policy',
            text4: 'Privacy Policy',
            text5: 'Feedback',
        },
    ]

  return (
    <div className="w-full h-[354px] bg-[#F3F3F3] flex pl-[130px] pr-[150px]">

        <div className="w-[30%] h-full flex flex-col justify-center items-start gap-4">
          <div className="flex-shrink-0 pr-4">
                  <Image src="/Logo.svg" alt="Logo" width={130} height={27.36} priority />
                </div>
                <p className="text-[#333333] text-[15px] font-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-4"> <FontAwesomeIcon icon={faFacebook} className="text-[#666666] text-[24px]"/>  <FontAwesomeIcon icon={faTwitter} className="text-[#666666] text-[24px]"/>  <FontAwesomeIcon icon={faInstagram} className="text-[#666666] text-[24px]"/>  <FontAwesomeIcon icon={faLinkedin} className="text-[#023047] text-[24px]"/></div>

                <p className="underline text-[#666666] text-[15px] font-regular">Check our shop in Google Map</p>
        </div>
        
        {FutterInfo.map((card, index) => (

        <div key={index} className="w-[20%] h-full flex justify-start items-start flex-col pt-22 gap-4 ">
            <h2 className='text-[#000000] text-[18px] font-medium'>{card.title}</h2>
            <div className="flex flex-col gap-2">
            <p className='text-[#000000] text-[15px] font-regular'>{card.text1}</p>
            <p className='text-[#000000] text-[15px] font-regular'>{card.text2}</p>
            <p className='text-[#000000] text-[15px] font-regular'>{card.text3}</p>
            <p className='text-[#000000] text-[15px] font-regular'>{card.text4}</p>
              <p className='text-[#000000] text-[15px] font-regular'>{card.text5}</p>
            </div>
        </div>

        ))}

       


        
    </div>
  )
}
