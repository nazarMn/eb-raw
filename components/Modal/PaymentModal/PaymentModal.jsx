import React from 'react'
import Modal from 'react-modal';

export default function PaymentModal() {
  return (
     <Modal
          isOpen={true}

          className="bg-white rounded-lg w-full max-w-2xl mx-auto mt-20 p-4 sm:p-6 shadow-xl outline-none"
          overlayClassName="fixed inset-0 bg-opacity-10 flex justify-center items-start z-50 px-2 shadow-xl"
        >

        </Modal>
  )
}
