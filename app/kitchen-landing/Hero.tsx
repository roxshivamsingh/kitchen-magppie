import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import heroBg from './assets/heroBg.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Hero = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-start justify-between h-full text-white">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-white mt-6 ml-6 font-bold text-xl">
                        MAGPPIE
                    </h1>
                    <GiHamburgerMenu className="h-5 w-5 mt-6 mr-6" />
                </div>
                <div className="text-4xl mb-40 ml-6 p-4">
                    Welcome to the <span className="font-bold ">SPIRITUAL</span>{' '}
                    heart of your Home.
                </div>
            </div>
            <div className="absolute bottom-10 right-5 flex flex-col space-y-4 z-10">
                <button className="p-4 bg-[#202620] rounded-full text-white shadow-lg">
                    <FaPhoneAlt className="h-5 w-5" />
                </button>
                <button className="p-4 bg-[#202620] rounded-full text-white shadow-lg">
                    <RiUserSettingsFill className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}

export default Hero
