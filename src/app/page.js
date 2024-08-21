'use client'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar/index";
import Mascot from '../assets/img/mascot.png';
import Portfolio from '../assets/Portfolio.svg';
import Line from '../assets/Line.svg';
import Line2 from '../assets/Line2.svg';
import Line3 from '../assets/Line3.svg';
import PolygonBlur from '../assets/PolygonBlur.svg';
import PolygonBlur2 from '../assets/PolygonBlur2.svg';
import PolygonBlur3 from '../assets/PolygonBlur3.svg';
import HalfCircle from '../assets/halfcircle.svg';
import Toy from '../assets/img/gifx1.gif';
import Share from '../assets/share.svg';
import Filter from '../components/Filter'
import ScrollDown from '../components/ScrollDown/index'

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
        </div>

        <div className="sm:mt-40 xl-min:mt-12 flex max-w-5xl mt-20 m-auto h-full">
          <div className="relative text-content-color">
            <p className="xl:hidden absolute left-8 top-[-25px] xl-min:text-xl text-3xl">2024</p>
            <Image className="xl-min:max-h-80 xl:ml-40 xl:hidden relative" src={Line} />
          </div>
          <div className="text-content-color">
            <Image className="xl:pt-72 xl-min:pt-24 xl-min:max-w-96 sm:w-72 xl:w-96 pt-44 pl-8" src={Portfolio} />
            <div className="sm:mt-0 flex flex-col mt-6">
              <p className="sm:w-9 sm:h-9 sm:text-sm sm:ml-56 uppercase ml-80 w-12 h-12 flex justify-center items-center bg-content-color rounded-full text-primary-color">Aye</p>
              <p className="sm:text-xl xl-min:text-xl pl-8 text-3xl">Chanikarn Laobudsa</p>
            </div>
          </div>
          <Image
            src={PolygonBlur} className="absolute bottom-0 left-0" />
        </div>

        <Image
          className="sm:w-[250px] h-screen w-fit absolute top-0 right-0 z-10"
          width={326}
          src={Mascot}
          alt="Mascot"
        />
        <ScrollDown />

      </div>

      {/* about */}
      <div className="relative xl:pt-8 sm:h-full flex h-full justify-center items-center px-4 py-20">
        <Image className="absolute top-0 right-0" src={PolygonBlur2} />
        {/* <Image className="absolute bottom-0 left-0" src={PolygonBlur3} /> */}
        <div className="xl:flex-col md-min:flex-row 2xl:flex-row flex xl:items-center max-w-5xl m-auto">

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
          <div className="flex justify-center items-center xl:py-10">
            <Image className="sm:w-full w-[850px]" src={Toy}></Image>
          </div>
        </div>
      </div>

      {/* Wprk */}
      <Filter />


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

