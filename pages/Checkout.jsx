import React from 'react'
import { Jost } from "next/font/google";

export default function Checkout() {
    const jost = Jost({
      subsets: ["latin"],
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    });
    
  return (
    <div className={jost.className}>
      
    </div>
  )
}
