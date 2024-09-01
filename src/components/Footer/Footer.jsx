import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Line3 from '@/assets/Line3.svg';
import Share from '@/assets/share.svg';
import { useEffect } from "react";
import Lenis from 'lenis';

export default function Footer() {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div
            className='relative h-[450px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[450px] w-full'>
                <div className="relative bg-primary-color h-[450px]">
                    <div className="xl:max-w-2xl sm:max-w-md max-w-6xl m-auto">
                        <div className="absolute bottom-0 sm:p-10 sm:top-16 top-24">
                            <h1 className="sm:text-3xl text-7xl text-content-color">KEEP IN TOUCH</h1>
                            <div className="mt-2 grid sm:grid-cols-0 grid-cols-7 gap-4 sm:max-w-md xl:max-w-2xl max-w-6xl m-auto">
                                <div className="col-span-1 pt-4 pl-2 text-left text-content-color font-bold">SOCIALS</div>
                                <div className="col-span-1 pt-4 sm:pl-14 pl-2 text-left text-content-color font-bold">EMAIL</div>
                                <div className="col-span-1 p-2 text-center"></div>
                                <div className="col-span-4 p-2 text-center"></div>
                                <div className="col-span-1 pl-2 text-left"><Link href="https://www.linkedin.com/in/chanikarn-laobudsa-66319b227/" className="text-content-color underline">Linkedin</Link></div>
                                <div className="col-span-1 pl-2  sm:pl-14 text-left text-content-color underline">chanikarn.aye@gmail.com</div>
                                <div className="col-span-1 p-2 text-center"></div>
                                <div className="col-span-4 p-2 text-center"></div>
                                <div className="col-span-1 pl-2 text-left"><Link className="text-content-color underline" href="https://www.behance.net/chanikalaobuds">Behance</Link></div>
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

            </div>
        </div>
    )
}
