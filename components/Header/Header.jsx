import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {

  const[numberProduct, setNumberProduct] = useState('');
  const [cartCount, setCartCount] = useState(0);



  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };
  
    updateCartCount();
  
    window.addEventListener('cartUpdated', updateCartCount);
  
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);
  




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setNumberProduct( `Search in ${data.length} Products...`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(numberProduct);


  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="w-full ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 md:px-10 lg:px-[135px] py-4 ">
        
      
        <div className="flex-shrink-0 pr-4">
          <Image src="/Logo.svg" alt="Logo" width={130} height={27.36} priority />
        </div>

       
        <form
          onSubmit={handleSearch}
          className="relative w-full max-w-[670px] h-[45px] md:h-[50px] flex-shrink mt-2 md:mt-0"
        >
          <input
            type="text"
            placeholder = {numberProduct}
            className="w-full h-full pl-4 pr-[110px] border border-[#023047] text-[#666] text-sm rounded-md outline-none"
          />

          <div className="absolute right-[100px] top-1/2 transform -translate-y-1/2">
            <select className="text-[#999] text-sm bg-transparent outline-none">
              <option value="">All</option>
            </select>
          </div>

          <button
            type="submit"
            className="absolute right-0 top-0 w-[100px] h-full bg-[#023047] text-white text-sm rounded-r-md hover:bg-[#022048] active:bg-[#021838]"
          >
            Search
          </button>
        </form>

  
        <div className="flex items-center gap-5 pl-1 sm:pl-4 mt-2 md:mt-0">
        {["Catalog", "Love", "Profile"].map((icon, i) => (
  <div key={i} className="relative">
    <Image
      src={`/${icon}.svg`}
      alt={icon}
      width={26}
      height={25}
      className="cursor-pointer"
      priority
    />
{icon === "Catalog" && cartCount > 0 && (
  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center cursor-pointer">
    {cartCount}
  </span>
)}


  </div>
))}

        </div>
      </div>
    </header>
  );
}
