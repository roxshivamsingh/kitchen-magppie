import { TComponentItem } from '../../../../types'
import Contact from '../../components/Modals/Contact'
import { useState } from 'react'

export function BuyingStep(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    return (
        <div className="bg-[#343b34] text-white flex flex-col justify-center items-center py-20">
            {/* <div
                className="text-7xl w-full"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-4xl w-full font-thin text-center">
                How to buy a <span className="font-bold">MAGPPIE </span>
                Wellness Kitchen in <br />
                <span className="italic font-thin">4 easy steps?</span>
            </h1>
            <div className="flex items-center justify-center container gap-5 mx-auto max-w-7xl">
                {props.item.items?.map((item, i) => {
                    return (<div key={i}>
                        <div className="flex flex-row py-4 justify-start max-w-lg">
                            <div className="text-6xl font-thin italic">
                                {i + 1}
                            </div>
                            <div className="my-auto mt-8 max-w-sm text-xl pl-1 font-[200]">
                                {item.main}
                            </div>
                        </div>
                        {i < props.item.items.length - 1 && (
                            <div className="h-20 border-r border-gray-400 mx-6"></div>
                        )}
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
