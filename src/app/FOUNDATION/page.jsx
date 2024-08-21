import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
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
                        <div className='flex mt-4'>
                            <div>
                                <Image src={img4} />
                            </div>
                            <div>
                                <Image className='sm:ml-0 ml-4' src={img5} />
                            </div>
                        </div>
                    </div>

                    <div className='sm:px-1 xl:m-auto xl:px-4 ml-10 xl:mt-4'>
                        <h1 className='sm:text-2xl text-primary-color text-5xl'>LOVE FOUNDATION</h1>
                        <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Graphic design</p>
                        <p className='text-primary-color mt-6'>“Acknowledge the status of your own for other and your own safety”</p>
                        <p className='sm:text-sm sm:mt-2 mt-6'>This infographics will provide the information about HIV. This info will<br /> included history, symptoms and how to protect yourself from HIV.<br />
                            Other information are included how you can coexistence with the person<br /> who infected with the HIV and how to have a safe sexual intercourse with<br /> right protection that will prevent future contagious disease.<br />
                            Hopefully, this infographic will reduce the negative perspective of HIV and<br /> be aware about the sexual protection and understand about the sexual <br />hygiene. This will change the perspective of how you live with HIV infectors.</p>
                        <p className='my-6'>· General Based Information Graphic  and Timeline for Facebook posts.</p>
                        <h1 className='font-bold'>Mood & Tone</h1>
                        <p className='mt-2'>
                            - Color theme of LGBT+ which represent the diversity
                        </p>
                        <p className='mt-2'>
                            - All logo and graphic are drew by myself by Adobe Illustrator
                        </p>
                        <p className='mt-2'>
                            - Rearrange all the story and timeline to clarify the info
                        </p>
                        <p className='mt-2'>
                            - Recreate logo
                        </p>
                        <div className='flex mt-6'>
                            <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Graphic design</p>
                            <p className='text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>Adobe illustrator</p>
                            <p className='text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>Adobe Photoshop</p>
                        </div>
                        <hr className='my-6' />
                        <p className='text-primary-color'>Date | 3 weeks</p>
                        <p className='text-primary-color'>Participation | 100%</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page