import React from 'react'
import { Jost } from "next/font/google";
import Header from '@/components/componentsCheckout/Header/Header';
import Text from '@/components/componentsCheckout/Text/Text';


const jost = Jost({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
export default function Checkout() {
    
  return (
    <div className={jost.className}>
      <Header />
      <Text />
      
    </div>
  )
}
