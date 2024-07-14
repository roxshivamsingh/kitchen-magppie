import { Link } from 'react-router-dom'
import { TComponentItem } from '../../../types'
import { FaArrowUp } from 'react-icons/fa'

export function Footer(props: TProps) {
    return (
        <div className="px-10 py-16 bg-[#202620] text-white w-full">
            <div className="text-4xl container mb-5 font-bold">MAGPPIE</div>
            <div className="grid grid-cols-2 mb-6">
                {props.item.items?.map((item, i) => {
                    return (
                        <Link
                            to={`landing/${item.secondary}`}
                            key={i}
                            className="p-1 cursor-pointer text-2xl"
                        >
                            {item.main}
                        </Link>
                    )
                })}
            </div>
            <hr className="" />
            <div className="grid grid-cols-2 mt-2 text-xl cursor-pointer mb-5">
                <div className='p-1'>{props.item.typography.main}</div>
                <div className="flex p-1 items-center">
                    {props.item.typography.action}{' '}
                    <FaArrowUp className="h-6 w-6 pl-2" />
                </div>
            </div>
            <div className="text-center mt-6 pb-6">
                {props.item.typography.description}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
