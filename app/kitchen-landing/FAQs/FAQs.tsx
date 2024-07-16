import { TComponentItem } from '../../../types'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
export function FAQs(props: TProps) {
    return (
        <div className="bg-[#343b34] text-white py-40 px-10 flex flex-col justify-start">
            <div className=" text-6xl container px-5 py-10">FAQS</div>
            {props.item.items?.map((item, i) => {
                return (
                    <div key={i}>
                        <MinimalAccordion key={i} title={item.main}>
                            {item.description} #{i + 1}
                        </MinimalAccordion>
                    </div>
                )
            })}
            <div className="flex">
                <div className="text-xl cursor-pointer mt-6 border flex px-3 py-1 rounded-full uppercase gap-2">
                    {props.item.typography.action}
                    <FaArrowRight className="h-5 w-5 my-auto" />
                </div>
            </div>
        </div>
    )
}
type TProps = { item: TComponentItem }


import { ReactNode, useCallback, useState } from 'react';

interface IProps {
    title: string;
    isExpanded?: true,
    children: ReactNode;
}

export function MinimalAccordion(props: IProps) {

    const [toggle, setToggle] = useState(props?.isExpanded || false);

    const onToggle = useCallback(() => {
        setToggle((prev) => !prev);
    }, []);
    return (<div className="border-b border-t border-gray-500 shadow">
        <button
            className="w-full flex justify-between items-center p-4 text-left focus:outline-none text-gray-400"
            onClick={onToggle}
        >
            <span className="text-lg font-medium">{props.title}</span>
            <span
            // style={{
            //     transform: `rotate(${toggle ? '-0' : 0}deg)`,
            //     transition: '250ms',
            // }}
            >
                {toggle ? <FaArrowUpLong className='text-gray-500' /> : <FaArrowDownLong className='text-gray-500' />}
            </span>
        </button>
        {toggle && (<div className="p-4 text-gray-500">{props.children}</div>)}
    </div>
    );
}

