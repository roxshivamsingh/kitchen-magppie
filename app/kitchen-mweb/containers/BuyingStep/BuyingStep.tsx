import { TComponentItem } from '../../../../types'
import Consult from '../../components/Modals/Consult'
import { useState } from 'react'

export function BuyingStep(props: TProps) {
    const [toggle, setToggle] = useState(INIT_TOGGLE)

    return (
        <div className="bg-[#1E1E1E] text-white flex flex-col justify-center items-center py-20">
            {/* <div
                className="text-7xl w-full"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-6xl w-full font-thin text-center mb-6">
                How to buy a <span className="font-bold">MAGPPIE </span>
                Wellness Kitchen in 4 easy steps?
            </h1>
            <div className="grid grid-cols-2 max-w-xl mx-auto container place-items-center">
                {props.item.items?.map((item, i) => {
                    return (
                        // <div key={i} className=" w-full">
                        <div key={i} className="mb-6 mt-6">
                            <div
                                className="text-9xl"
                                style={{
                                    fontFamily: 'BigCaslon Alternatives',
                                }}
                            >
                                {i + 1}.
                            </div>
                            <div className="my-auto max-w-44 text-2xl font-[200]">
                                {item.main}
                            </div>
                        </div>
                        //     {/* {i < props.item.items.length - 1 && (
                        //         <div className="h-20 border-r border-gray-400 mx-6"></div>
                        //     )} */}
                        // {/* </div> */}
                    )
                })}
            </div>
            <div className="flex justify-start items-start cursor-pointer">
                <button
                    onClick={() => {
                        setToggle((prev) => ({
                            ...prev,
                            isOpenConsultModal: true,
                        }))
                    }}
                    className="text-2xl font-[400] cursor-pointer mt-6 bg-brown-600 text-[#343b34] bg-white uppercase py-4 px-10 border border-white rounded-full"
                >
                    {props.item.typography.action}
                </button>
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

type TProps = {
    item: TComponentItem
}

const INIT_TOGGLE = {
    isOpenConsultModal: false,
}
