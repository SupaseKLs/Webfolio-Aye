'use client'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/index";
import Mascot from '@/assets/img/mascot.png';
import Portfolio from '@/assets/Portfolio.svg';
import Line from '@/assets/Line.svg';
import Line3 from '@/assets/Line3.svg';
import PolygonBlur from '@/assets/PolygonBlur.svg';
import HalfCircle from '@/assets/halfcircle.svg';
import Share from '@/assets/share.svg';
import ScrollDown from '@/components/ScrollDown/index'

export default function Home() {
  // const cards = [
  //   "/p1.png",
  //   "/p2.png",
  //   "/p3.png",
  //   "/p4.png",
  //   "/p5.png",
  //   "/p6.png",
  //   "/p7.png",
  //   "/p8.png",
  //   "/p9.png",
  //   "/p10.png",
  //   "/p12.png",
  //   "/skill.gif",
  // ];
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div className="bg-primary-color h-screen">
        <div className="relative max-w-7xl m-auto">
          <div className="flex justify-center pt-8">
            {/* Uncomment the Navbar if needed */}
            <Navbar />
          </div>
          <div className="sm:mt-40 xl-min:mt-12 flex max-w-5xl mt-20 m-auto h-screen">
          <div className="relative text-content-color">
            <p className="xl:hidden absolute left-8 top-[-25px] xl-min:text-xl text-3xl">2024</p>
            <Image className="xl-min:max-h-80 xl:ml-40 xl:hidden relative" src={Line} />
          </div>
          <div className="text-content-color">
            <Image className="xl-min:pt-24 xl-min:max-w-96 sm:w-72 xl:w-96 pt-44 pl-8" src={Portfolio} />
            <div className="sm:mt-0 flex flex-col mt-6">
              <p className="sm:w-9 sm:h-9 sm:text-sm sm:ml-56 uppercase ml-80 w-12 h-12 flex justify-center items-center bg-content-color rounded-full text-primary-color">Aye</p>
              <p className="sm:text-xl xl-min:text-xl pl-8 text-3xl">Chanikarn Laobudsa</p>
            </div>
          </div>
          <Image
            src={PolygonBlur} className="absolute bottom-0 left-0" />
        </div>
        </div>

       

        <Image
          className="sm:w-[250px] h-full h-fit w-fit absolute top-0 right-0 z-10"
          width={326}
          src={Mascot}
          alt="Mascot"
        />
        <ScrollDown />
      </div>

<div className='h-10 bg-white'>

</div>
      {/* Contact */}
      <div className="relative">
        <Image src={HalfCircle} className="w-full h-full" />
        <div className="bg-primary-color h-[450px]">

        </div>
        <div className="xl:max-w-2xl sm:max-w-md max-w-6xl m-auto">
          <div className="absolute sm:p-10 sm:top-16 top-24">
            <h1 className="sm:text-3xl text-7xl text-content-color">KEEP IN TOUCH</h1>


            <div className="mt-10 grid sm:grid-cols-0 grid-cols-7 gap-4 sm:max-w-md xl:max-w-2xl max-w-6xl m-auto">
              <div className="col-span-1 pt-4 pl-2 text-left text-content-color font-bold">SOCIALS</div>
              <div className="col-span-1 pt-4 sm:pl-14 pl-2 text-left text-content-color font-bold">EMAIL</div>
              <div className="col-span-1 p-2 text-center"></div>
              <div className="col-span-4 p-2 text-center"></div>
              <div className="col-span-1 pl-2 text-left"><Link href="" className="text-content-color underline">Linkedin</Link></div>
              <div className="col-span-1 pl-2  sm:pl-14 text-left text-content-color underline">chanikarn.aye@gmail.com</div>
              <div className="col-span-1 p-2 text-center"></div>
              <div className="col-span-4 p-2 text-center"></div>
              <div className="col-span-1 pl-2 text-left"><Link className="text-content-color underline" href="">Behance</Link></div>
              <div className="col-span-1 p-2 text-center"></div>
              <div className="col-span-1 p-2 text-center"></div>
              <div className="col-span-4 pt-5 text-right text-content-color text-3xl">@2024</div>
              <div className="col-span-1 p-2 text-center"></div>
              <div className="col-span-1 p-2 text-center"></div>
              <div className="col-span-1 p-2 text-center"></div>
              <div className="col-span-4 flex justify-end">
                <div className="flex bg-content-color rounded-full border-[#AFACAA] border-4 px-6 py-2">
                  <Link className="uppercase text-[#AFACAA] text-sm underline" href="">Resume</Link>
                  <Image src={Share} className="ml-4" />
                </div>
              </div>

            </div>

          </div>
          <div className="absolute bottom-10 xl:max-w-2xl sm:max-w-md max-w-6xl m-auto">
            <Image src={Line3} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

