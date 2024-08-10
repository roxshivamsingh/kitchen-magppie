import { useCallback, useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import _ from 'lodash'
//====================================================================

import { TComponentItem } from '../../../../types'

type TProps = { item: TComponentItem }
export default function About({ item }: TProps) {

    return (<div className="flex flex-col items-center container mx-auto max-w-6xl pb-16 py-10 font-light">
        <h1 className="text-6xl font-extralight">{item.typography.main}</h1>
        <FAQAccodion
            title={item.typography.secondary}
            paragraphs={item.items?.map((row) => row.main)}

        />
    </div>
    )
}

interface IFAQAccordionProps {
    isExpanded?: true
    title: string
    paragraphs: string[]
}

function FAQAccodion(props: IFAQAccordionProps) {
    const { isExpanded = false, paragraphs, title } = props;
    const [toggle, setToggle] = useState(isExpanded)

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
        <div className="flex flex-col justify-center items-center" id='About'>
            <div
                onMouseOver={() => {
                    onHeaderHover(true)
                }}
                onMouseLeave={() => {
                    onHeaderHover(false)
                }}
                className="w-full flex justify-center items-center focus:outline-none my-8 bg-[#1e1e1e] py-4 max-w-3xl shadow-xl text-white text-3xl p-2 rounded-full font-thin cursor-pointer"
                onClick={onToggle}
            >
                <span className="text-4xl font-thin text-center flex items-center justify-center">
                    {title}
                </span>
                <span>
                    {toggle ? (
                        <MdKeyboardArrowUp className="text-white text-3xl ml-2 mt-1" />
                    ) : (
                        <MdKeyboardArrowDown className="text-white text-3xl ml-2 mt-1" />
                    )}
                </span>
            </div>
            <div
                className={`transition-all duration-500 overflow-hidden text-xl font-[320]  ${toggle ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                {paragraphs?.map((paragraph, i) => {
                    return (
                        <div className="mb-4 text-xl" style={{ fontWeight: 350 }} key={i}>
                            {paragraph}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
