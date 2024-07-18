import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { TbMenu } from 'react-icons/tb'
import { TComponentItem } from '../../../../types'
import { useMemo, useState } from 'react'
import Contact from '../../components/Modals/Contact'
import Consult from '../../components/Modals/Consult'
import KitchenReelVideo from '../../../../assets/videos/kitchen-final.mp4'

export function Hero(props: TProps) {
    const { item } = props
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    const renderNavigationBar = useMemo(() => {
        return (
            <div className="flex items-center justify-between w-full px-6 py-4 mt-6 fixed">
                <h1 className="text-white z-10 font-bold text-6xl cursor-pointer mix-blend-difference">
                    {item.typography.main}
                </h1>
                <TbMenu className="h-16 w-16 cursor-pointer" />
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
            <div className="relative z-10 flex flex-col items-start justify-between h-full text-white">
                {toggle.isReelComponentClicked ? (
                    <video
                        className="object-cover w-full min-h-screen"
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
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                        {/* <div
                            className="text-7xl z-10 flex flex-col justify-end h-screen pl-6 p-4 mb-80"
                            dangerouslySetInnerHTML={{
                                __html: props.item.typography.description,
                            }}
                        /> */}
                        <h1 className="text-7xl z-10 flex flex-col justify-end h-screen pl-6 p-4 mb-80 font-extralight">
                            Welcome to the <br />
                            <span>
                                <span className="italic font-normal">
                                    SPIRITUAL
                                </span>{' '}
                                heart
                            </span>{' '}
                            of your Home.
                        </h1>
                    </>
                )}
                {renderNavigationBar}
            </div>
            <div className="fixed bottom-10 right-5 flex flex-col space-y-8 z-10">
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
                <button
                    className="p-6 bg-[#202620] rounded-full text-white shadow-xl"
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenConsultModal: true,
                        }))
                    }}
                >
                    <RiUserSettingsFill className="h-10 w-10" />
                </button>
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