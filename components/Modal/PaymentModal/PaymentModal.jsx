import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaCcVisa, FaGooglePay, FaApple } from 'react-icons/fa';

Modal.setAppElement('body');

export default function UniversalPaymentModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('');

  const handleSelectMethod = (m) => {
    setMethod(m);
    setStep(2);
  };

  const goBack = () => {
    setStep(1);
    setMethod('');
  };

  return (
    <Modal
      isOpen={true}
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
            Payment: {method === 'card' ? 'By card' : method === 'google' ? 'Google Pay' : 'Apple Pay'}
          </h2>

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
                Pay $299
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
        </>
      )}
    </Modal>
  );
}
