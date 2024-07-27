import { useCallback, useEffect, useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import _ from 'lodash';

import { TComponentItem, TLandingAccordion } from '../../../../types'
import { LANDING_ACCORDION } from '../../../../mocks';

export function FAQs(props: TProps) {
    return (
        <div className="bg-white text-black py-20 flex flex-col justify-center items-center w-full">
            <h1 className="text-5xl text-center font-light mb-10">FAQs</h1>
            <div className="grid grid-cols-3 container max-w-7xl w-full justify-center gap-10">
                {LANDING_ACCORDION.map((item, i) => {
                    return (<div key={i} className="font-custom mb-5">
                        <FAQAccodion item={item} />
                    </div>
                    )
                })}
            </div>
            <div className="flex justify-center items-center cursor-pointer mt-10">
                <button className="text-lg font-[250] cursor-pointer mt-6 bg-brown-600 text-white bg-black uppercase py-2 px-10 border border-white rounded-full">
                    {props.item.typography.action}
                </button>
            </div>
        </div>
    )
}
type TProps = { item: TComponentItem }


interface IProps {
    item: TLandingAccordion,
    isExpanded?: true
}

function FAQAccodion(props: IProps) {
    const { item } = props
    const [toggle, setToggle] = useState(props?.isExpanded || false)

    const onToggle = useCallback(() => {
        setToggle((prev) => !prev)
    }, [])
    const onHeaderHover = _.debounce((value: boolean) => {
        setToggle(value)
    }, 300)
    useEffect(() => {
        return () => {
            onHeaderHover.cancel()
        }
    }, [onHeaderHover])
    return (
        <div
            onMouseOver={() => { onHeaderHover(true) }}
            onMouseLeave={() => { onHeaderHover(false) }}
        >
            <button
                className="w-full flex items-center p-2 focus:outline-none text-black"
                onClick={onToggle}
            >
                <span className="text-4xl font-thin text-left">
                    {item.label}
                </span>
                <span>
                    {toggle ? (
                        <MdKeyboardArrowUp className="text-black text-3xl ml-2 mt-1" />
                    ) : (
                        <MdKeyboardArrowDown className="text-black text-3xl ml-2 mt-1" />
                    )}
                </span>
            </button>
            <div className={`text-xl mb-3 font-[320]`}>{item.label}</div>
            <div className={`transition-all duration-500 text-black text-xl mb-3 font-[200] overflow-hidden ${toggle ? 'max-h-screen' : 'max-h-0'}`}>
                {item.description}
            </div>
            <div className="border-b-2 border-black w-72" />

        </div >
    )
}


