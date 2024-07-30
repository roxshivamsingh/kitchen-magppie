import { FaPhoneAlt } from 'react-icons/fa'
// import { RiUserSettingsFill } from 'react-icons/ri'
import { TComponentItem } from '../../../../types'
import { useMemo, useState } from 'react'
import Contact from '../../components/Modals/Contact'
import Consult from '../../components/Modals/Consult'
// import { BiSolidQuoteSingleRight } from 'react-icons/bi'
// import KitchenReelVideo from '../../../../assets/videos/kitchen-final.mp4'

const _data = {
    bg: {
        video: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/landing%2Fdesktop-reel.mp4?alt=media&token=a7eeb7dc-61e1-45c2-bed3-336d769ee064',
    },
}

export function Hero(props: TProps) {
    const { item } = props
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    const renderNavigationBar = useMemo(() => {
        return (
            <div className="flex items-center justify-between w-full px-6 py-4 mt-6 fixed">
                <h1 className="text-white z-10 font-bold text-6xl cursor-pointer mix-blend-difference">
                    {item.typography.main}
                </h1>
            </div>
        )
    }, [item.typography.main])

    return (
        <div
            onClick={() => {
                setToggle((prev) => ({ ...prev, isReelComponentClicked: true }))
            }}
            className="relative w-full h-screen bg-cover"
            style={{ backgroundImage: `url(${item.links.bg})` }}
        >
            <div className="relative z-10 flex flex-col justify-between h-full text-white">
                {toggle.isReelComponentClicked ? (
                    <video
                        className="object-cover w-full min-h-screen"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={_data.bg.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                        <div className="absolute left-2 text-left top-20 bottom-20 flex flex-col items-start justify-center ml-6">
                            <h1 className="space-y-4 text-6xl z-10 p-4 font-extralight">
                                World
                                {/* <sup>
                            <BiSolidQuoteSingleRight className=" text-sm" />
                        </sup> */}
                                's first <br /> Modular Kitchen, <br />
                                <span className="font-bold">
                                    fully built in Stone
                                </span>
                            </h1>
                            <button
                                type="button"
                                className="space-y-4 text-3xl z-10 uppercase font-normal cursor-pointer mt-3 bg-brown-600 text-black bg-white border border-white px-4 py-4 rounded-full ml-3"
                                onClick={() => {
                                    setToggle((prev) => ({
                                        ...prev,
                                        isOpenConsultModal: true,
                                    }))
                                }}
                            >
                                book your consultation
                            </button>
                        </div>
                        {/* <h1
                            className="text-5xl font-extralight text-white z-20"
                            dangerouslySetInnerHTML={{
                                __html: props.item.typography.description,
                            }}
                        /> */}
                        {/* <h1
                    className="absolute left-2 top-20 bottom-20 flex flex-col items-center justify-center space-y-4 text-5xl z-10 p-4 font-extralight"
                    dangerouslySetInnerHTML={{
                        __html: props.item.typography.description,
                    }}
                /> */}
                    </>
                )}
                {renderNavigationBar}
            </div>
            <div className="fixed right-2 top-20 bottom-20 flex flex-col items-center justify-center space-y-4 z-20">
                <button
                    className="p-6 bg-[#202620] rounded-full text-white shadow-xl"
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenContactModal: true,
                        }))
                    }}
                >
                    <FaPhoneAlt className="h-10 w-10" />
                </button>
                {/* <button
                    className="p-6 bg-[#202620] rounded-full text-white shadow-xl"
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenConsultModal: true,
                        }))
                    }}
                >
                    <RiUserSettingsFill className="h-10 w-10" />
                </button> */}
            </div>
            <Contact
                onHide={() => {
                    setToggle((prev) => ({
                        ...prev,
                        isOpenContactModal: false,
                    }))
                }}
                open={toggle.isOpenContactModal}
            />
            <Consult
                onHide={() => {
                    setToggle((prev) => ({
                        ...prev,
                        isOpenConsultModal: false,
                    }))
                }}
                open={toggle.isOpenConsultModal}
            />
        </div>
    )
}

type TProps = { item: TComponentItem }

const INIT_TOGGLE = {
    isOpenContactModal: false,
    isOpenConsultModal: false,
    isReelComponentClicked: false,
}
