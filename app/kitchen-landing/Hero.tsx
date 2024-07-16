import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TComponentItem } from '../../types'
import { useMemo, useState } from 'react'
import Contact from './Modals/Contact'
import Consult from './Modals/Consult'
// import KitchenReelVideo from '../../assets/videos/kitchen-home.mp4'

export function Hero(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    const renderNavigationBar = useMemo(() => {
        return (
            <div className="flex items-center justify-between w-full px-6 py-4 mt-6 fixed">
                <h1 className="text-white z-10 font-bold text-6xl cursor-pointer mix-blend-difference">
                    {props.item.typography.main}
                </h1>
                <GiHamburgerMenu className="h-16 w-16 cursor-pointer" />
            </div>
        )
    }, [props.item.typography.main])

    return (
        <div
            onClick={() => {
                setToggle((prev) => ({ ...prev, isReelComponentClicked: true }))
            }}
            className="relative w-full h-screen bg-cover"
            style={{ backgroundImage: `url(${props.item.links.bg})` }}
        >

            {!toggle.isReelComponentClicked && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            )}
            <div className="relative z-10 flex flex-col items-start justify-between h-full text-white">
                {renderNavigationBar}
                <div
                    className="text-7xl flex flex-col justify-center h-screen pl-6 p-4 mt-80"
                    dangerouslySetInnerHTML={{
                        __html: props.item.typography.description,
                    }}
                />
            </div>
            <div className="fixed bottom-10 right-5 flex flex-col space-y-4 z-10 ">
                <button
                    className="p-6 bg-[#202620] rounded-full text-white shadow-lg"
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenContactModal: true,
                        }))
                    }}
                >
                    <FaPhoneAlt className="h-12 w-12" />
                </button>
                <button
                    className="p-6 bg-[#202620] rounded-full text-white shadow-lg"
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenConsultModal: true,
                        }))
                    }}
                >
                    <RiUserSettingsFill className="h-12 w-12" />
                </button>
            </div>
            <Contact
                onCloseModal={() => {
                    setToggle((prev) => ({ ...prev, isOpenContactModal: false }))
                }}
                isVisible={toggle.isOpenContactModal}
            />
            <Consult
                onCloseModal={() => {
                    setToggle((prev) => ({
                        ...prev,
                        isOpenConsultModal: false,
                    }))
                }}
                isVisible={toggle.isOpenConsultModal}
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
