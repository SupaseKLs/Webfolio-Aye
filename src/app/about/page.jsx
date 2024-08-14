'use client'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Toy from '@/assets/img/gifx1.gif';
import Navbar from "@/components/Navbar/index";
import Line2 from '@/assets/Line2.svg';
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';
const index = () => {
  return (
    <>
      {/* about */}
      <div className="relative top-0 xl:pt-8 sm:min-h-full flex flex-col h-screen justify-center items-center px-4">
        <div className="flex justify-center items-center pt-8">
          <Navbar />
        </div>
        <Image className="absolute top-0 right-0" src={PolygonBlur2} />
        <Image className="absolute bottom-0 left-0" src={PolygonBlur3} />
        <div className="xl:flex-col flex xl:items-center max-w-5xl m-auto">

          <Image className="xl:hidden pt-8" src={Line2} />
          <div className="pl-4">
            <div className="sm:w-[370px] w-[440px]">
              <h1 className="sm:text-xl text-primary-color text-2xl">Hello</h1>
              <p className="sm:text-sm indent-8 pt-4">
                I am Aye, graduate in product design program. Majority of my experience are include product design, graphic design and UXUI. All of the project are based on art and design knowledge with critical analysis on users, 5W1H, suitable function and design and more. UXUI and product design share some similarities which I can learn swiftly and efficiently. I am looking forward to work in UX/UI field  from now on. Most importantly I still willing to learn new technique and improve my skill.
              </p>
            </div>
            <div className="sm:pt-4 pt-10">
              <h1 className="sm:text-xl text-primary-color">Education</h1>
              <p className="sm:text-sm">Slipakorn University, Faculty of Decorative Arts, Product design</p>
            </div>
            <div className="sm:pt-4 pt-10">
              <h1 className="sm:text-xl text-primary-color">Experience</h1>
              <p className="sm:text-sm">Internship at Okontek from 17 April to 30 June 2023<br />
                Task : UX/UI Designer
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-8">
            <Image className="sm:w-full w-[850px]" src={Toy}></Image>
          </div>
        </div>
      </div>
    </>
  )
}

export default index