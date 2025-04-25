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
  <div key={index} className="group w-[350px] h-[450px] flex flex-col bg-[#F0F0F0] overflow-hidden">

  <div className="relative w-full h-[75%] group-hover:h-full transition-all duration-500">
    <Image
      src={card.image}
      alt={card.title}
      width={370}
      height={700}
      className="w-full h-full object-cover transition-all duration-500"
    />
    
    <h2 className="absolute top-0 left-0 p-2 text-white text-[15px] font-medium z-10 group-hover:opacity-0 transition-all duration-500">
      {card.category}
    </h2>

 
  <div className="absolute flex justify-center items-start flex-col top-[5%] left-[5%] w-[90%] h-[90%] bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 pl-5 gap-2">

  <h2 className="absolute top-0 left-0 p-2 text-white text-[15px] font-medium z-10 opacity-100">
    {card.category}
  </h2>

  
  <h2 className="text-white text-[12px] font-medium opacity-100 ">{card.date}</h2>
  <h2 className="text-white text-[15px] font-medium opacity-100">{card.title}</h2>

  <button className="w-[130px] h-[50px] bg-white text-[#023047] font-semibold text-[15px] cursor-pointer overflow-hidden group hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)] opacity-100">View More</button>

</div>

  </div>

  <div className="w-full h-[25%] flex justify-between items-start flex-col p-3 group-hover:opacity-0 group-hover:h-0 transition-all duration-500">
    <h2 className="text-[#333333] text-[12px] font-medium">{card.date}</h2>
    <h2 className="text-[#333333] text-[15px] font-medium">{card.title}</h2>
  </div>

</div>

 
  ))}
</div>

      
    </div>
  )
}
