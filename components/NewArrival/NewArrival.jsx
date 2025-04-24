import React from 'react';
import ArrivalCard from './ArrivalCard';

export default function NewArrival() {
  return (
    <div className="w-full h-[650px] flex flex-wrap justify-evenly items-center">
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
