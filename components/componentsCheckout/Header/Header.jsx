import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <header className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 md:px-10 lg:px-[135px] py-4 border-b border-[#E5E5E5]">
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleGoBack}
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            aria-label="Go Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <Image src="/Logo.svg" alt="Logo" width={130} height={27.36} priority />
        </div>

        <div className="flex items-center gap-5 mt-2 md:mt-0">
          {["Profile"].map((icon, i) => (
            <div key={i} className="relative">
              <Image
                src={`/${icon}.svg`}
                alt={icon}
                width={26}
                height={25}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
