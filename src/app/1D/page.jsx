import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/index'
import bg_telephone from './img/telephone.png'
import name_telephone from './img/namephone.png'
import Banner from './img/Banner.png'
import Persona from './img/Persona.png'
import Empathy from './img/Empathy.png'
import HumanVector from './img/HumanVector.png'
import Architecture from './img/Architecture.png'
import UserFlow from './img/UserFlow.png'
import SketchWireFrame from './img/SketchWireFrame.png'
import WireFrame from './img/WireFrame.png'
import Logo from './svg/Logo.svg'
import Palette from './svg/Palette.svg'
import Counter from './svg/counter.svg'
import categories from './svg/categories.svg';
import UI from './svg/UI.svg';
import PolygonBlur2 from '@/assets/PolygonBlur2.svg';
import PolygonBlur3 from '@/assets/PolygonBlur3.svg';

const page = () => {

    return (
        <div className='relative h-full bg-[#FFF7F6]'>
            <Image className='absolute top-0 right-0' src={PolygonBlur2} />
            <Image className='absolute bottom-0 left-0' src={PolygonBlur3} />
            <div className='max-w-7xl m-auto'>
                <div className='flex justify-center pt-10'>
                    <Navbar />
                </div>

                <div className="xl:flex-col flex sm:p-5 xl-min:justify-center xl:justify-center mt-20 pb-10">
                    <div className='xl-min:flex xl-min:items-center xl:flex xl:flex-col xl:items-center'>
                        <Image className='w-fit xl:mb-10 max-h-60' src={name_telephone} />
                        <Image className='w-fit h-full' src={bg_telephone} />

                    </div>

                </div>

            </div>
            <div>
                <Image src={Banner} className='w-screen' />
            </div>
            <div className='xl-min:max-w-5xl max-w-7xl m-auto'>
                <div className='xl:px-4 xl-min:m-auto'>
                    <h1 className='text-primary-color text-3xl py-6'>Project Overview</h1>
                    <p className='text-primary-color'>University project: <span className='text-black'> 1D Application : My first ever project on UX/UI</span></p>
                    <p className='text-primary-color'>Proposition: <span className='text-black'>Application for students In university, thinking of something that is not about education. Something apart from<br />learning is entertainment and relaxation.</span></p>
                    <p className='text-primary-color'>Date | 8 weeks</p>
                    <p className='text-primary-color'>Participation: work with: Mrs. Anchisa Amornthanapat</p>
                    <p className='pt-10 pb-20'>Any events that host in the university each month will be advertised by the host themself or PR and then spread the word<br /> through the community. Sometimes the event may already started and it is become to late to join or participate due to only few<br /> advertisement. So I proposed 1D application to keep on track on each events through smartphones.</p>
                </div>
                <div className='sm:px-4 xl:px-4'>
                    <h2 className='text-primary-color'>Follow the universities events through: Poll from interview 54 people </h2>
                    <Image src={Counter} className='my-12' />
                    <div>
                        <p>I made an interview for correcting the information and make it swift for whoever got interviewed. For the question part, we<br /> asked where the universities students got the info of the events. In summary most of the students got the information from<br /> having conversation or pass along the info from conversation.</p>
                        <p className='pt-8'>From the summary that got, I thinking of second interview which ask the info about how the university provide/spread and<br /> differentiation of the info. I made an interview with 2<br /> people, host of the events and the participant. This will conclude into 2 personas.</p>
                    </div>
                </div>
                <div>
                    <Image src={Persona} className='w-screen' />
                </div>
            </div>

            <div className='bg-custom-gradient py-16 text-white'>
                <div className='max-w-7xl m-auto'>
                    <h1 className='text-center text-3xl font-bold text-white pb-10'>User requirement</h1>
                    <div className='xl:flex-col flex justify-center'>
                        <div className='xl:m-auto pl-12'>
                            <h1 className='text-red-color text-2xl'>User 1: <span className='text-white'>Participants</span></h1>
                            <ul className='pt-12'>
                                <li> • Diary events check list</li>
                                <li> • Users will never miss their favorite events<br /> by Pin events function</li>
                                <li> • Purchase the tickets/Online registration to access some<br /> universities events from application </li>
                                <li> • The app provide the information of location, how to get to<br /> the events and duration of the events</li>
                                <li> • Categorize each events and search function</li>
                                <li> • Free/Paid events are categorized</li>
                            </ul>
                        </div>
                        <div className='xl:pt-10 xl:m-auto sm:pt-8 pl-12'>
                            <h1 className='text-yellow-colors text-2xl'>User 2: <span className='text-white'>Host of the events</span></h1>
                            <ul className='pt-12'>
                                <li> • Take only few minutes to fill the information</li>
                                <li> • Low chance of misinformation</li>
                                <li> • Lack of experience in announcing or publishing the events<br /> in term of wording</li>
                                <li> • Want to be known in the social, more participants, and nice<br /> feedback to the host</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
            <div className='xl:px-4'>
                <div className='max-w-7xl m-auto'>
                    <div className="pb-20">
                        <p className='py-12'>Let’s say that 2 of my users are primary target of my products, so I built <span className='text-primary-color'>empathy map</span> in order to understand their expectation,<br /> demand, feelings of the users. Then I will apply all the information to my products.</p>
                        <Image className='w-screen' src={Empathy} />
                    </div>
                </div>
            </div>



            <div>
                <div className='py-16 bg-brown-colors'>
                    <div className='max-w-7xl m-auto'>
                        <div className='xl:px-4 sm:flex-col sm:items-center flex justify-around'>
                            <div>
                                <p className='sm:text-center pb-20 text-white'>There are 12 types of events</p>
                                <Image src={HumanVector} />
                            </div>
                            <div>
                                <Image className='mt-28' src={categories} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='max-w-7xl m-auto'>
                    <div className="my-10">
                        <Image className='w-screen' src={Architecture} />
                        <Image className='w-screen' src={UserFlow} />
                    </div>

                </div>


                <div className='max-w-7xl m-auto'>
                    <div>
                        <h1 className='sm:text-3xl text-primary-color text-5xl text-center py-12'>SKETCH WIREFRAMES</h1>
                        <Image src={SketchWireFrame} />
                    </div>
                    <div>
                        <h1 className='sm:text-3xl text-primary-color text-5xl text-center pt-20'>WIREFRAMES</h1>
                        <Image src={WireFrame} />
                    </div>
                    <Image src={Logo} className='w-screen' />
                    <Image src={Palette} className='w-screen' />
                    <Image src={UI} className='w-screen' />
                </div>

                <div className='max-w-7xl m-auto'>
                    <div className='xl:px-4 flex flex-col items-center justify-center'>
                        <div>
                            <h1 className='text-center text-3xl text-primary-color pt-20 pb-4'>NEXT</h1>
                            <p>This is my first ever project for UX/UI, I found out many mistakes later on and here are the list</p>
                        </div>
                        <div className='py-16'>
                            <p className='text-yellow-colors'>UX</p>
                            <ul>
                                <li> • Login system for personnel</li>
                                <li> • Interview to the user, what they really demand, so I can apply the info to my application</li>
                                <li> • Add flow for Approval step from university central system to confirm that the events that got registered are not similar</li>
                            </ul>
                            <p className='text-primary-color pt-10'>UI</p>
                            <ul>
                                <li> • Adjust all the front size for every content/page</li>
                                <li> • Button color adjustment to decrease confusion for users</li>
                                <li> • Create logout page, account settings and change account</li>
                                <li> • Revised the layout page for event categories, so the application become easier to use and understand.</li>
                                <li> • Adjust the design for ticket amount and make the price tag become clearer</li>
                                <li> • Approval page for events</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default page