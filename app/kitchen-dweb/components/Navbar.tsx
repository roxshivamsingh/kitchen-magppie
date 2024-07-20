import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { TbMenu } from 'react-icons/tb'

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between h-24 px-10 bg-[#202620] text-white shadow-xl">
            <TbMenu className="text-5xl cursor-pointer" />
            <h1 className="text-4xl font-extrabold">MAGPPIE</h1>
            <div className='flex gap-5'>
                <button className="p-2 text-white cursor-pointer">
                    <RiUserSettingsFill className="text-3xl" />
                </button>
                <button className="p-2 text-white cursor-pointer">
                    <FaPhoneAlt className="text-3xl" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
