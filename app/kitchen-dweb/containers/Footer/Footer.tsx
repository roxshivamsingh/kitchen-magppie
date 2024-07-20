import {
    FaArrowUp,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from 'react-icons/fa'
import { useState } from 'react'
import Consult from '../../components/Modals/Consult'
import Contact from '../../components/Modals/Contact'
import { TComponentItem } from '../../../../types'

export function Footer(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleLinkClick = (linkId: string) => {
        if (linkId === 'Request a Call Back') {
            setToggle({ ...toggle, isOpenConsultModal: true })
        } else if (linkId === 'Get in Touch') {
            setToggle({ ...toggle, isOpenContactModal: true })
        } else {
            // Scroll to the section with the ID corresponding to the linkId
            const section = document.getElementById(linkId)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <div className="bg-[#202620] pt-10 pb-20 text-white px-10 flex flex-col justify-start">
            <div className="flex w-full container mx-auto max-w-8xl justify-start">
                <div className="text-6xl mb-10 font-bold">MAGPPIE</div>
                <div className="grid grid-cols-3 mb-10 gap-3">
                    {props.item.items?.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => handleLinkClick(item.main)}
                            className="p-1 cursor-pointer text-xl text-start ml-32 bg-transparent border-none text-white"
                        >
                            {item.main}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center gap-3 mb-5 justify-end">
                <FaFacebook className="h-6 w-6 cursor-pointer" />
                <FaTwitter className="h-6 w-6 cursor-pointer" />
                <FaInstagram className="h-6 w-6 cursor-pointer" />
                <FaYoutube className="h-6 w-6 cursor-pointer" />
                <FaLinkedinIn className="h-6 w-6 cursor-pointer" />
            </div>

            <hr className="" />
            <div className="flex justify-between text-xl cursor-pointer">
                <div className="p-2 text-lg">{props.item.typography.main}</div>
                <div
                    className="flex p-2 items-center text-lg"
                    onClick={scrollToTop}
                >
                    {props.item.typography.action}{' '}
                    <FaArrowUp className="h-4 w-4 ml-2" />
                </div>
            </div>
            <div className="text-center text-lg font-light">
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
