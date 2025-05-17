import React, { useState, useEffect, detailsFormRef } from 'react';
import Modal from 'react-modal';
import { FaCcVisa, FaGooglePay, FaApple, FaMoneyBillWave } from 'react-icons/fa';
import { toast } from 'react-toastify';

Modal.setAppElement('body');

export default function PaymentModal({ isOpen, onClose, detailsFormRef, deliveryFormRef }) {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    const getValidPrice = (price) => {
      return isNaN(price) || price === undefined || price === null ? 0 : parseFloat(price);
    };

    const subtotal = storedCart.reduce(
      (total, product) => total + getValidPrice(product.price) * product.quantity,
      0
    );

    const storedPromo = JSON.parse(localStorage.getItem('promo')) || null;
    const discount = storedPromo?.isApplied ? subtotal * 0.1 : 0;

    const total = (subtotal - discount).toFixed(2);

    setTotalPrice(total);
  }, []);

  const handleSelectMethod = (m) => {
    setMethod(m);
    setStep(2);
  };

  const goBack = () => {
    setStep(1);
    setMethod('');
  };
  
const handlePrintContactData = async () => {
  let contactData = null;
  let deliveryData = null;
  let cartItems = [];

  if (detailsFormRef.current && typeof detailsFormRef.current.getData === 'function') {
    contactData = detailsFormRef.current.getData();
  } else {
    console.log('detailsFormRef.current або getData() відсутні');
  }

  if (deliveryFormRef.current && typeof deliveryFormRef.current.getData === 'function') {
    deliveryData = deliveryFormRef.current.getData();
  } else {
    console.log('deliveryFormRef.current або getData() відсутні');
  }
  console.log('Delivery Data:', deliveryData);
  

  try {
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cartItems.length) {
      console.log('Кошик порожній');
      return; 
    }
  } catch (error) {
    console.log('Помилка при зчитуванні кошика з localStorage:', error);
    return;
  }

  const order = {
    name: contactData?.name || '',
    surname: contactData?.surname || '',
    email: contactData?.email || '',
    phoneNumber: contactData?.phone || '',
    city: deliveryData?.city || '',
    postOfficeBranch: deliveryData?.selectedWarehouse || '',
    totalPrice: totalPrice || 0,
    orderItems: cartItems.map(item => ({
      productName: item.name,
      quantity: item.quantity,
    })),
    paymentMethod: contactData?.paymentMethod || 'cash_on_delivery',
    isPaid: false,
  };

  console.log('Prepared Order for sending:', order);

  toast.success('The order is feasible ',{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })

  try {
    const response = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });

    if (!response.ok) {
      throw new Error(`Помилка сервера: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Order saved successfully:', result);
  } catch (error) {
    console.error('Error saving order:', error);
  }
};



  
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 relative animate-fadeIn border border-[#000000]"
      overlayClassName="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl cursor-pointer"
      >
        &times;
      </button>

      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Choose a payment method
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => handleSelectMethod('card')}
              className="flex items-center justify-between w-full px-4 py-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <span className="text-gray-700 font-medium">Bank card</span>
              <FaCcVisa size={28} className="text-blue-600" />
            </button>

            <button
              onClick={() => handleSelectMethod('google')}
              className="flex items-center justify-between w-full px-4 py-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <span className="text-gray-700 font-medium">Google Pay</span>
              <FaGooglePay size={28} className="text-black" />
            </button>

            <button
              onClick={() => handleSelectMethod('apple')}
              className="flex items-center justify-between w-full px-4 py-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <span className="text-gray-700 font-medium">Apple Pay</span>
              <FaApple size={28} className="text-gray-800" />
            </button>

            <button
              onClick={() => handleSelectMethod('cod')}
              className="flex items-center justify-between w-full px-4 py-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <span className="text-gray-700 font-medium">Pay upon delivery</span>
              <FaMoneyBillWave size={28} className="text-green-600" />
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <button
            onClick={goBack}
            className="text-sm text-blue-600 hover:underline mb-4 inline-block cursor-pointer"
          >
            ← Back
          </button>
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Payment: {method === 'card'
              ? 'By card'
              : method === 'google'
              ? 'Google Pay'
              : method === 'apple'
              ? 'Apple Pay'
              : 'Upon delivery'}
          </h2>

          <div className="text-center mb-4">
            <p className="text-gray-600">
              Total amount: <strong>${totalPrice}</strong>
            </p>
          </div>

          {method === 'card' && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name on the card"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Card number"
                className="w-full px-4 py-2 border rounded-md"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition cursor-pointer"
              >
                Pay ${totalPrice}
              </button>
            </form>
          )}

          {(method === 'google' || method === 'apple') && (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Click the button below to confirm via {method === 'google' ? 'Google Pay' : 'Apple Pay'}.
              </p>
              <button
                className="w-full flex items-center justify-center bg-black text-white py-2 rounded-md font-medium hover:opacity-90 transition cursor-pointer"
              >
                {method === 'google' ? <FaGooglePay size={34} className="mx-auto" /> : <FaApple size={24} className="mx-auto" />}
              </button>
            </div>
          )}

          {method === 'cod' && (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                You chose to pay upon delivery. Please prepare <strong>${totalPrice}</strong> in cash or card when your order arrives.
              </p>
              <button
                onClick={handlePrintContactData}
                className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          )}
        </>
      )}
    </Modal>
  );
}