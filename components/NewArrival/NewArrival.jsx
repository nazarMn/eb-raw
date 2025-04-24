import React from 'react';
import ArrivalCard from './ArrivalCard';

export default function NewArrival() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center md:justify-evenly items-center gap-4 py-4 xl:h-[650px]">
      <ArrivalCard
        backgroundImage="/NewArrival-Img1.png"
        tag="Top Collection"
        title="SHOP WOMANS"
      />
      <ArrivalCard
        backgroundImage="/NewArrival-Img2.png"
        tag="New Collection"
        title="SUMMER FASHION"
      />
    </div>
  );
}
