'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/index';
import Schooney from './img/Schooney.png';
import P1 from './img/p1.png';
import P2 from './img/p2.png';
import P3 from './img/p3.png';
import P4 from './img/p4.png';
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import Thumnail from '@/components/Thumnail/page'
const videos = [
    { src: './img/green.mp4', thumbnail: P1 },
    { src: './img/purple.mp4', thumbnail: P2 },
    { src: './img/yellow.mp4', thumbnail: P3 },
    { src: './img/blue.mp4', thumbnail: P4 }
];

const Page = () => {
    const [videoSrc, setVideoSrc] = useState(videos[0].src);

    videos.forEach(video => {
        console.log(`Type of src for ${video.src}:`, typeof video.src);
    });
    return (
        <div className='relative h-full 3xl:h-screen'>
            <Image className='absolute top-0 right-0' src={PolygonBlur2} alt="Polygon Blur 2" />
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-center pt-10'>
                    <Navbar />
                </div>

                <div className="xl:flex-col flex sm:p-5 xl:justify-center mt-20 pb-10">
                <Thumnail />

                    <div className='sm:px-1 sm:ml-0 xl:m-auto xl:px-4 ml-10 xl:mt-4'>
                        <div className='flex'>
                            <div>
                                {/* Optional extra content */}
                            </div>
                            <div className='xl:pt-10'>
                                <Image src={Schooney} alt="Schooney Logo" />
                                <h1 className='sm:text-2xl text-primary-color text-5xl pt-4'>Digital Student Card</h1>
                                <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Display on Mobile</p>
                                <p className='pt-6'>
                                    Display on mobile in LINE Application: Line Liff for students who use<br /> Schooney for replacing physical student cards and this will completely solve<br /> the problem of forgetting student cards. There are 4 themes of the design which<br /> include: minimal/gradient/kid/geometry<br />
                                    Since each school can customize their own cards, this will provide the limit<br /> decision to choose on design.
                                </p>
                                <div className='flex mt-6'>
                                    <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>UX/UI design</p>
                                    <p className='text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>figma</p>
                                </div>
                                <hr className='my-6' />
                                <p className='text-primary-color'>Date | 8 May - 24 May</p>
                                <p className='text-primary-color'>Participation | 100%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
