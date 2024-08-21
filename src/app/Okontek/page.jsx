import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import Okontek from './img/Okontek.png'
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

                    <div className='sm:px-1 sm:ml-0 xl:m-auto xl:px-4 ml-10 xl:mt-4'>
                        <div className='xl:flex-col flex'>

                            <video className='sm:w-96' width="760" height="240" muted autoPlay loop>
                                <source src="./img/Comp1_6.mp4" type="video/mp4" />
                            </video>



                            <div className='xl:py-20'>
                                <Image src={Okontek} />
                                <h1 className='sm:text-2xl text-primary-color pt-4 text-5xl'>Layout design</h1>
                                <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Okontek website & mobile </p>
                                <p className='pt-4'>Okontek company have requested for layout and information adjustment for<br />  both website andmobile. I adjust the design, color scheme, information and<br />  graphic. <span className='text-orange-color'>More Detail...</span></p>

                                <div className='flex mt-6'>
                                    <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>UX/UI design</p>
                                    <p className='text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>figma</p>
                                </div>
                                <hr className='my-6' />
                                <p className='text-primary-color'>Date | 20 April - 5 May</p>
                                <p className='text-primary-color'>Participation | 50%</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default page