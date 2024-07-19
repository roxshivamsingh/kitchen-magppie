import { Link } from 'react-router-dom'
import { TComponentItem } from '../../../../types'
import { FaArrowUp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

export function Footer(props: TProps) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div className="bg-[#202620] py-20 text-white px-10 flex flex-col justify-start">
            <div className="flex w-full container mx-auto max-w-8xl justify-start">
                <div className="text-4xl mb-10 font-bold">MAGPPIE</div>
                <div className="grid grid-cols-3 mb-10 gap-3">
                    {props.item.items?.map((item, i) => {
                        return (
                            <Link
                                to={'/landing'}
                                // to={`landing/${item.secondary}`}
                                key={i}
                                className="p-2 cursor-pointer text-xl ml-32"
                            >
                                {item.main}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-row items-center gap-3 mb-5 justify-end">
                <FaFacebook className="h-6 w-6 cursor-pointer" />
                <FaTwitter className="h-6 w-6 cursor-pointer" />
                <FaInstagram className="h-6 w-6 cursor-pointer" />
                <FaYoutube className="h-6 w-6 cursor-pointer" />
                <FaLinkedinIn className="h-6 w-6 cursor-pointer" />
            </div>

            <hr className="" />
            <div className="flex justify-between text-xl cursor-pointer">
                <div className="p-2 text-lg">{props.item.typography.main}</div>
                <div
                    className="flex p-2 items-center text-lg"
                    onClick={scrollToTop}
                >
                    {props.item.typography.action}{' '}
                    <FaArrowUp className="h-4 w-4 ml-2" />
                </div>
            </div>
            <div className="text-center text-lg font-light">
                {props.item.typography.description}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
