import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OurFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Expected JSON response but got something else');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = filter === "All"
    ? products
    : products.filter((product) => product.type === filter);

  const categories = ["All", "Hoodie", "Accessories", "Mens", "Womens", "Trendy", "T-shirt"];

  return (
    <div className='w-full h-auto gap-4 bg-[#F3F3F3] flex flex-col xl:h-[1466px]' id='shop'>
      <ToastContainer />

      <div className='w-full h-[20%] flex justify-center items-center gap-4 flex-col '>
        <div className='w-full h-[60%] flex flex-col justify-end items-center gap-2 text-center'>
          <h2 className='text-[#333] text-[30px] font-bold'>Our Featured Products</h2>
          <p className='text-[#666] text-[14px] font-regular'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <nav className="w-full h-[40%] flex items-end justify-evenly flex-wrap">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setFilter(item)}
              className={`w-[100px] h-[45px] text-[15px] font-semibold cursor-pointer ${
                filter === item
                  ? "bg-[#023047] text-white"
                  : "bg-[#F3F3F3] text-[#333] hover:text-white hover:bg-[#023047]"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="w-full h-[80%] flex justify-around items-start flex-wrap p-10 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center w-full text-[18px] text-[#666]">No products found for this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="w-[370px] h-[461px] bg-white flex flex-col shadow-md overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={370}
                height={700}
                className="w-full h-[75%] object-cover"
              />

              <div className="w-full h-[25%] flex justify-between items-start p-3">
                <div className="w-[65%] h-full flex flex-col justify-between">
                  <h2 className="text-black text-[18px] font-medium">{product.name}</h2>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="relative w-[130px] sm:w-[130px] h-[40px] sm:h-[50px] bg-white text-[#023047] border border-[#023047] font-semibold text-[14px] sm:text-[16px] cursor-pointer overflow-hidden group hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)]"
                  >
                    <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-[#fff]">
                      Add to cart
                    </span>
                    <span className="absolute top-0 left-0 w-full h-full bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 ease-out group-hover:opacity-100 opacity-0" />
                  </button>
                </div>

                <div className="w-[35%] flex flex-col items-end justify-between gap-5">
                  <div className="flex items-center gap-2">
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={product.rating}
                        precision={0.5}
                        readOnly
                        sx={{
                          color: '#023047',
                          fontSize: '15px',
                          '& .MuiRating-iconEmpty': {
                            color: '#cfd8dc',
                          },
                        }}
                      />
                    </Stack>
                    {product.ratingCount > 0 && <p className="hidden sm:block">({product.ratingCount}+)</p>}
                  </div>

                  <div className="flex items-center gap-2">
                    {product.previousPrice && (
                      <h2 className="text-gray-500 text-[16px] line-through hidden sm:block">${product.previousPrice}.00</h2>
                    )}
                    <h2 className="text-black text-[18px] font-medium">${product.price}.00</h2>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
