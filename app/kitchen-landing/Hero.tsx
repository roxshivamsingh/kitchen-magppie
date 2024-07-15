import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
// import heroBg from './assets/heroBg.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TComponentItem } from '../../types'

export function Hero(props: TProps) {
    // console.log(props.item)
    return (<div
        className="relative w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${props.item.links.bg})` }}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-between h-full text-white">
            <div className="flex items-center justify-between w-full px-6 py-4 mt-6">
                <h1 className="text-white font-bold text-2xl cursor-pointer">
                    {props.item.typography.main}
                </h1>
                <GiHamburgerMenu className="h-8 w-8 cursor-pointer" />
            </div>
            <div className="text-4xl mb-40 pl-6 p-4"
                dangerouslySetInnerHTML={{ __html: props.item.typography.description }}
            />

        </div>
        <div className="absolute bottom-10 right-5 flex flex-col space-y-4 z-10">
            <button className="p-3 bg-[#202620] rounded-full text-white shadow-lg">
                <FaPhoneAlt className="h-6 w-6" />
            </button>
            <button className="p-3 bg-[#202620] rounded-full text-white shadow-lg">
                <RiUserSettingsFill className="h-6 w-6" />
            </button>
        </div>
    </div>
    )
}


type TProps = { item: TComponentItem }
