import { TComponentItem } from '../../../../types'
import {
    FaArrowUp,
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa'
import { useState } from 'react'
import Consult from '../../components/Modals/Consult'
import Contact from '../../components/Modals/Contact'

export function Footer(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // const handleLinkClick = (linkId: string) => {
    //     if (linkId === 'Request a Call Back') {
    //         setToggle({ ...toggle, isOpenContactModal: true })
    //     } else if (linkId === 'Get in Touch') {
    //         setToggle({ ...toggle, isOpenConsultModal: true })
    //     } else if (linkId === 'Request a Call') {
    //         setToggle({ ...toggle, isOpenContactModal: true })
    //     } else {
    //         // Scroll to the section with the ID corresponding to the linkId
    //         const section = document.getElementById(linkId)
    //         if (section) {
    //             section.scrollIntoView({ behavior: 'smooth' })
    //         }
    //     }
    // }

    return (
        <div className="bg-[#1E1E1E] py-32 text-white px-10 flex flex-col justify-center ">
            <div className="text-6xl container mb-10 text-center font-bold">
                MAGPPIE
            </div>
            <div className="flex mb-10 justify-evenly">
                {/* {props.item.items?.map((item, i) => {
                    return (
                        <button
                            onClick={() => handleLinkClick(item.main)}
                            key={i}
                            className="p-2 cursor-pointer text-4xl text-start"
                        >
                            {item.main}
                        </button>
                    )
                })} */}
                <button className="p-2 cursor-pointer text-2xl text-start">
                    Consultation
                </button>
                <button className="p-2 cursor-pointer text-2xl text-start">
                    Gallery
                </button>
                <button className="p-2 cursor-pointer text-2xl text-start">
                    Clients
                </button>
                <button className="p-2 cursor-pointer text-2xl text-start">
                    Testimonals
                </button>
                <button className="p-2 cursor-pointer text-2xl text-start">
                    FAQs
                </button>
            </div>
            <div className="flex flex-row items-center gap-3 mb-5 mt-5 justify-center">
                <FaFacebook className="h-10 w-10 cursor-pointer" />
                <FaTwitter className="h-10 w-10 cursor-pointer" />
                <FaInstagram className="h-10 w-10 cursor-pointer" />
                <FaYoutube className="h-10 w-10 cursor-pointer" />
                <FaLinkedinIn className="h-10 w-10 cursor-pointer" />
            </div>
            <hr className="" />
            <div className="flex justify-between mt-6 text-xl cursor-pointer mb-5">
                <div className="p-2 text-3xl">{props.item.typography.main}</div>
                <div
                    className="flex p-2 items-center text-3xl"
                    onClick={scrollToTop}
                >
                    {props.item.typography.action}{' '}
                    <FaArrowUp className="h-8 w-8 ml-2" />
                </div>
            </div>
            <div className="text-center mt-6 pb-6 text-xl font-light mr-10">
                {props.item.typography.description}
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

type TProps = { item: TComponentItem }

const INIT_TOGGLE = {
    isOpenContactModal: false,
    isOpenConsultModal: false,
}
