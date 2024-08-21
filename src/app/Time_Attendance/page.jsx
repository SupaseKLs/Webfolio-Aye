import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import Schooney from './img/Schooney.png'
import P1 from './img/p1.png'
import P2 from './img/p2.png'
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';
const page = () => {
    return (
        <div className='relative h-full'>
            <Image className='absolute top-0 right-0' src={PolygonBlur2} />
            <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-center pt-10'>
                    <Navbar />
                </div>

                <div className="xl:flex-col flex sm:p-5 xl:justify-center mt-20 pb-10">
                    <div className='flex flex-col xl:items-center'>

                    </div>

                    <div className='sm:px-1 sm:ml-0 xl:m-auto xl:px-4 ml-10 xl:mt-4'>
                        <div className='flex xl:flex-col-reverse justify-center'>
                            <div className='py-20'>
                                <div>
                                    <Image src={Schooney} />
                                    <h1 className='sm:text-2xl pt-4 text-primary-color text-5xl'>UX/UI Time Attendance</h1>
                                    <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Display on website</p>
                                    <p className='pt-4'>Design UI of time registration for Schooney  </p>
                                    <ul>
                                        <li>Dashboard</li>
                                        <li>Clock in/out</li>
                                        <li>Holiday and planner</li>
                                        <li>Time adding period</li>
                                    </ul>

                                    <div className='flex mt-6'>
                                        <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>UX/UI design</p>
                                        <p className='text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>figma</p>
                                    </div>
                                    <hr className='my-6' />
                                    <p className='text-primary-color'>Date | 8 May - 24 May</p>
                                    <p className='text-primary-color'>Participation | 100%</p>
                                </div>
                                <div>
                                    <Image className='pt-10' src={P1} />
                                </div>
                            </div>
                            <div>
                                <video className='sm:w-96' width="760" height="240" muted autoPlay loop>
                                    <source src="./img/Comp1_6_2.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default page