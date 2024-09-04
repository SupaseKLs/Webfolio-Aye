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
                    <div className='xl:w-fit m-auto px-2 w-s[705px] h[1990px] flex flex-col xl:items-center'>
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

                    <div className='w-10/12 xl:mx-auto mx-12'>
                        <div className='py-6'>
                            <h1 className='text-4xl text-primary-color'>LOVE FOUNDATION</h1>
                            <h3 className='py-4 text-2xl'>Graphic design</h3>
                            <p className='text-primary-color'>“Acknowledge the status of your own for other and your own safety”</p>
                        </div>
                        <div>
                            <p>This infographics will provide the information about HIV. This info will included history, symptoms and how to protect yourself from HIV.
                                Other information are included how you can coexistence with the person who infected with the HIV and how to have a safe sexual intercourse with right protection that will prevent future contagious disease.
                                Hopefully, this infographic will reduce the negative perspective of HIV and be aware about the sexual protection and understand about the sexual hygiene. This will change the perspective of how you live with HIV infectors.</p>
                        </div>
                        <div className='py-4'>
                            <p className='text-gray-color'>· General Based Information Graphic  and Timeline for Facebook posts.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Mood & Tone</p>
                            <p>- Color theme of LGBT+ which represent the diversity<br />
                                - All logo and graphic are drew by myself by Adobe Illustrator<br />
                                - Rearrange all the story and timeline to clarify the info<br />
                                - Recreate logo</p>
                        </div>
                        <div className='flex flex-wrap gap-2 mt-6'>
                            <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Graphic design</p>
                            <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Adobe Illustrator</p>
                            <p className='text-xs px-8 py-1 border-2 border-gray-color text-gray-color rounded-full'>Sustainable product </p>
                        </div>
                        <hr className='my-6' />
                        <p className='text-primary-color'>Participation | 100%</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page