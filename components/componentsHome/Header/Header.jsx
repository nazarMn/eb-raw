import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import CartModal from '@/components/Modal/CartModal/CartModal';
import { toast } from 'react-toastify';

export default function Header() {
  const [numberProduct, setNumberProduct] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const inputRef = useRef(null); 

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  const handleSearch = async (term) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products?name=${term}`);
      const data = await response.json();
      setProducts(data); 
      setNumberProduct(`Found ${data.length} Products`);
      setIsDropdownOpen(true); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      setIsDropdownOpen(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      handleSearch(searchTerm);
    }, 500); 

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        inputRef.current && !inputRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); 
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
        setNumberProduct(`Search in ${data.length} Products...`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingProductIndex = existingCart.findIndex(item => item.id === product._id);
    
    if (existingProductIndex >= 0) {
      const updatedCart = existingCart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const productData = {
        id: product._id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        rating: product.rating,
        quantity: 1 
      };
      const updatedCart = [...existingCart, productData];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  
    window.dispatchEvent(new Event("cartUpdated"));
  
    toast.success('🛒 Product added to cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev); 
    handleSearch(searchTerm); 
  };

  return (
    <header className="w-full ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 md:px-10 lg:px-[135px] py-4 ">
        <div className="flex-shrink-0 pr-4">
          <Image src="/Logo.svg" alt="Logo" width={130} height={27.36} priority />
        </div>

        <div className="relative w-full max-w-[670px] h-[45px] md:h-[50px] flex-shrink mt-2 md:mt-0">
          <input
            ref={inputRef} 
            type="text"
            placeholder={numberProduct}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-full pl-4 pr-[110px] border border-[#023047] text-[#666] text-sm rounded-md outline-none"
          />

          <div className="absolute right-[100px] top-1/2 transform -translate-y-1/2">
            <select className="text-[#999] text-sm bg-transparent outline-none">
              <option value="">All</option>
            </select>
          </div>

          <button
            onClick={handleButtonClick}
            className="absolute right-0 top-0 w-[100px] h-full bg-[#023047] text-white text-sm rounded-r-md hover:bg-[#022048] active:bg-[#021838]"
          >
            Search
          </button>

          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute w-full mt-2 bg-white border border-[#023047] max-h-40 overflow-y-auto z-10 rounded-md shadow-lg">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded-md mr-2"
                      />
                      <span className="text-sm">{product.name}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product); 
                      }}
                      title="Add to cart"
                    >
                      <Image
                        src="/Catalog.svg" 
                        alt="Add to cart"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </button>
                  </div>
                ))
              ) : (
                <p className="p-2 text-sm text-gray-500">No products found</p>
              )}
            </div>
          )}
        </div>

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
                onClick={icon === "Catalog" ? openCartModal : undefined}
              />
              {icon === "Catalog" && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center cursor-pointer">
                  {cartCount}
                </span>
              )}
            </div>
          ))}
          <CartModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} />
        </div>
      </div>
    </header>
  );
}
