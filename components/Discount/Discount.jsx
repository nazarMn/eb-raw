import { useState } from 'react';

export default function Discount() {

    const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('FREE10DELIVERY');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center"
      style={{ backgroundImage: "url('/DiscountBg.png')" }}
    >
      <div className="absolute w-full h-full bg-[#023047] opacity-95" />
      <div className="absolute w-full h-full flex justify-center items-center px-4">
        <div className="w-full max-w-[970px] flex flex-wrap justify-center sm:justify-evenly items-center gap-4 sm:gap-2 bg-[#E5F6FF] px-4 py-6 sm:py-4">
          <h2 className="text-[#333333] text-[18px] sm:text-[24px] font-medium text-center sm:text-left">
            Super discount for your first purchase
          </h2>

          <button
      onClick={handleCopy}
      className={`w-full cursor-pointer sm:w-[170px] h-[50px] border border-dashed border-[#023047] text-[#023047] font-medium text-[16px] text-center transition-all duration-300 ease-in-out ${
        copied ? 'bg-[#023047] text-white scale-105' : ''
      }`}
    >
      {copied ? 'Сopied!' : 'FREE10DELIVERY'}
    </button>

          <h2 className="text-[#333333] text-[16px] sm:text-[18px] font-medium text-center sm:text-left">
            Use discount code in checkout!
          </h2>
        </div>
      </div>
    </div>
  );
}
