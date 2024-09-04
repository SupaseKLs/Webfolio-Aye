'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Image from 'next/image';
import styles from '../Navbar/styles.module.css';
import Behance from '@/assets/Behance.svg';
import Linkedin from '@/assets/Linkedin.svg';
import Google from '@/assets/Google.svg';
import Share from '@/assets/share.svg';

const Index = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        gsap.from('.navbar', {
            duration: 1.5,
            y: 50,
            opacity: 1,
            delay: 0.5,
            stagger: 0.2,
            ease: 'power4.out'
        });
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            gsap.to('.menu-items', {
                x: 0,
                duration: 0.5,
                ease: 'power4.out'
            });
        } else {
            gsap.to('.menu-items', {
                x: '-100%',
                duration: 0.5,
                ease: 'power4.in'
            });
        }
    }, [isMenuOpen]);

    const navItems = [
        { name: "HOME", link: "/" },
        { name: "PROJECT", link: "/project" },
        { name: "ABOUT ME", link: "/about" },
        { name: "CONTACT", link: "/contact" },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_menu}>
                    <div className="xl-min:hidden">
                        <button
                            id="menu-toggle"
                            className={`fixed top-10 left-2 ml-2 z-50 rounded-full shadow-xl w-16 h-16 flex justify-center items-center ${isMenuOpen ? 'bg-[#FFF7F6]' : 'bg-[#189AAA] opacity-90'}`}
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4581 12.5104L22.9525 2.7327C23.3492 2.31896 23.3492 1.6487 22.9525 1.23496C22.5629 0.813827 21.9194 0.801179 21.5148 1.2067L12.0203 10.9844L2.64799 1.2067C2.45584 0.994971 2.18848 0.875 1.90878 0.875C1.62908 0.875 1.36172 0.994971 1.16957 1.2067C0.817876 1.60644 0.817876 2.21993 1.16957 2.61966L10.5419 12.3832L1.0475 22.1468C0.650833 22.5605 0.650833 23.2308 1.0475 23.6445C1.23634 23.846 1.49606 23.9583 1.76636 23.9554C2.04188 23.9787 2.31502 23.8872 2.52592 23.7011L12.0203 13.9234L21.5148 23.8141C21.7036 24.0156 21.9633 24.1279 22.2336 24.1249C22.5036 24.1263 22.7628 24.0142 22.9525 23.8141C23.3492 23.4004 23.3492 22.7301 22.9525 22.3164L13.4581 12.5104Z" fill="#189AAA" />
                                </svg>
                            ) : (
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6.38298" cy="6.38298" r="6.38298" fill="#FFF7F6" />
                                    <circle cx="23.6174" cy="6.38298" r="6.38298" fill="#FFF7F6" />
                                    <circle cx="6.38298" cy="23.6171" r="6.38298" fill="#FFF7F6" />
                                    <circle cx="23.6174" cy="23.6171" r="6.38298" fill="#FF4A00" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <ul className='xl:hidden z-50 flex justify-center items-center shadow-lg bg-nav-color opacity-80 rounded-full w-[730px] h-12 uppercase'>
                        <li><Link scroll={false} className='hover:text-primary-color transition-transform duration-300  text-nav-font px-20' href="/">Home</Link></li>
                        <li><Link scroll={false} className='hover:text-primary-color transition-transform duration-300  text-nav-font pr-20' href="/project">Projects</Link></li>
                        <li><Link scroll={false} className='hover:text-primary-color transition-transform duration-300  text-nav-font pr-20' href="/about">About me</Link></li>
                        <li><Link scroll={false} className='hover:text-primary-color transition-transform duration-300  text-nav-font pr-20' href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <ul className={`menu-items text-[#FFF7F6] fixed top-0 z-30 pt-44 w-full min-h-dvh bg-[#189AAA] ${isMenuOpen ? '' : 'hidden'}`}>
                {navItems.map((item, index) => (
                    <li key={index} className="text-2xl w-9/12 m-auto flex py-4 border-b-2 items-center">
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </li>

                ))}
                <div className='w-9/12 m-auto'>
                    <p className='font-bold pt-20 uppercase'>Socials</p>
                    <div className='flex py-10 justify-around'>
                        <Link href="https://www.behance.net/chanikalaobuds"><Image src={Behance} /></Link>
                        <Link href="https://www.linkedin.com/in/chanikarn-laobudsa-66319b227/"><Image src={Linkedin} /></Link>
                        <Image src={Google} />
                    </div>
                    <div className='flex justify-center mt-12'>
                        <div className="flex w-fit bg-content-color rounded-full border-[#AFACAA] border-4 px-12 py-2">
                            <Link className="uppercase text-[#AFACAA] text-xl underline" href="">Resume</Link>
                            <Image src={Share} className="w-6 ml-4" />
                        </div>
                    </div>

                </div>
            </ul>
        </nav>
    );
};

export default Index;
