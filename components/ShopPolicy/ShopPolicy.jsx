import PolicyCard from "./PolicyCard";

export default function ShopPolicy() {
  return (
    <div className='w-full h-[350px] flex flex-wrap justify-around items-center bg-[#F3F3F3] sm:h-[260px]'>
      <PolicyCard 
        icon="/FreeShipping.svg"
        title="Free Shipping"
        subtitle="Orders over $200"
      />
      <PolicyCard 
        icon="/SecurePayment.svg"
        title="Secure Payment"
        subtitle="100% secure payment"
      />
      <PolicyCard 
        icon="/GiftCertificae.svg"
        title="Gift Certificae"
        subtitle="Buy now $500 to $1000"
        borderColor="#023047"
        bgColor="#023047"
      />
      <PolicyCard 
        icon="/247Support.svg"
        title="24/7 Support"
        subtitle="Ready support"
      />
    </div>
  );
}
