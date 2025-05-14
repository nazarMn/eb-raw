import React, { useRef, useState } from 'react';
import Header from '@/components/componentsCheckout/Header/Header';
import Text from '@/components/componentsCheckout/Text/Text';
import Cart from '@/components/componentsCheckout/Cart/Cart';
import ContactDetailsForm from '@/components/componentsCheckout/ContactDetailsForm/ContactDetailsForm';
import ContactDeliveryForm from '@/components/componentsCheckout/ContactDeliveryForm/ContactDeliveryForm';
import PaymentModal from '@/components/Modal/PaymentModal/PaymentModal';
import { Jost } from "next/font/google";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Checkout() {
  const detailsFormRef = useRef();
  const deliveryFormRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);

 const handleMakeOrder = () => {
  const isDetailsValid = detailsFormRef.current?.validate?.();
  const isDeliveryValid = deliveryFormRef.current?.validate?.();

  if (!isDetailsValid || !isDeliveryValid) {
    toast.error('Please complete all required fields', {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }

  setIsModalOpen(true);
};


  return (
    <div className={jost.className + ' w-screen h-screen p-4 flex justify-center'}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="w-full h-full flex flex-col items-start">
        <Header />
        <Text />

        <div className="flex w-full justify-center gap-x-2 align-center flex-wrap gap-y-8 іtems-end mt-8 pl-18 pr-18">
          <ContactDetailsForm ref={detailsFormRef} />
          <ContactDeliveryForm ref={deliveryFormRef} />
          <Cart onMakeOrder={handleMakeOrder} />
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
