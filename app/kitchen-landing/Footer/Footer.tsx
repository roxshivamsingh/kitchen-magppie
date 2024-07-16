import { Link } from 'react-router-dom'
import { TComponentItem } from '../../../types'
import { FaArrowUp } from 'react-icons/fa'

export function Footer(props: TProps) {
    return (
        <div className="px-10 py-32 bg-[#202620] text-white w-full flex flex-col justify-start">
            <div className="text-6xl container mb-10 font-bold">MAGPPIE</div>
            <div className="grid grid-cols-2 mb-6">
                {props.item.items?.map((item, i) => {
                    return (
                        <Link
                            to={`landing/${item.secondary}`}
                            key={i}
                            className="p-2 cursor-pointer text-4xl"
                        >
                            {item.main}
                        </Link>
                    )
                })}
            </div>
            <hr className="" />
            <div className="flex justify-between mt-6 text-xl cursor-pointer mb-5">
                <div className='p-2 text-2xl'>{props.item.typography.main}</div>
                <div className="flex p-2 items-center text-2xl">
                    {props.item.typography.action}{' '}
                    <FaArrowUp className="h-8 w-8 pl-2" />
                </div>
            </div>
            <div className="text-center mt-6 pb-6 text-2xl">
                {props.item.typography.description}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
