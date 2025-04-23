import Image from "next/image";

const PolicyCard = ({ icon, title, subtitle, borderColor = "#CCCCCC", bgColor = "#E5E5E5" }) => (
  <div className={`w-full sm:w-[270px] h-[68px] flex items-center border-[1px] p-3 gap-3`} style={{ borderColor }}>
    <div className="min-w-[45px] min-h-[45px] rounded-full flex justify-center items-center" style={{ backgroundColor: bgColor }}>
      <Image src={icon} alt={title} width={22} height={22} />
    </div>
    <div className="flex flex-col justify-start">
      <h2 className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#333333]'>{title}</h2>
      <p className="text-[14px] sm:text-[16px] text-[#666666]">{subtitle}</p>
    </div>
  </div>
);

export default PolicyCard;
