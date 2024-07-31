import { ReactNode, useCallback, useState } from 'react'
import {
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaFacebookF,
} from 'react-icons/fa'
import { BsArrowUp } from 'react-icons/bs'
// ======================================================================

import { TComponentItem } from '../../../../types'

import ConsultModal from '../../components/Modals/Consult'
import ContactModal from '../../components/Modals/Contact'

export function Footer(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    const onClickBackToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    const handleLinkClick = (linkId: string) => {
        if (linkId === 'Consultation') {
            setToggle({ ...toggle, isOpenConsultModal: true })
        } else if (linkId === 'Request a Call') {
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
                {NAV_LINKS?.map((item, i) => {
                    return (
                        <button
                            className="p-2 cursor-pointer text-2xl text-start "
                            key={i}
                            onClick={() => handleLinkClick(item.label)}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>
            <div className="flex flex-row items-center gap-3 mb-5 mt-5 justify-center">
                {ICON_OPTIONS?.map((item, i) => {
                    return (
                        <div
                            className="bg-[#A5A5A5] rounded-full p-2 cursor-pointer text-black text-3xl"
                            key={i}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
            <hr className="" />
            <div className="flex justify-between mt-6 text-xl cursor-pointer mb-5">
                <div className="p-2 text-3xl">{props.item.typography.main}</div>
                <div
                    className="flex p-2 items-center text-3xl"
                    onClick={onClickBackToTop}
                >
                    {props.item.typography.action}
                    <BsArrowUp className="text-3xl ml-2 text-[#A5A5A5]" />
                </div>
            </div>
            <div
                className="text-center mt-6 pb-6 text-xl mr-10 text-[#A5A5A5]"
                style={{ fontFamily: 'Switzer' }}
            >
                {props.item.typography.description}
            </div>
            <ConsultModal
                onHide={() => {
                    setToggle((prev) => ({
                        ...prev,
                        isOpenConsultModal: false,
                    }))
                }}
                open={toggle.isOpenConsultModal}
            />
            <ContactModal
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

const ICON_OPTIONS: ReactNode[] = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaInstagram />,
    <FaYoutube />,
    <FaLinkedinIn />,
]

const NAV_LINKS = [
    { label: 'Consultation', path: '' },
    { label: 'Gallery', path: '' },
    { label: 'Clients', path: '' },
    { label: 'Testimonials', path: '' },
    { label: 'FAQs', path: '' },
] as const
