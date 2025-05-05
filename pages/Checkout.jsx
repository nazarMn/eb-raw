import React from 'react'
import { Jost } from "next/font/google";
import Header from '@/components/componentsCheckout/Header/Header';
import Text from '@/components/componentsCheckout/Text/Text';
import Cart from '@/components/componentsCheckout/Cart/Cart';
import ContactDetailsForm from '@/components/componentsCheckout/ContactDetailsForm/ContactDetailsForm';
import ContactDeliveryForm from '@/components/componentsCheckout/ContactDeliveryForm/ContactDeliveryForm';
import PaymentModal from '@/components/Modal/PaymentModal/PaymentModal';


const jost = Jost({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
  export default function Checkout() {
    return (
      <div className={jost.className + ' w-screen h-screen p-4 flex justify-center'}>
        <div className="w-full h-full flex flex-col items-start ">
          <Header />
          <Text />
          
          <div className="flex w-full justify-between іtems-end mt-8 pl-18 pr-18">
            <ContactDetailsForm />
            <ContactDeliveryForm />
            <Cart />
          </div>
        </div>

        <PaymentModal />
      </div>
    );
  }
  