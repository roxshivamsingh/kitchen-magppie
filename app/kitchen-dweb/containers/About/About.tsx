import { useCallback, useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import _ from 'lodash'

const About = () => {
    return (
        <div className="flex flex-col items-center container mx-auto max-w-6xl pb-16 py-10 font-light">
            <h1 className="text-6xl font-extralight">Our kitchens are Safe</h1>
            {/* <div className="flex items-center my-6 bg-[#1e1e1e] text-white text-3xl p-6 rounded-full shadow-lg font-thin cursor-pointer">
                <p className="tracking-widest">
                    Discover why your kitchen might be unsafe
                </p>
                <IoIosArrowRoundUp className="text-4xl ml-2" />
            </div>
            <div className="flex flex-col items-start mt-4">
                <p className="mb-4 text-xl" style={{ fontWeight: 350 }}>
                    Most modular kitchens in the world are made from wooden
                    cabinets, which can be harmful and toxic, leading to various
                    health problems in our families. Research by the World
                    Health Organization states that wood-based materials like
                    MDF, particle boards, and plywood contain a toxic chemical
                    called formaldehyde, which emits cancerous fumes in our
                    kitchens. Moreover, termites emerging from wood-based
                    materials are extremely harmful, especially for young kids.
                </p>
                <p className="mb-4 text-xl" style={{ fontWeight: 350 }}>
                    At Magppie, we've discovered that silver is the best
                    material for kitchen cabinets. By infusing silver into a
                    special stone, we've created a unique, patented material
                    called Silverstone. Our kitchens are made entirely from this
                    material, avoiding the use of wood and other toxic
                    substances.
                </p>
                <p className="mb-4 text-xl " style={{ fontWeight: 350 }}>
                    MAGPPIE kitchens are dedicated to safeguarding your family's
                    health and safety.
                </p>
            </div> */}
            <FAQAccodion
                title="Discover why your kitchen might be unsafe"
                para1="Most modular kitchens in the world are made from wooden
                    cabinets, which can be harmful and toxic, leading to various
                    health problems in our families. Research by the World
                    Health Organization states that wood-based materials like
                    MDF, particle boards, and plywood contain a toxic chemical
                    called formaldehyde, which emits cancerous fumes in our
                    kitchens. Moreover, termites emerging from wood-based
                    materials are extremely harmful, especially for young kids.
                    At Magppie, we've discovered that silver is the best
                    material for kitchen cabinets. By infusing silver into a
                    special stone, we've created a unique, patented material
                    called Silverstone. Our kitchens are made entirely from this
                    material, avoiding the use of wood and other toxic
                    substances."
                para2="At Magppie, we've discovered that silver is the best
                    material for kitchen cabinets. By infusing silver into a
                    special stone, we've created a unique, patented material
                    called Silverstone. Our kitchens are made entirely from this
                    material, avoiding the use of wood and other toxic
                    substances."
                para3="                    MAGPPIE kitchens are dedicated to safeguarding your family's
                    health and safety."
            />
        </div>
    )
}

export default About

interface IProps {
    isExpanded?: true
    title: string
    para1: string
    para2: string
    para3: string
}

function FAQAccodion(props: IProps) {
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
                    {props.title}
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
                className={`transition-all duration-500 overflow-hidden text-xl font-[320]  ${
                    toggle ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <div className="mb-4 text-xl" style={{ fontWeight: 350 }}>
                    {props.para1}
                </div>
                <div className="mb-4 text-xl" style={{ fontWeight: 350 }}>
                    {props.para2}
                </div>
                <div className="mb-4 text-xl" style={{ fontWeight: 350 }}>
                    {props.para3}
                </div>
            </div>
        </div>
    )
}
