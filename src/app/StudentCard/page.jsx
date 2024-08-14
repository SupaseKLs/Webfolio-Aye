import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import Schooney from './img/Schooney.png'
import P1 from './img/p1.png'
import P2 from './img/p2.png'
import P3 from './img/p3.png'
import P4 from './img/p4.png'
// import WebOkentek from './img/S2.mp4'
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';
const page = () => {
    return (
        <div className='relative h-full 3xl:h-screen'>
            <Image className='absolute top-0 right-0' src={PolygonBlur2} />
            <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-center pt-10'>
                    <Navbar />
                </div>

                <div className="xl:flex-col flex sm:p-5 xl:justify-center mt-20 pb-10">
                    <div className='flex flex-col xl:items-center'>
                        <div>
                            <video className='sm:w-96' width="760" height="240" muted autoPlay loop>
                                <source src="./img/green.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className='sm:w-full xl:w-8/12 pt-4 w-full flex justify-between'>
                            <Image className='sm:w-20' src={P1} />
                            <Image className='sm:w-20' src={P2} />
                            <Image className='sm:w-20' src={P3} />
                            <Image className='sm:w-20' src={P4} />
                        </div>
                    </div>

                    <div className='sm:px-1 sm:ml-0 xl:ml-40 ml-10 xl:mt-4'>
                        <div className='flex'>
                            <div>
                                {/* <Image src={WebOkentek} /> */}
                            </div>
                            <div>
                                <Image src={Schooney} />
                                <h1 className='sm:text-2xl text-primary-color text-5xl pt-4'>Digital Student Card </h1>
                                <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Display on Mobile </p>
                                <p className='pt-6'>
                                    Display on mobile in LINE Application : Line Liff for students who use<br /> Schooney for replacing physical student cards and this will completely solve<br /> the problem of forget student cards. There are 4 themes of the design which<br /> include : minimal/gradient/kid/geometry<br />
                                    Since that each school can custom their own cards, this will provide the limit<br /> decision to choose on design.
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

    )
}

export default page