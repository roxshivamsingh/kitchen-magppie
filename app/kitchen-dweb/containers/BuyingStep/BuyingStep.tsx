import { TComponentItem } from '../../../../types'
import Contact from '../../components/Modals/Contact'
import { useState } from 'react'

export function BuyingStep(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    return (
        <div className="bg-[#1E1E1E] text-white flex flex-col justify-center items-center py-20">
            {/* <div
                className="text-7xl w-full"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-4xl w-full font-thin text-center">
                How to buy a <span className="font-bold">MAGPPIE </span>
                Wellness Kitchen in 4 easy steps?
            </h1>
            <div className="flex gap-5 mx-auto max-w-7xl justify-evenly w-full">
                {props.item.items?.map((item, i) => {
                    return (
                        <div key={i} className="flex flex-col mt-6">
                            <div className="flex flex-col py-4 justify-center max-w-xs">
                                <div className="text-7xl font-bold">
                                    {i + 1}.
                                </div>
                                <div className="my-auto max-w-40 text-xl pl-1 font-[200]">
                                    {item.main}
                                </div>
                            </div>
                            {/* {i < props.item.items.length - 1 && (
                                <div className="h-20 border-r border-gray-400 mx-6"></div>
                            )} */}
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
                    className="text-md font-semibold cursor-pointer mt-6 bg-brown-600 text-[#343b34] bg-white uppercase py-2 px-10 border border-white rounded-full"
                >
                    {props.item.typography.action}
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
