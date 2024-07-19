import { TComponentItem } from '../../../../types'
import { FaArrowRight } from 'react-icons/fa'
import Contact from '../../components/Modals/Contact'
import { useState } from 'react'

export function BuyingStep(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    return (
        <div className="bg-[#5D4E3E] pt-16 pb-32 text-white px-10 flex flex-col justify-start mx-1">
            {/* <div
                className="text-7xl w-full"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-7xl w-full font-thin">
                How to buy a <span className="font-bold">MAGPPIE</span>
                <br /> Wellness Kitchen in <br />
                <span className="italic font-thin">4 easy steps?</span>
            </h1>
            <div className="grid grid-cols-2 mt-6">
                {props.item.items?.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="flex flex-row gap-2 py-4 justify-start max-w-lg"
                        >
                            <div className="text-8xl font-extralight italic">
                                {i + 1}
                            </div>
                            <div className="my-auto mt-10 max-w-sm text-4xl pl-1 font-[200]">
                                {item.main}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-start items-start cursor-pointer">
                <button
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenContactModal: true,
                        }))
                    }}
                    className="text-3xl cursor-pointer mt-6 bg-brown-600 text-white font-light uppercase py-6 px-6 border border-white rounded-full flex items-center justify-center hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
                >
                    {props.item.typography.action}{' '}
                    <FaArrowRight className="h-8 w-8 pl-3" />
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

type TProps = {
    item: TComponentItem
}

const INIT_TOGGLE = {
    isOpenContactModal: false,
}
