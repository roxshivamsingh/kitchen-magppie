import { useCallback, useEffect, useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import _ from 'lodash'

//====================================================================

import { TComponentItem, TComponentTypography } from '../../../../types'

export function FAQs(props: TProps) {
    const { item } = props;

    const [toggle, setToggle] = useState(INIT_TOGGLE)

    return (<div className="bg-white text-black py-20 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center font-light mb-10">FAQs</h1>
        <div className="grid grid-cols-2 mx-10 gap-5 transition-all duration-500 max-h-full">
            {[...(toggle.isViewMore ? props.item.items : props.item.items.slice(0, 9))].map((item, i) => {
                return (<div key={i} className="font-custom mb-5">
                    <FAQAccodion item={item} />
                </div>
                )
            })}
        </div>
        <div className="flex justify-center items-center cursor-pointer mt-10">
            <button

                type='button'
                className="text-2xl font-[250] cursor-pointer mt-6 bg-brown-600 text-white bg-black uppercase py-4 px-10 border border-white rounded-full"

                onClick={() => {
                    setToggle((prev) => ({
                        ...prev,
                        isViewMore: !prev.isViewMore
                    }))
                }}
            >
                {_.get(item, `typography.${toggle.isViewMore ? 'secondary' : 'main'}`, 'view more')}
            </button>
        </div>
    </div >
    )
}

function FAQAccodion(props: IFAQAccodionProps) {
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
            onMouseOver={() => {
                onHeaderHover(true)
            }}
            onMouseLeave={() => {
                onHeaderHover(false)
            }}
        >
            <button
                className="w-full flex items-center p-2 focus:outline-none text-black"
                onClick={onToggle}
            >
                <span className="text-2xl font-thin text-left">
                    {item.main}
                </span>
                <span>
                    {toggle ? (
                        <MdKeyboardArrowUp className="text-black text-3xl ml-2 mt-1" />
                    ) : (
                        <MdKeyboardArrowDown className="text-black text-3xl ml-2 mt-1" />
                    )}
                </span>
            </button>
            {/* <div className={`text-xl mb-3 font-[320]`}>{item.label}</div> */}
            <div
                className={`transition-all duration-500 text-black text-2xl mb-3 font-[320] overflow-y-hidden  ${toggle ? 'max-h-screen' : 'max-h-20 line-clamp-2'
                    }`}
            >
                {item.description}
            </div>
            <div className="border-b-[3.2px] border-black w-64" />
        </div>
    )
}

type TProps = { item: TComponentItem }

interface IFAQAccodionProps {
    item: TComponentTypography
    isExpanded?: true
}

const INIT_TOGGLE = { isViewMore: false }
