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
        <div className="w-full bg-[#F3F3F3] flex flex-wrap px-6 md:px-[130px] py-10 md:py-0 md:h-[354px]">

            <div className="w-full h-auto md:w-[30%] flex flex-col justify-center items-start gap-4 mb-8 md:mb-0">
                <div className="flex-shrink-0">
                    <Image src="/Logo.svg" alt="Logo" width={130} height={27} priority />
                </div>
                <p className="text-[#333333] text-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faFacebook} className="text-[#666666] text-[24px] cursor-pointer hover:text-[#023047]" />
                    <FontAwesomeIcon icon={faTwitter} className="text-[#666666] text-[24px] cursor-pointer hover:text-[#023047]" />
                    <FontAwesomeIcon icon={faInstagram} className="text-[#666666] text-[24px] cursor-pointer hover:text-[#023047]" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-[#023047] text-[24px] cursor-pointer hover:text-[#666666]" />
                </div>
                <p className="underline text-[#666666] text-[15px] cursor-pointer hover:text-[#023047]">
                    Check our shop in Google Map
                </p>
            </div>

            <div className="w-full h-auto flex justify-start items-center md:w-[70%] flex flex-wrap">
                {FutterInfo.map((card, index) => (
                    <div key={index} className="w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-4 mb-6 md:mb-0">
                        <h2 className="text-[#000000] text-[18px] font-medium">{card.title}</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-[#000000] text-[15px]">{card.text1}</p>
                            <p className="text-[#000000] text-[15px]">{card.text2}</p>
                            <p className="text-[#000000] text-[15px]">{card.text3}</p>
                            <p className="text-[#000000] text-[15px]">{card.text4}</p>
                            <p className="text-[#000000] text-[15px]">{card.text5}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
