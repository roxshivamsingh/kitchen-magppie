import { useState } from 'react'
import KitchenReelVideo from '../../assets/Landscape.mp4'
import KitchenBg from '../../assets/hero-bg.png'
import Consult from './Form'

export function Hero() {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    return (
        <div
            onClick={() => {
                setToggle((prev) => ({ ...prev, isReelComponentClicked: true }))
            }}
            className="relative w-full bg-cover"
            style={{ backgroundImage: `url(${KitchenBg})` }}
        >
            <div className="relative z-10 flex flex-col items-start justify-between h-full w-full">
                {toggle.isReelComponentClicked ? (
                    <video
                        className="object-cover w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={KitchenReelVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <>
                        <div className="absolute w-full h-full bg-black opacity-40" />
                        <div className="flex items-center justify-between w-full h-screen container mx-auto max-w-7xl">
                            <div className="flex">
                                <h1 className="text-5xl font-extralight text-white z-20">
                                    Welcome to the <br />
                                    <span>
                                        <span className="italic font-semibold">
                                            {' '}
                                            SPIRITUAL {' '}
                                        </span>
                                         heart
                                    </span>{' '}
                                    <br />
                                    of your Home.
                                </h1>
                            </div>

                            <div className="z-20">
                                <Consult />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

const INIT_TOGGLE = {
    isOpenContactModal: false,
    isOpenConsultModal: false,
    isReelComponentClicked: false,
}