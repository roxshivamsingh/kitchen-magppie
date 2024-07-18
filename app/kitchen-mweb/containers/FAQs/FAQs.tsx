import { TComponentItem } from '../../../../types'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6'

export function FAQs(props: TProps) {
    return (
        <div className="bg-[#343b34] pt-16 pb-32 text-white px-10 flex flex-col justify-start mx-1">
            <div className=" text-8xl container px-5 py-10">FAQS</div>
            {props.item.items?.map((item, i) => {
                return (
                    <div key={i} className="font-custom">
                        <MinimalAccordion key={i} title={item.main}>
                            {item.description} #{i + 1}
                        </MinimalAccordion>
                    </div>
                )
            })}
            <div className="flex justify-start items-start cursor-pointer mt-10">
                <div className="text-3xl cursor-pointer mt-6 bg-brown-600 text-white font-light uppercase py-6 px-6 border border-white rounded-full flex items-center justify-center hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500">
                    {props.item.typography.action}
                    <FaArrowRight className="h-8 w-8 pl-3" />
                </div>
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
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none text-white mb-6"
                onClick={onToggle}
            >
                <span className="text-4xl font-medium mt-2">{props.title}</span>
                <span>
                    {toggle ? (
                        <FaArrowUpLong className="text-white h-10 w-10" />
                    ) : (
                        <FaArrowDownLong className="text-white h-10 w-10" />
                    )}
                </span>
            </button>
            {toggle && (
                <div className="text-white text-3xl mb-6 ml-3">
                    {props.children}
                </div>
            )}
        </div>
    )
}