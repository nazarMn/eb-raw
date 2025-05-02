import React from 'react';

const ArrivalCard = ({ backgroundImage, tag, title }) => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center w-[90%] sm:w-[570px] h-[300px] sm:h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="w-full sm:w-[65%] h-0 sm:h-full" />
      <div className="w-full sm:w-[35%] h-full flex flex-col justify-center items-center gap-2 sm:gap-4 bg-white/70 sm:bg-transparent">
        <p className="text-[#023047] font-semibold text-[12px] sm:text-[14px]">{tag}</p>
        <h2 className="font-semibold text-[16px] sm:text-[18px] text-[#000000] text-center">{title}</h2>
        <button className="relative w-[110px] sm:w-[130px] h-[40px] sm:h-[50px] bg-[#023047] text-white font-semibold text-[14px] sm:text-[16px] cursor-pointer overflow-hidden group hover:shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)]">
          <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-[#023047]">
            Shop Now
          </span>
          <span className="absolute top-0 left-0 w-full h-full bg-white scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0" />
        </button>
      </div>
    </div>
  );
};

export default ArrivalCard;
