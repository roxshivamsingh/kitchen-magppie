import { Link } from 'react-router-dom'
import { TComponentItem } from '../../../types'

export function Footer(props: TProps) {
    return (
        <div className="px-5 py-5 bg-[#202620] text-white w-full">
            <div className="text-4xl container mb-5">MAGPPIE</div>
            <div className="grid grid-cols-2 mb-6">
                {props.item.items?.map((item, i) => {
                    return (
                        <Link
                            to={`landing/${item.secondary}`}
                            key={i}
                            className="p-1"
                        >
                            {item.main}
                        </Link>
                    )
                })}
            </div>
            <hr className="" />
            <div className="grid grid-cols-2 mt-2 mb-5">
                <div>{props.item.typography.main}</div>
                <div>{props.item.typography.action}</div>
            </div>
            <div className="text-center">
                {props.item.typography.description}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
