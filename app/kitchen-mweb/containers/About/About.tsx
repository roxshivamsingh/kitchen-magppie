import { useCallback, useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import _ from 'lodash'
import { TComponentItem } from '../../../../types'

type TProps = { item: TComponentItem }

export default function About({ item }: TProps) {
    return (
        <div className="flex flex-col items-center py-24 font-light">
            <h1 className="text-7xl text-center font-normal mx-10 mb-6">
                {item.typography.subtitle}
            </h1>
            <FAQAccodion
                title={item.typography.secondary}
                paragraphs={item.items?.map((row) => row.main)}

            />
        </div>
    )
}


interface IFAQAccordionProps {
    isExpanded?: true
    paragraphs: string[]
    title: string

}

function FAQAccodion(props: IFAQAccordionProps) {

    const { isExpanded = false, title, paragraphs } = props;
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
        <div
            className="flex flex-col justify-center items-center mx-20"
            id="About"
            onClick={onToggle}
        >
            <div
                onMouseOver={() => { onHeaderHover(true) }}
                onMouseLeave={() => { onHeaderHover(false) }}
                className="w-full flex justify-center items-center focus:outline-none my-8 bg-[#1e1e1e] py-6 max-w-6xl shadow-xl text-white text-3xl p-2 rounded-full font-thin cursor-pointer"
            >
                <span className="text-4xl font-thin text-center flex items-center justify-center w-[400px]">
                    {title}
                </span>
                <span>
                    {toggle ? (
                        <MdKeyboardArrowUp className="text-white h-12 w-12 ml-2 mt-1" />
                    ) : (
                        <MdKeyboardArrowDown className="text-white h-12 w-12 ml-2 mt-1" />
                    )}
                </span>
            </div>
            <div
                className={`transition-all duration-500 overflow-hidden font-[320]  ${toggle ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                {paragraphs?.map((paragraph, i) => {
                    return (
                        <div className="mb-8 text-3xl font-normal" key={i}>{paragraph}</div>

                    )
                })}

            </div>
        </div>
    )
}
