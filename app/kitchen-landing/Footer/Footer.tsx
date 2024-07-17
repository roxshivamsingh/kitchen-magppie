import { Link } from 'react-router-dom'
import { TComponentItem } from '../../../types'
import { FaArrowUp } from 'react-icons/fa'

export function Footer(props: TProps) {
    return (
        <div className="px-10 bg-[#202620] pt-20 pb-44 text-white w-screen flex flex-col justify-start font-custom h-full">
            <div className="text-6xl container mb-10 font-bold">MAGPPIE</div>
            <div className="grid grid-cols-2 mb-10 gap-4">
                {props.item.items?.map((item, i) => {
                    return (
                        <Link
                            to={'/landing'}
                            // to={`landing/${item.secondary}`}
                            key={i}
                            className="p-2 cursor-pointer text-4xl font-custom"
                        >
                            {item.main}
                        </Link>
                    )
                })}
            </div>
            <hr className="" />
            <div className="flex justify-between mt-6 text-xl cursor-pointer mb-5 font-custom">
                <div className="p-2 text-3xl">{props.item.typography.main}</div>
                <div className="flex p-2 items-center text-3xl">
                    {props.item.typography.action}{' '}
                    <FaArrowUp className="h-8 w-8 ml-2" />
                </div>
            </div>
            <div className="text-center mt-6 pb-6 text-2xl font-light mr-10 font-custom">
                {props.item.typography.description}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
