'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar/index";
import Filter from "@/components/Filter";
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';
const index = () => {
  return (
    <>
      {/* about */}
      <div className="relative top-0 xl:pt-8 flex flex-col h-full justify-center items-center px-4">
        <div className="flex justify-center items-center pt-8">
          <Navbar />
        </div>
        <Image className="absolute top-0 right-0" src={PolygonBlur2} />
        <Image className="absolute bottom-0 left-0" src={PolygonBlur3} />
        
        <Filter className="absolute w-screen"  />
      </div>
    </>
  )
}

export default index