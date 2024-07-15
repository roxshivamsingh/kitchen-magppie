import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TComponentItem } from '../../types'
import { useState } from 'react'
import Contact from './Modals/Contact'
import Consult from './Modals/Consult'

export function Hero(props: TProps) {
    const [contactmodal, setContactModal] = useState<boolean>(false)
    const [consultModal, setConsultModal] = useState<boolean>(false)
    const openContactModal = () => setContactModal(true)
    const onCloseContactModal = () => setContactModal(false)
    const openConsultModal = () => setConsultModal(true)
    const onCloseConsultModal = () => setConsultModal(false)

    return (
        <div
            className="relative w-full h-screen bg-cover"
            style={{ backgroundImage: `url(${props.item.links.bg})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-start justify-between h-full text-white">
                <div className="flex items-center justify-between w-full px-6 py-4 mt-6">
                    <h1 className="text-white font-bold text-6xl cursor-pointer">
                        {props.item.typography.main}
                    </h1>
                    <GiHamburgerMenu className="h-16 w-16 cursor-pointer" />
                </div>
                <div
                    className="text-8xl flex flex-col justify-center h-screen pl-6 p-4"
                    dangerouslySetInnerHTML={{
                        __html: props.item.typography.description,
                    }}
                />
            </div>
            <div className="absolute bottom-10 right-5 flex flex-col space-y-4 z-10">
                <button
                    className="p-8 bg-[#202620] rounded-full text-white shadow-lg"
                    onClick={() => openContactModal()}
                >
                    <FaPhoneAlt className="h-14 w-14" />
                </button>
                <button
                    className="p-8 bg-[#202620] rounded-full text-white shadow-lg"
                    onClick={() => openConsultModal()}
                >
                    <RiUserSettingsFill className="h-14 w-14" />
                </button>
            </div>
            <Contact
                onCloseModal={onCloseContactModal}
                isVisible={contactmodal}
            />
            <Consult
                onCloseModal={onCloseConsultModal}
                isVisible={consultModal}
            />
        </div>
    )
}

type TProps = { item: TComponentItem }
