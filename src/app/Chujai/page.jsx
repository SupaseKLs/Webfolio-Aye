import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import Mascot from './svg/Mascot.svg'
import Schooney from './img/Schooney.png'
import Mascot1 from './svg/mascot1.svg'
import Mascot2 from './svg/mascot2.svg'
import Mascot3 from './svg/mascot3.svg'
import Mascot4 from './svg/mascot4.svg'
import Mascot5 from './svg/mascot5.svg'
import Mascot6 from './svg/mascot6.svg'
import Mascot7 from './svg/mascot7.svg'
import Arrow1 from './svg/arrow1.svg'
import Arrow2 from './svg/arrow2.svg'
import Arrow3 from './svg/arrow3.svg'
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

                <div className="xl:flex-col flex justify-center mt-20 pb-10">
                    <div className='flex justify-center'>
                        <Image src={Mascot} />
                    </div>

                    <div className="flex items-center p-4 justify-center">
                        <div className='sm:px-1 xl:mt-4'>
                            <Image src={Schooney} />
                            <h1 className='sm:text-2xl text-primary-color text-5xl pt-4'>Chujai (ชูใจ)</h1>
                            <p className='sm:text-xl sm:mt-2 text-3xl mt-6'>Mascot Schooney</p>
                            <p className='sm:text-sm sm:mt-2 mt-6'>Chujai (Gender : Non-Binary) Representative of Schooney Mascot, which<br /> contain 3 hearts of ideas which include: Education, Way of living and <br /> Growth/Development. These 3 hearts of the ideas will define the word school<br /> that it should be.  Chujai will represent as software and hardware of<br /> Schooney that will assist and reduce working tasks of the teachers and<br /> school which give similarities sense to student that teachers trust</p>
                            <div className='flex mt-6'>
                                <p className='text-xs px-8 py-1 border-2 border-primary-color text-primary-color rounded-full'>Graphic design</p>
                                <p className='text-xs px-8 py-1 ml-4 border-2 border-gray-color text-gray-color rounded-full'>Adobe illustrator</p>
                            </div>
                            <hr className='my-6' />
                            <p className='text-primary-color'>Date | 3 weeks</p>
                            <p className='text-primary-color'>Participation | 100%</p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col xl:mx-8 pb-40'>
                    <div className="flex justify-center items-center xl:flex-col">
                        <div className='flex'>
                            <Image className='sm:w-36 sm:h-36' src={Mascot1} />
                            <Image className='sm:w-48 sm:h-48 xl:ml-2 ml-8' src={Arrow1} />
                        </div>
                        <div className='flex 3xl:ml-8'>
                            <Image className='sm:w-36 sm:h-36' src={Mascot2} />
                            <Image className='sm:w-48 sm:h-48 xl:ml-2 ml-8' src={Arrow2} />
                        </div>
                    </div>
                    <div className='xl:flex-row flex xl:mt-10 mt-20 justify-center'>
                        <Image className='sm:w-36 sm:h-36' src={Mascot3} />
                        <Image className='sm:w-48 sm:h-48 ml-8' src={Arrow3} />
                    </div>
                    <div className='flex xl:flex-col xl:items-center justify-around'>
                        <Image className='mt-40' src={Mascot5} />
                        <Image className='mt-40' src={Mascot6} />
                        <Image className='mt-40' src={Mascot7} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page