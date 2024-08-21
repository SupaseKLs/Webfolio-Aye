import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';
import Cd from './img/cd.png';
import Cd_1 from './img/ar_cd.png';
import Cd_2 from './img/cdmodel.png';
const page = () => {
    return (
        <div className='relative h-full'>
            <Image className='absolute top-0 right-0' src={PolygonBlur2} />
            <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
                <div className='flex justify-center pt-10'>
                    <Navbar />
                </div>

                <div className="max-w-7xl m-auto xl:flex-col flex justify-center mt-20 pb-10">
                    <div>
                        <Image className='w-[1200px]' src={Cd} />
                    </div>

                    <div className="xl:flex-wrap-reverse flex items-center p-4 justify-center">
                        <div className='sm:px-1 xl:mt-4'>
                            <h1 className='sm:text-2xl text-primary-color text-5xl pt-4'>Social post</h1>
                            <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Graphic design</p>
                            <p className='flex-wrap'>Create 2 types of social post. Social poster for describe short features of Empeo application, and second poster is carousel poster, which will show the continuous graphic and some additional features.</p>
                            <div className='flex flex-wrap gap-2 mt-6'>
                                <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Graphic design</p>
                                <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Adobe Illustrator</p>
                            </div>
                            <hr className='my-6' />
                            <p className='text-primary-color'>Date | 30 July - 31 July</p>
                            <p className='text-primary-color'>Participation | 100%</p>
                        </div>
                    </div>
                </div>
                        <div className='xl:py-12 xl:flex-col flex justify-center items-center'>
                            <Image className='w-[619px] h-[427px]' src={Cd_2} />
                            <Image className="w-[540px] h-[382px] xl:my-10" src={Cd_1} />
                        </div>
            </div>

    )
}

export default page