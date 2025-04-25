import React from 'react'
import Image from 'next/image'

export default function Blog() {

    const cardsData = [
        {
          category: 'Fashion',
          date: 'DESIGN JULY 11, 2021',
          title: '2021’S Biggest Sneaker Is Getting Us So Pumped For Summer',
          image: '/Blog-img1.png',
        },
        {
          category: 'Style',
          date: 'DESIGN JULY 11, 2021',
          title: '2021’S Biggest Sneaker Is Getting Us So Pumped For Summer',
          image: '/Blog-img2.png',
        },
        {
          category: 'Fashion',
          date: 'DESIGN JULY 11, 2021',
          title: '2021’S Biggest Sneaker Is Getting Us So Pumped For Summer',
          image: '/Blog-img3.png',
        },
      ];
      

  return (
    <div className="w-full h-[782px] bg-[#F3F3F3] flex flex-col">

        <div className="w-full h-[25%] flex justify-end items-center text-center flex-col gap-4">

            <h2 className="text-[30px] font-medium text-[#333333]">From the blog</h2>
            <p className="text-[15px] font-regular text-[#333333] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by injected humour</p>

        </div>

        <div className="w-full h-[75%] flex justify-around items-center">
  {cardsData.map((card, index) => (
    <div key={index} className="w-[350px] h-[450px] flex flex-col bg-[#F0F0F0]">
      <div className="relative w-full h-[75%]">
        <Image
          src={card.image}
          alt={card.title}
          width={370}
          height={700}
          className="w-full h-full object-cover"
        />
        <h2 className="absolute top-0 left-0 p-2 text-white text-[15px] font-medium">
          {card.category}
        </h2>
      </div>

      <div className="w-full h-[25%] flex justify-between items-start flex-col p-3">
        <h2 className="text-[#333333] text-[12px] font-medium">{card.date}</h2>
        <h2 className="text-[#333333] text-[15px] font-medium">{card.title}</h2>
      </div>
    </div>
  ))}
</div>

      
    </div>
  )
}
