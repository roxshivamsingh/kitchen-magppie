import { Link } from 'react-router-dom'
import { TComponentItem } from '../../../../types'
import { FaArrowUp } from 'react-icons/fa'

export function Footer(props: TProps) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div className="bg-[#202620] pt-16 pb-32 text-white px-10 flex flex-col justify-start mx-1">
            <div className="text-6xl container mb-10 font-bold">MAGPPIE</div>
            <div className="grid grid-cols-2 mb-10 gap-3">
                {props.item.items?.map((item, i) => {
                    return (
                        <Link
                            to={'/landing'}
                            // to={`landing/${item.secondary}`}
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
                <div className="p-2 text-3xl">{props.item.typography.main}</div>
                <div
                    className="flex p-2 items-center text-3xl"
                    onClick={scrollToTop}
                >
                    {props.item.typography.action}{' '}
                    <FaArrowUp className="h-8 w-8 ml-2" />
                </div>
            </div>
            <div className="text-center mt-6 pb-6 text-3xl font-light mr-10">
                {props.item.typography.description}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
