'use client'
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import AOS from 'aos';
import Navbar from "@/components/Navbar/index";
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import OurWork from '@/assets/OurWork.svg';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { src: '/p4.png', category: 'Graphic', linksrc: '/FOUNDATION' },
  { src: '/p5.png', category: 'Character', linksrc: '/Beary' },
  { src: '/p6.png', category: 'UX/UI', linksrc: '/1D' },
  { src: '/p7.png', category: 'UX/UI', linksrc: '/StudentCard' },
  { src: '/p8.png', category: 'UX/UI', linksrc: '/Time_Attendance' },
  { src: '/p9.png', category: 'UX/UI', linksrc: '/Okontek' },
  { src: '/p10.png', category: 'Character', linksrc: '/Chujai' },
  { src: '/p2.png', category: 'Graphic', linksrc: '/Encyclopedia' },
  { src: '/p3.png', category: 'Graphic', linksrc: '/Rebrand_Siam_Wellness' },
  { src: '/p1.png', category: 'Product', linksrc: '/BOZ' },
  { src: '/p12.png', category: 'Product', linksrc: '/Alamus' },
];

const OurWorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    AOS.init();

    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        }
      );
    });
  }, []);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const filteredCards = activeFilter === 'All'
    ? cards
    : cards.filter(card => card.category === activeFilter);

  return (
    <div className="relative">
          <div className="flex justify-center pt-8">
            {/* Uncomment the Navbar if needed */}
            <Navbar />
          </div>
          <div className='w-full h-full'>
      <div className="flex justify-around items-center">
        <div className='bg-[#AFACAA] xl:absolute top-0 sm:h-fit w-screen xl:h-28 xl-min:h-44'>
      <Image className=" top-0 w-full h-full" src={OurWork} alt="Our Work" />

        </div>
        
      </div>
      <div className="w-full max-w-7xl mt-16 m-auto sm:px-8 px-16">
        <ul className="overflow-x-auto mt-6 flex"> 
          {['All', 'UX/UI', 'Graphic', 'Character', 'Product'].map(category => (
            <li key={category}>
              <p
                className={`mx-2 px-4 py-2 rounded-full cursor-pointer ${activeFilter === category ? 'bg-primary-color text-content-color' : 'border-2 text-primary-color border-primary-color'}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center flex-wrap pb-20">
          {filteredCards.map((card, index) => (
            <div key={index} className="mx-auto mt-10 relative animate-on-scroll">
              <div className="overflow-hidden rounded-md">
                <Link href={card.linksrc}>
                    <Image
                      className="transition-transform duration-300 transform hover:scale-110"
                      src={card.src}
                      width={350}
                      height={200}
                      alt={`Image ${index + 1}`}
                    />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

          </div>
    
  );
};

export default OurWorkPage;
