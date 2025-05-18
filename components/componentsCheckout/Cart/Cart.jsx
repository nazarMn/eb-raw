import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Cart({ onMakeOrder }) {
  const [products, setProducts] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  
useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  setProducts(storedCart);

  const storedPromo = JSON.parse(localStorage.getItem('promo')) || null;
  if (storedPromo?.isApplied && storedPromo?.code === 'FREE10DELIVERY') {
    setIsPromoApplied(true);
    setPromoCode('FREE10DELIVERY');
  }

  const handleCartUpdate = () => {
    const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(updatedCart);
  };

  window.addEventListener('cartUpdated', handleCartUpdate);
  return () => {
    window.removeEventListener('cartUpdated', handleCartUpdate);
  };
}, []);


  const handleRemoveFromCart = (productId) => {
    const updatedCart = products.filter(product => product.id !== productId);
    setProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuantityChange = (productId, action) => {
    const updatedCart = products.map(product => {
      if (product.id === productId) {
        const newQuantity = action === 'increase' ? product.quantity + 1 : product.quantity - 1;
        return { ...product, quantity: Math.max(newQuantity, 1) };
      }
      return product;
    });

    setProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const getValidPrice = (price) => {
    return isNaN(price) || price === undefined || price === null ? 0 : parseFloat(price);
  };

  const subtotal = products.reduce(
    (total, product) => total + getValidPrice(product.price) * product.quantity, 0
  );

  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const totalPrice = (subtotal - discount).toFixed(2);

const applyPromo = () => {
  if (promoCode === 'FREE10DELIVERY' && !isPromoApplied) {
    setIsPromoApplied(true);
    localStorage.setItem('promo', JSON.stringify({ isApplied: true, code: promoCode }));
  }
};



  return (
    <div className="bg-white rounded-2xl w-full max-w-md p-4 sm:p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Shopping Bag</h2>
      </div>

      <div
        className={`space-y-4 ${products.length > 2 ? 'max-h-40 overflow-y-auto pr-1' : ''}`}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-3 flex items-center gap-4 shadow-sm relative"
            >
              <button
                className="text-gray-400 hover:text-red-500 flex-shrink-0 cursor-pointer hover:scale-105 hover:rotate-90 transition duration-300"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
              </button>

              <Image
                src={product.imageUrl}
                alt="Product"
                width={60}
                height={60}
                className="rounded object-cover"
              />

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 sm:text-gray-600">
                  Color: {product.color || 'White'}
                </p>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer hover:bg-gray-300 hover:-rotate-12 transition duration-300"
                    onClick={() => handleQuantityChange(product.id, 'decrease')}
                  >
                    −
                  </button>
                  <span className="text-sm">{product.quantity}</span>
                  <button
                    className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer hover:bg-gray-300 hover:rotate-12 transition duration-300"
                    onClick={() => handleQuantityChange(product.id, 'increase')}
                  >
                    +
                  </button>
                </div>

                <p className="text-sm font-semibold text-gray-800 whitespace-nowrap ml-2">
                  ${(getValidPrice(product.price) * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-4 mt-6 border-t pt-4">
          <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          disabled={isPromoApplied}
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <button
          onClick={applyPromo}
          disabled={isPromoApplied}
          className={`px-4 py-2 text-sm ${
            isPromoApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white rounded-md transition`}
        >
          {isPromoApplied ? 'Applied' : 'Apply'}
        </button>
      </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {isPromoApplied && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Promo discount:</span>
              <span>- ${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
            <p>Total:</p>
            <p>${totalPrice}</p>
          </div>

      <button
        className="w-full px-4 py-3 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 font-semibold transition"
        onClick={onMakeOrder}
      >
        Make an order
      </button>
        </div>
      )}

    </div>
  );
}
