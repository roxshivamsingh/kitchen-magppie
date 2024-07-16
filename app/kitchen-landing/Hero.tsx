import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { TbMenu } from 'react-icons/tb'
import { TComponentItem } from '../../types'
import { useMemo, useState } from 'react'
import Contact from './Modals/Contact'
import Consult from './Modals/Consult'
// import KitchenReelVideo from '../../assets/videos/kitchen-home.mp4'

export function Hero(props: TProps) {
    const { item } = props
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    const renderNavigationBar = useMemo(() => {
        return (
            <div className="flex items-center justify-between w-full px-6 py-4 mt-6 fixed font-custom">
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
            <div className="relative z-10 flex flex-col items-start justify-between h-full text-white font-custom">
                {!toggle.isReelComponentClicked && (
                    <>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                        <div
                            className="text-7xl z-10 flex flex-col justify-end h-screen pl-6 p-4 mb-80"
                            dangerouslySetInnerHTML={{
                                __html: props.item.typography.description,
                            }}
                        />
                    </>
                )}
                {renderNavigationBar}
            </div>
            <div className="fixed bottom-10 right-5 flex flex-col space-y-8 z-10">
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
