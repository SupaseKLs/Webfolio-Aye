import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import OurWork from '../assets/OurWork.svg';
import BoxReveal from "@/components/BoxReveal/BoxReveal";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { src: '/p4.png',width: '350', height: '200', category: 'Graphic', linksrc: '/FOUNDATION', header: 'Love Foundation', content: 'Graphic Design' },
  { src: '/p5.png',width: '350', height: '200', category: 'Character', linksrc: '/Beary', header: 'Beary - Art Toy', content: 'Character Design' },
  { src: '/p6.png',width: '350', height: '200', category: 'UX/UI', linksrc: '/1D', header: '1D - Event gathering application', content: 'UX/UI Design' },
  { src: '/p7.png',width: '350', height: '200', category: 'UX/UI', linksrc: '/StudentCard', header: 'Digital Student Card', content: 'UX/UI Design' },
  { src: '/p8.png',width: '350', height: '200', category: 'UX/UI', linksrc: '/Time_Attendance', header: 'Dashboard & time table', content: 'UX/UI Design' },
  { src: '/p9.png',width: '350', height: '200', category: 'UX/UI', linksrc: '/Okontek', header: 'Layout Design', content: 'UI Design' },
  { src: '/p10.png',width: '350', height: '200', category: 'Character', linksrc: '/Chujai', header: 'Chujai (ชูใจ)', content: 'Character Design' },
  { src: '/p2.png',width: '350', height: '200', category: 'Graphic', linksrc: '/Encyclopedia', header: 'Thai Encyclopedia for youth Project', content: 'Graphic Design' },
  { src: '/p3.png',width: '350', height: '200', category: 'Graphic', linksrc: '/Rebrand_Siam_Wellness', header: 'Rebrand - Siam Wellness', content: 'Graphic Design' },
  { src: '/p1.png',width: '350', height: '200', category: 'Product', linksrc: '/BOZ', header: 'BOZ - Tape Dispensor', content: 'Graphic Design' },
  { src: '/p12.png',width: '350', height: '200', category: 'Product', linksrc: '/Alamus', header: 'Alamus - Product from mussel [Thesis]', content: 'Product Design' },
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
    <div className='w-full h-fit'>
      <div className="flex justify-around items-center overflow-hidden">
        <BoxReveal boxColor={"#AFACAA"} duration={1}>
          <Image className="bg-gray-color w-screen top-0 h-full" src={OurWork} alt="Our Work" />
        </BoxReveal>
      </div>
      <div className="w-full max-w-7xl m-auto sm:px-8 sm:py-20 py-32 px-16">
        <div className="relative overflow-hidden">
          <ul
            className="mt-6 flex cursor-grab overflow-x-auto whitespace-nowrap scrollbar-hidden"
          >
            {['All', 'UX/UI', 'Graphic', 'Character', 'Product'].map(category => (
              <li key={category} className="inline-block">
                <p
                  className={`mx-2 px-4 py-2 rounded-full cursor-pointer ${activeFilter === category ? 'bg-primary-color text-content-color' : 'border-2 text-primary-color border-primary-color'}`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-flex items-end flex-wrap pb-20 pt-4">
          {filteredCards.map((card, index) => (
            <div key={index} className="relative mt-10 xl:m-auto mx-3 overflow-hidden rounded-md pb-2 group">
              <Link className='z-30' href={card.linksrc}>
                <Image
                  className="transition-transform duration-300 transform group-hover:scale-110"
                  src={card.src}
                  width={card.width}
                  height={card.height}
                  alt={`Image ${index + 1}`}
                />
              <div className="z-0 absolute bottom-0 left-0 right-0 h-full group-hover:bg-black/10 text-white transform transition-opacity duration-300 animate-fadeUp">
                <div className='transform transition-opacity duration-300 group-hover:opacity-100 opacity-0 pt-32 pl-3'>
                  <h1 className='font-bold'>{card.header}</h1>
                  <p className='pt-1'>{card.content}</p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
