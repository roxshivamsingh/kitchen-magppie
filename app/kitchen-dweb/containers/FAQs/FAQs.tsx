import { TComponentItem } from '../../../../types'
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6'

export function FAQs(props: TProps) {
    return (
        <div className="bg-white text-black py-20 flex flex-col justify-center items-center w-full">
            <h1 className="text-5xl text-center font-light mb-10">FAQs</h1>
            <div className="grid grid-cols-3 container max-w-7xl w-full justify-center gap-10">
                {faqs.map((faq) => {
                    return (
                        <div key={faq.id} className="font-custom mb-5">
                            <MinimalAccordion
                                key={faq.id}
                                title={faq.title}
                                heading={faq.heading}
                            >
                                {faq.subTitle}
                            </MinimalAccordion>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center items-center cursor-pointer mt-10">
                <button className="text-lg font-lighter cursor-pointer mt-6 bg-brown-600 text-black bg-white uppercase py-2 px-10 border border-white rounded-full">
                    {props.item.typography.action}
                </button>
            </div>
        </div>
    )
}
type TProps = { item: TComponentItem }

import { ReactNode, useCallback, useState } from 'react'
import { faqs } from './data'

interface IProps {
    title: string
    isExpanded?: true
    children: ReactNode
    heading: string
}

export function MinimalAccordion(props: IProps) {
    const [toggle, setToggle] = useState(props?.isExpanded || false)

    const onToggle = useCallback(() => {
        setToggle((prev) => !prev)
    }, [])
    return (
        <div className="border-b border-black max-w-sm">
            <button
                className="w-full flex items-center p-2 focus:outline-none text-black"
                onClick={onToggle}
            >
                <span className="text-2xl font-medium">{props.heading}</span>
                <span>
                    {toggle ? (
                        <FaArrowUpLong className="text-black h-3 w-3 ml-2 mt-1" />
                    ) : (
                        <FaArrowDownLong className="text-black h-3 w-3 ml-2 mt-1" />
                    )}
                </span>
            </button>
            {props.title}
            {toggle && (
                <div className="text-black text-xl mb-3">{props.children}</div>
            )}
        </div>
    )
}
