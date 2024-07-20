import { FaPhoneAlt } from 'react-icons/fa'
import KitchenBg from '../../assets/hero-bg.png'
import Consult from './Form'
import { RiUserSettingsFill } from 'react-icons/ri'
import { useState } from 'react'
import Contact from '../../components/Modals/Contact'

export function Hero() {
    const [toggle, setToggle] = useState(INIT_TOGGLE)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div
            className="relative w-full bg-cover"
            style={{ backgroundImage: `url(${KitchenBg})` }}
        >
            <div className="relative z-10 flex flex-col items-start justify-between h-full w-full">
                <div className="absolute w-full h-full bg-black opacity-40" />
                <div className="flex items-center justify-between w-full h-screen container mx-auto max-w-7xl">
                    <div className="flex">
                        <h1 className="text-5xl font-extralight text-white z-20">
                            Welcome to the <br />
                            <span>
                                <span className="italic font-semibold">
                                    {' '}
                                    SPIRITUAL{' '}
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
            </div>
            <div className="fixed right-5 top-20 bottom-20 flex flex-col items-center justify-center space-y-4 z-20">
                <button
                    className="p-3 bg-[#202620] rounded-full text-white shadow-xl"
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenContactModal: true,
                        }))
                    }}
                >
                    <FaPhoneAlt className="h-5 w-5" />
                </button>
                <button
                    className="p-3 bg-[#202620] rounded-full text-white shadow-xl"
                    onClick={scrollToTop}
                >
                    <RiUserSettingsFill className="h-5 w-5" />
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
        </div>
    )
}

const INIT_TOGGLE = {
    isOpenContactModal: false,
}
