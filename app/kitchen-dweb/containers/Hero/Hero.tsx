// import { TComponentItem } from '../../../../types'
import { useState } from 'react'
import KitchenReelVideo from '../../assets/Landscape.mp4'
import KitchebBg from '../../assets/hero-bg.png'
import Consult from '../../components/Modals/Consult'

export function Hero() {
    // const { item } = props
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    return (
        <div
            onClick={() => {
                setToggle((prev) => ({ ...prev, isReelComponentClicked: true }))
            }}
            className="relative w-full bg-contain"
            style={{ backgroundImage: KitchebBg }}
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
                        {/* <div className="absolute w-full h-full bg-black opacity-40" /> */}
                        {/* <div
                            className="text-7xl z-10 flex flex-col justify-end h-screen pl-6 p-4 mb-80"
                            dangerouslySetInnerHTML={{
                                __html: props.item.typography.description,
                            }}
                        /> */}
                        <div className="flex items-center justify-between w-full h-screen container mx-auto max-w-7xl">
                            <h1 className="text-4xl flex justify-between font-extralight text-white">
                                Welcome to the <br />
                                <span>
                                    <span className="italic font-normal">
                                        SPIRITUAL
                                    </span>{' '}
                                    heart
                                </span>{' '}
                                of your Home.
                            </h1>
                            <Consult onHide={() => {}} open={false} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

// type TProps = { item: TComponentItem }

const INIT_TOGGLE = {
    isOpenContactModal: false,
    isOpenConsultModal: false,
    isReelComponentClicked: false,
}
