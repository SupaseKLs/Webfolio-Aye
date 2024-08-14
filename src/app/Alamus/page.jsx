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

                <div className='max-w-7xl m-auto mt-20 px-4'>
                    <div className="flex xl:flex-col xl:items-center">
                        <div>
                            <Image src={Alamus} />
                        </div>
                        <div className='flex flex-col xl:items-center pb-10 pl-10'>
                            <h1 className='sm:text-2xl text-primary-color text-5xl xl:pt-12'>Alamus - All in a mussel</h1>
                            <h3 className='sm:text-xl sm:mt-2 text-3xl mt-6'>Product design & Thesis</h3>
                            <p className='sm:text-sm sm:mt-2 mt-6 xl:pt-8'>In Phra Samut Chedi district of Samut Prakan, Thailand, in this the area there<br /> are many mussel landfill that create pollution, for example, rotten smell,<br /> porous soil. As a local, this project considered as design solution and made<br /> from 100% sustainable materials. This project concept came from mussel shell<br /> (oval shape) and develop to other form and pattern. Color of the products<br /> came from mussel and other natural pigment colors. Overall this project aim<br /> to eliminate mussel waste and sustainable products. Products are household<br /> and decorative product, to make sure that all product are easy to use and<br /> everyone can use.
                            </p>
                            <div className='flex mt-6 flex-col'>
                                <div className='flex flex-wrap gap-3'>
                                    <p className='sm:text-[10px] px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Product design</p>
                                    <p className='sm:text-[10px] px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>Rhinoceros 3D</p>
                                    <p className='sm:text-[10px] px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>Adobe Illustrator</p>
                                    <p className='sm:text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Sustainable product </p>
                                </div>
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