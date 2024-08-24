import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar/index'
import Img from './img/img1.png'
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';

const page = () => {

    return (
        <>
            <div className='relative h-full 3xl:h-screen pb-20'>
                <Image className='absolute top-0 right-0' src={PolygonBlur2} />
                <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
                <div className="max-w-7xl m-auto">
                    <div className='flex justify-center pt-10'>
                        <Navbar />
                    </div>
                </div>

                <div className='max-w-7xl m-auto mt-20 px-4'>
                    <div className="flex xl:flex-col items-center">
                        <div>
                            <Image className='xl:max-w-full max-w-fit' src={Img} />
                        </div>
                        <div className='pb-10 pl-5'>
                            <h1 className='sm:text-2xl text-primary-color text-5xl'>Rebrand - Siam Wellness </h1>
                            <h3 className='sm:text-xl sm:mt-2 text-3xl mt-6'>Graphic design</h3>
                            <p className='sm:text-sm sm:mt-2 mt-6'>Siam Wellness group is a hospitality commercial type specific on health spa. As company expanding the branch, they want to engage to all type of customers from high to low budget. This conclude the idea to recreate new logos and character branding. Logos represent hands that form around circle. Circle refer to all a(round) to represent this brand that they do everything on health spa and in the center will have SW which stand for Siam wellness brand. Overall aiming  for friendly feeling logos to attract more types of customers.
                            </p>
                            <div className='flex mt-6'>
                            <p className='sm:text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Graphic design</p>
                            <p className='sm:text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>Adobe illustrator</p>
                        </div>
                            <hr className='my-6'/>
                            <p className='text-primary-color'>Date | 3 week</p>
                            <p className='text-primary-color'>Participation | 100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page