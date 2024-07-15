import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
// import heroBg from './assets/heroBg.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TComponentItem } from '../../types'
import { useMemo } from 'react'

export function Hero(props: TProps) {
    const renderNavigationBar = useMemo(() => {
        return <div className="flex items-center justify-between w-full px-6 py-4 mt-6 fixed">
            <h1 className="text-white z-100 font-bold text-6xl cursor-pointer mix-blend-difference">
                {props.item.typography.main}
            </h1>
            <GiHamburgerMenu className="h-16 w-16 cursor-pointer" />
        </div>
    }, [props.item.typography.main])
    return (<div
        className="relative w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${props.item.links.bg})` }}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative  flex flex-col items-start justify-between h-full text-white">
            {renderNavigationBar}
            <div
                className="text-8xl flex flex-col justify-center h-screen pl-6 p-4"
                dangerouslySetInnerHTML={{
                    __html: props.item.typography.description,
                }}
            />
        </div>
        <div className="absolute bottom-10 right-5 flex flex-col space-y-4 z-10">
            <button className="p-6 bg-[#202620] rounded-full text-white shadow-lg">
                <FaPhoneAlt className="h-16 w-16" />
            </button>
            <button className="p-6 bg-[#202620] rounded-full text-white shadow-lg">
                <RiUserSettingsFill className="h-16 w-16" />
            </button>
        </div>
    </div>
    )
}

type TProps = { item: TComponentItem }
