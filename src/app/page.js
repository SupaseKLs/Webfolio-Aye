"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Navbar from "../components/Navbar/index";
import Mascot from "../assets/img/mascot.png";
import Portfolio from "../assets/Portfolio.svg";
import Line from "../assets/Line.svg";
import Line2 from "../assets/Line2.svg";
import PolygonBlur from "../assets/PolygonBlur.svg";
import PolygonBlur2 from "../assets/PolygonBlur2.svg";
import PolygonBlur3 from "../assets/PolygonBlur3.svg";
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
      <div className="bg-primary-color relative h-screen">
        <div className="z-40 w-full top-0 fixed flex justify-center pt-8">
          <Navbar />
        </div>
        <div
          className="relative h-full"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className="fixed bottom-0 h-full w-full">
            <div className="mt-44 h-full">
              <div className="relative max-w-7xl m-auto">
                <div className="sm:mt-40 xl-min:mt-12 flex max-w-5xl mt-20 m-auto h-full">
                  <div className="relative text-content-color">
                    <p className="xl:hidden absolute left-8 top-[-25px] xl-min:text-xl text-3xl">
                      2024
                    </p>
                    <Image
                      className="xl-min:max-h-80 xl:ml-40 xl:hidden relative"
                      src={Line}
                    />
                  </div>
                  <div className="text-content-color">
                    <Image
                      className="xl-min:pt-24 xl-min:max-w-96 sm:w-72 xl:w-96 pt-44 pl-8"
                      src={Portfolio}
                    />
                    <div className="sm:mt-0 flex flex-col mt-6">
                      <p className="sm:w-9 sm:h-9 sm:text-sm sm:ml-56 uppercase ml-80 w-12 h-12 flex justify-center items-center bg-content-color rounded-full text-primary-color">
                        Aye
                      </p>
                      <p className="sm:text-xl xl-min:text-xl pl-8 text-3xl">
                        Chanikarn Laobudsa
                      </p>
                    </div>
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

        <div className="relative flex justify-center items-center py-10 px-4">
          <Image className="absolute top-0 right-0" src={PolygonBlur2} />
          <Image className="absolute bottom-0 left-0" src={PolygonBlur3} />
          <div className="relative xl:flex-col md-min:flex-row 2xl:flex-row flex max-w-5xl m-auto">
            <Image className="xl:hidden" src={Line2} />
            <div className="pl-4">
              <div className="sm:w-[370px] w-[440px]">
                <TypingAnimation
                  className="absolute font-normal top-0 text-primary-color sm:text-3xl text-4xl"
                  text="Hello"
                />
                <p className="sm:text-sm indent-8 pt-16">
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
