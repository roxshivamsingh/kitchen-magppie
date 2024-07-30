import { useState } from 'react'
import ContactSectionBg from '../../../kitchen-dweb/assets/contact-section.png'
import Consult from '../../components/Modals/Consult'

const ContactSection = () => {
    const [toggle, setToggle] = useState(INIT_TOGGLE)
    return (
        <div
            className="relative w-full bg-cover h-[450px]"
            style={{ backgroundImage: `url(${ContactSectionBg})` }}
        >
            <div className="relative z-10 flex flex-col items-start justify-between h-full w-full">
                <div className="absolute w-full h-full bg-black opacity-40" />
                <div className="flex items-center justify-center w-full h-screen container mx-auto max-w-7xl text-center">
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-thin text-white z-20">
                            Book your
                            <br />
                            <span className="font-bold">
                                Stone Kitchen
                            </span>
                            <br />
                        </h1>
                        <button
                            type="button"
                            className="space-y-4 text-2xl z-10 uppercase font-light cursor-pointer mt-6 bg-brown-600 text-black bg-white border border-white px-4 py-4 rounded-full ml-3"
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
                </div>
            </div>
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

export default ContactSection

const INIT_TOGGLE = {
    isOpenContactModal: false,
    isOpenConsultModal: false,
    isReelComponentClicked: false,
}
