import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar/index'
import Schooney from './img/Schooney.png';
import Schooney1 from './img/Schooney1.png';
import Schooney2 from './img/Schooney2.png';
import Schooney3 from './img/Schooney3.png';
import Schooney4 from './img/Schooney4.png';
import SchooneyPro1 from './img/SchooneyPro1.png';
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';

const page = () => {

    return (
        <>
            <div className='relative h-full pb-20 3xl:h-screen'>
                <Image className='absolute top-0 right-0' src={PolygonBlur2} />
                <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
                <div className="max-w-7xl m-auto">
                    <div className='flex justify-center pt-10'>
                        <Navbar />
                    </div>
                </div>

                <div className='max-w-7xl m-auto mt-20 px-4'>
                    <div className='xl:flex xl:flex-col xl:justify-center xl:items-center grid grid-cols-2'>
                        <div>
                            <div className='flex justify-center'>
                                <Image className='sm:w-80' src={SchooneyPro1} />
                            </div>
                            <div className='flex'>
                                <div className='rounded-xl p-4 bg-gray-200 border-gray-400 border-2'>
                                    <Image src={Schooney1} />
                                </div>
                                <div className='rounded-xl p-4 ml-2 bg-gray-100 border-gray-300 border-2'>
                                    <Image src={Schooney2} />
                                </div>
                                <div className='rounded-xl p-4 ml-2 bg-gray-100 border-gray-300 border-2'>
                                    <Image src={Schooney3} />
                                </div>
                                <div className='rounded-xl p-4 ml-2 bg-gray-100 border-gray-300 border-2'>
                                    <Image src={Schooney4} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center xl:mt-10 mx-4'>
                            <Image src={Schooney} />
                            <h1 className='pt-4 text-primary-color sm:text-3xl text-4xl'>Digital Student Card </h1>
                            <h3 className='pt-4 sm:text-2xl text-3xl'>Display on Mobile </h3>
                            <p className='pt-5'>Display on mobile in LINE Application : Line Liff for students who use<br/> Schooney for replacing physical student cards and this will completely solve<br/> the problem of forget student cards. There are 4 themes of the design which<br/> include : minimal/gradient/kid/geometry<br/>
                                Since that each school can custom their own cards, this will provide the limit<br/> decision to choose on design.</p>
                            <div className='pt-4 flex'>
                                <p className='px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>UX/UI design</p>
                                <p className='px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>figma</p>
                            </div>
                            <hr className='my-4' />
                            <p className='text-primary-color'>
                                Date | 8 May - 24 May
                            </p>
                            <p className='pt-4 text-primary-color'>
                                Participation | 100%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page