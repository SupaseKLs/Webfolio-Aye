import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import Book from './img/Book.png'
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';
const page = () => {
    return (
        <div className='relative h-screen'>
            <Image className='absolute top-0 right-0' src={PolygonBlur2} />
            <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-center pt-10'>
                    <Navbar />
                </div>

                <div className="xl:flex-col flex justify-center mt-20 pb-10">
                    <div className='flex justify-center'>
                        {/* <Image src={} /> */}
                    </div>

                    <div className="xl:flex-wrap-reverse flex items-center p-4 justify-center">
                        <div className='sm:px-1 xl:mt-4'>
                            <h1 className='sm:text-2xl text-primary-color text-5xl pt-4'>Beary - Art Toy</h1>
                            <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Character design</p>
                            <div className='flex flex-wrap gap-2 mt-6'>
                                <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Character design</p>
                                <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Blender</p>
                                <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Adobe Photoshop</p>
                                <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Adobe Illustrator</p>
                            </div>
                            <hr className='my-6' />
                            <p className='text-primary-color'>Participation | 100%</p>
                        </div>
                        <div>
                            <Image src={Book} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page