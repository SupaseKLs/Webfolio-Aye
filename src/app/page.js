"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Navbar from "../components/Navbar/index";
import Mascot from "../assets/img/mascot.png";
import Portfolio from "../assets/img/port2.png";
// import Line from "../assets/Line.svg";
import Line2 from "../assets/Line2.svg";
import PolygonBlur from "../assets/PolygonBlur.svg";
import PolygonBlur2 from "../assets/PolygonBlur2.svg";
import Toy from "../assets/img/gifx1.gif";
import Filter from "../components/Filter";
import ScrollDown from "../components/ScrollDown/index";
import Footer from "../components/Footer/Footer";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className="bg-primary-color h-screen">
        <div className="z-40 w-full top-0 fixed flex justify-center pt-2">
          <Navbar />
        </div>
        <div
          className="relative flex h-full"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className="fixed bottom-0 h-full w-full">
            <div className="3xl:mt-10 h-full">
              <div className="h-screen w-screen relative max-m-auto">
                <div className="flex 3xl:max-w-7xl max-w-5xl items-center justify-start m-auto h-full">
                  <div className="flex justify-center items-center">
                    <Image
                      className="3xl:max-w-full sm:pt-40 sm:max-w-80 max-w-96 xl:max-w-fit xl-min:w-[700px] pl-4"
                      src={Portfolio}
                    />
                  </div>
                </div>
              </div>
              <Image src={PolygonBlur} className="absolute bottom-0 left-0" />

              <Image
                className="sm:w-[250px] h-full w-fit absolute top-0 right-0 z-10"
                width={326}
                src={Mascot}
                alt="Mascot"
              />
              <ScrollDown />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-16 px-4">
          <Image className="absolute top-0 right-0" src={PolygonBlur2} />
          <div className="relative xl:flex-col md-min:flex-row 2xl:flex-row flex max-w-5xl m-auto">
            <Image className="xl:hidden mt-14" src={Line2} />
            <div className="pl-4">
              <div className="sm:w-[370px] w-[440px]">
                <TypingAnimation
                  className="absolute font-normal top-0 text-primary-color sm:text-3xl text-4xl"
                  text="Hello"
                />
                <p className="sm:text-sm indent-8 pt-24">
                  I am Aye, graduate in product design program. Majority of my
                  experience are include product design, graphic design and
                  UXUI. All of the project are based on art and design knowledge
                  with critical analysis on users, 5W1H, suitable function and
                  design and more. UXUI and product design share some
                  similarities which I can learn swiftly and efficiently. I am
                  looking forward to work in UX/UI field from now on. Most
                  importantly I still willing to learn new technique and improve
                  my skill.
                </p>
              </div>
              <div className="sm:pt-4 pt-10">
                <h1 className="sm:text-xl text-primary-color">Education</h1>
                <p className="sm:text-sm">
                  Slipakorn University, Faculty of Decorative Arts, Product
                  design
                </p>
              </div>
              <div className="sm:pt-4 pt-10">
                <h1 className="sm:text-xl text-primary-color">Experience</h1>
                <p className="sm:text-sm">
                  Internship at Okontek from 17 April to 30 June 2023
                  <br />
                  Task : UX/UI Designer
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center xl:py-10">
              <Image className="min-h-min w-[500px]" src={Toy}></Image>
            </div>
          </div>
        </div>
        <div>
        <Filter />
        </div>
        <Footer />
      </div>
    </>
  );
}
