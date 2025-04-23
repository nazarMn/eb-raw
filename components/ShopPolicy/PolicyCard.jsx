import Image from "next/image";

const PolicyCard = ({ icon, title, subtitle, borderColor = "#CCCCCC", bgColor = "#E5E5E5" }) => (
  <div className={`w-[270px] h-[60px] flex items-center border-[1px]`} style={{ borderColor }}>
    <div className="w-[25%] h-full flex justify-center items-center">
      <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center" style={{ backgroundColor: bgColor }}>
        <Image src={icon} alt={title} width={22} height={22} />
      </div>
    </div>
    <div className="w-[75%] h-full flex flex-col justify-start items-start">
      <h2 className='text-[24px] font-semibold text-[#333333]'>{title}</h2>
      <p className="text-[16px] font-regular text-[#666666]">{subtitle}</p>
    </div>
  </div>
);

export default PolicyCard;
