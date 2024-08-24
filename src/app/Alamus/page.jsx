import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar/index'
import Alamus from './img/Alamus.png'
import Product from './svg/product.svg'
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';

const page = () => {
    return (
        <>
            <div className='relative h-full 3xl:h-screen pb-20'>
                <Image className='absolute top-0 right-0' src={PolygonBlur2} />
                <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
                <Image className='absolute bottom-0 w-full' src={Product} />
                <div className="max-w-7xl m-auto">
                    <div className='flex justify-center pt-10'>
                        <Navbar />
                    </div>
                </div>

                <div className='max-w-7xl m-auto  xl:h-full h-screen mt-20 px-4'>
                    <div className="flex xl:flex-col xl:items-center">
                        <div>
                            <Image className='max-w-fit max-h-[700px]' src={Alamus} />
                        </div>
                        <div className='px-10'>
                            <div className='py-10'>
                                <h1 className='text-primary-color text-3xl'>Alamus - All in a mussel</h1>
                                <h3 className='text-xl pt-4'>Product design & Thesis</h3>
                            </div>
                            <p>In Phra Samut Chedi district of Samut Prakan, Thailand, in this the area there are many mussel landfill that create pollution, for example, rotten smell, porous soil. As a local, this project considered as design solution and made from 100% sustainable materials. This project concept came from mussel shell (oval shape) and develop to other form and pattern. Color of the products came from mussel and other natural pigment colors. Overall this project aim to eliminate mussel waste and sustainable products. Products are household and decorative product, to make sure that all product are easy to use and everyone can use. </p>
                            <div className='flex flex-wrap gap-2 mt-6'>
                            <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Product design</p>
                            <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Rhinoceros 3D</p>
                            <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Adobe Illustrator</p>
                            <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Sustainable product </p>
                        </div>
                        <hr className='my-6' />
                        <p className='text-primary-color'>Participation | 100%</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default page