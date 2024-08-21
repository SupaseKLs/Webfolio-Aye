import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import img1 from './img/Bode.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';
const page = () => {
    return (
        <div className='relative xl:h-full h-screen'>
            <Image className='absolute top-0 right-0' src={PolygonBlur2} />
            <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-center pt-10'>
                    <Navbar />
                </div>

                <div className="xl:flex-col flex items-center mt-14 justify-center sm:p-5">
                    <div className='flex flex-col mt-6 sm:items-center'>
                        <div>
                            <Image src={img1} />
                        </div>
                        <div className='flex mt-4'>
                            <div>
                                <Image src={img2} />
                            </div>
                            <div>
                                <Image className='sm:ml-0 ml-4' src={img3} />
                            </div>
                        </div>
                    </div>

                    <div className='sm:px-1 sm:ml-0 ml-10 xl:mt-12'>
                        <h1 className='sm:text-2xl text-primary-color text-5xl'>The Thai Encyclopedia for <br />youth Project</h1>
                        <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Graphic design</p>
                        <p className='sm:text-sm sm:mt-2 mt-6'>Design every thing from scratch which based on the keywords of <br /> the Thai junior encyclopedia volume 3 - 5. Each books have it own <br /> keywords (side of the book) as a reference for design.</p>
                        <div className='flex mt-6'>
                            <p className='sm:text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Graphic design</p>
                            <p className='sm:text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>Adobe illustrator</p>
                        </div>
                        <hr className='my-6' />
                        <p className='text-primary-color'>Date | 1 week</p>
                        <p className='text-primary-color'>Participation | 100%</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page