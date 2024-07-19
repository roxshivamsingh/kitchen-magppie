import { TComponentItem } from '../../../../types'
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6'

export function FAQs(props: TProps) {
    return (
        <div className="bg-[#343b34] text-white py-20 flex flex-col justify-center items-center w-full">
            <h1 className="text-5xl text-center font-light mb-10">FAQs</h1>
            <div className="flex flex-col container max-w-6xl w-full justify-center">
                {props.item.items?.map((item, i) => {
                    return (
                        <div key={i} className="font-custom mb-2">
                            <MinimalAccordion key={i} title={item.main}>
                                {item.description} #{i + 1}
                            </MinimalAccordion>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center items-center cursor-pointer mt-10">
                <button className="text-lg font-lighter cursor-pointer mt-6 bg-brown-600 text-[#343b34] bg-white uppercase py-2 px-10 border border-white rounded-full">
                    {props.item.typography.action}
                </button>
            </div>
        </div>
    )
}
type TProps = { item: TComponentItem }

import { ReactNode, useCallback, useState } from 'react'

interface IProps {
    title: string
    isExpanded?: true
    children: ReactNode
}

export function MinimalAccordion(props: IProps) {
    const [toggle, setToggle] = useState(props?.isExpanded || false)

    const onToggle = useCallback(() => {
        setToggle((prev) => !prev)
    }, [])
    return (
        <div className="border-b border-white shadow">
            <button
                className="w-full flex justify-between items-center p-2 text-left focus:outline-none text-white"
                onClick={onToggle}
            >
                <span className="text-2xl font-medium mt-2">{props.title}</span>
                <span>
                    {toggle ? (
                        <FaArrowUpLong className="text-white h-5 w-5" />
                    ) : (
                        <FaArrowDownLong className="text-white h-5 w-5" />
                    )}
                </span>
            </button>
            {toggle && (
                <div className="text-white text-xl mb-3 ml-3">
                    {props.children}
                </div>
            )}
        </div>
    )
}
