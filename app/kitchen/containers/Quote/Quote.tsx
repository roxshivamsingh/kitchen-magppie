import { useMemo } from 'react'
import review from '../../../../assets/photos/review.png'
import Sidebar from '../home/Hero/components/Sidebar'
import g1 from "../../../../assets/photos/kitchen/g1.png";
import g2 from "../../../../assets/photos/kitchen/g2.png";
import g3 from "../../../../assets/photos/kitchen/g3.png";
import g4 from "../../../../assets/photos/kitchen/g4.png";
import g5 from "../../../../assets/photos/kitchen/g5.png";
import g6 from "../../../../assets/photos/kitchen/g6.png";
import g7 from "../../../../assets/photos/kitchen/g7.png";
import g8 from "../../../../assets/photos/kitchen/g8.png";
import g9 from "../../../../assets/photos/kitchen/g9.png";
import g10 from "../../../../assets/photos/kitchen/g10.png";
import g11 from "../../../../assets/photos/kitchen/g11.png";
import g12 from "../../../../assets/photos/kitchen/g12.png";
import g13 from "../../../../assets/photos/kitchen/g13.png";
import g14 from "../../../../assets/photos/kitchen/g14.png";

import _ from "lodash"
import { Tabs } from 'flowbite-react';

export default function Stepper() {

    const images = _.chunk(KITCHEN_OPTIONS, 3)
    const renderCards = useMemo(() => (<div className="grid lg:grid-flow-col lg:grid-cols-4 md:grid-flow-col md:grid-cols-3 gap-4 my-10 text-sm lg:text-lg uppercase">
        {STEPPER_OPTIONS?.map((row, i) => (<div key={i}>
            <div className="shadow-lg bg-gray-200 rounded-md p-4 min-h-full">
                <div className="flex gap-2 flex-row align-middle py-1">
                    <div className="my-auto">Step</div>
                    <div className='border px-2 rounded-2xl border-black'>{i + 1}</div>
                </div>
                <div className='py-1'>CHOOSE YOUR <span className='font-bold'>KITCHEN {row}</span></div>
            </div>
        </div>))}
    </div>), [])
    const renderFooter = useMemo(() => (<>
        <div className="absolute top-0 min-h-screen right-0 invisible lg:visible md:visible">
            <Sidebar />
        </div>

        <div className='absolute bottom-10 left-8 text-white transition delay-1000 duration-300 ease-in-out cursor-pointer invisible md:visible lg:visible'>
            <div className="flex gap-3 justify-center align-middle">
                <div className="border border-white p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.57em" height="1em" viewBox="0 0 9 16"><path fill="currentColor" d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"></path><path fill="currentColor" d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"></path></svg>
                </div>
                <div className="py-1 ">Scroll down to select a style</div>
            </div>
        </div>
    </>), [])

    return (
        <div className="bg-[#434343]">

            <div className='relative min-h-screen bg-cover bg-center' style={{ backgroundImage }}>
                <div className="container lg:mx-auto pt-10 p-3 ">
                    <div className="text-5xl uppercase text-white font-extrabold lg:my-10 md:my-10">
                        MAGPPIE
                    </div>
                    <div className="text-2xl text-white font-extrabold my-5">
                        Get a Quote in 3 easy steps
                    </div>
                    {renderCards}
                </div>

                {renderFooter}
            </div>
            <div className="text-white uppercase">

                <div className="my-4 container mx-auto text-center space-y-1">
                    <div className="flex gap-2 flex-row align-middle justify-center py-1">
                        <div className="my-auto">Step</div>
                        <div className='border px-2 rounded-2xl '>1</div>
                    </div>
                    <div className='py-1 text-3xl'>CHOOSE YOUR <span className='font-bold'>KITCHEN Style</span></div>
                </div>

                <div className="row">

                    <div className="flex flex-row justify-center align-middle "
                    >
                        <Tabs aria-label="Tabs with underline" style="pills"

                            className='flex flex-column justify-center'
                        >
                            <Tabs.Item active title="ALL (8)"
                            // className='outline-none focus:outline-none focus:ring-0 focus:border-0'
                            >
                                <div className="container mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">

                                        {images?.map((items, i) => (<div className='grid gap-2' key={i}>
                                            {items?.map((image, j) => (
                                                <div key={j} className='container text-gray-200 space-y-3'>
                                                    <img
                                                        className="h-auto max-w-full rounded-lg"
                                                        src={image}
                                                        alt=""
                                                    />
                                                    <div className="grid grid-cols-2">
                                                        <div className="font-bold ">CLARA</div>
                                                        <div className="text-right">&#x20B9;7,48,000</div>

                                                    </div>

                                                    <div className="normal-case text-sm">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repellat dignissimos minima.
                                                    </div>

                                                </div>

                                            ))}
                                        </div>))}

                                    </div>


                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="PREMIUM (7)" >
                                {/* Content here */}
                            </Tabs.Item>
                            <Tabs.Item title="LUKE (5)" >
                                {/* Content here */}

                            </Tabs.Item>
                            <Tabs.Item title="PLATINUMM (3)">
                                {/* Content here */}

                            </Tabs.Item>
                        </Tabs>

                    </div>
                </div>

            </div>

        </div>)

}


const STEPPER_OPTIONS = ['Style', 'Size', 'Shape']
const backgroundImage = `url(${review})`
const KITCHEN_OPTIONS = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14]



