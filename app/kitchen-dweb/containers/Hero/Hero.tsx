import { FaPhoneAlt } from 'react-icons/fa'
// import KitchenBg from '../../assets/hero-bg.png'
import Form from './Form'
import { RiUserSettingsFill } from 'react-icons/ri'
import { TComponentItem } from '../../../../types'

type TProps = {
    onContactOpen?: VoidFunction
    onConsultOpen?: VoidFunction
    item: TComponentItem
}

export function Hero(props: TProps) {
    return (
        <div
            className="relative w-full bg-contain"
            style={{ backgroundImage: `url(${props.item.links.bg})` }}
        >
            <div className="relative z-10 flex flex-col items-start justify-between h-full w-full">
                <div className="absolute w-full h-full bg-black opacity-40" />
                <div className="flex items-center justify-between w-full h-screen container mx-auto max-w-7xl">
                    <div className="flex">
                        {/* <h1 className="text-5xl font-extralight text-white z-20">
                            Our Kitchens are safe
                            <br />
                            <span>
                                <span className="italic font-semibold">
                                    {' '}
                                    SAFE{' '}
                                </span>
                                Kitchen
                            </span>{' '}
                            <br />
                        </h1> */}
                        <h1
                            className="text-5xl font-extralight text-white z-20"
                            dangerouslySetInnerHTML={{
                                __html: props.item.typography.description,
                            }}
                        />
                    </div>

                    <div className="z-20">
                        <Form />
                    </div>
                </div>
            </div>
            <div className="fixed right-5 top-20 bottom-20 flex flex-col items-center justify-center space-y-4 z-20">
                <button
                    className="p-3 bg-[#202620] rounded-full text-white shadow-xl"
                    onClick={() => {
                        if (props.onContactOpen) props.onContactOpen()
                    }}
                >
                    <FaPhoneAlt className="h-5 w-5" />
                </button>
                <button
                    className="p-3 bg-[#202620] rounded-full text-white shadow-xl"
                    onClick={() => {
                        if (props?.onConsultOpen) props?.onConsultOpen()
                    }}
                >
                    <RiUserSettingsFill className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}
