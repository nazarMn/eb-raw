import React from 'react'
import { Jost } from "next/font/google";


const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Admin() {
  return (
      <div className={jost.className}>
      
    </div>
  )
}
