import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CartModal({ isOpen, onRequestClose }) {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const items = [1, 2, 3]; 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg w-full max-w-2xl mx-auto mt-20 p-4 sm:p-6 shadow-xl outline-none"
      overlayClassName="fixed inset-0 bg-opacity-10 flex justify-center items-start z-50 px-2 shadow-xl"
    >
    
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Shopping Bag</h2>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={onRequestClose}
          className="w-6 h-6 cursor-pointer text-gray-600 hover:text-black hover:scale-105 hover:rotate-90 transition duration-300"
        />
      </div>

     
      <div className="max-h-[300px] overflow-y-auto space-y-4 pr-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-3 flex items-center gap-4 shadow-sm relative"
          >
           
            <button className="text-gray-400 hover:text-red-500 flex-shrink-0 cursor-pointer hover:scale-105 hover:rotate-90 transition duration-300">
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>

         
            <Image
              src="/Blog-img1.png"
              alt="Product"
              width={60}
              height={60}
              className="rounded object-cover"
            />

           
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-800 truncate">Product {item}</h3>
            
              <p className="text-xs sm:text-sm text-gray-500 sm:text-gray-600">White</p> 
            </div>

          
            <div className="flex items-center gap-2 ml-auto">
              
              <div className="flex items-center gap-2">
              <button className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer hover:bg-gray-300 hover:-rotate-12 transition duration-300 ease-in-out">−</button>

                <span className="text-sm">1</span>
                <button className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer hover:bg-gray-300 hover:rotate-12 transition duration-300 ease-in-out">+</button>

              </div>

         
              <p className="text-sm font-semibold text-gray-800 whitespace-nowrap ml-2">$499</p>
            </div>
          </div>
        ))}
      </div>

  
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-4">
        <p className="text-lg font-bold text-gray-900">Total: $1996</p>
        <button className="bg-black text-white w-full sm:w-auto px-6 py-2 rounded-lg hover:bg-gray-900 transition cursor-pointer hover:rotate-6">
          Checkout
        </button>
      </div>
    </Modal>
  );
}
