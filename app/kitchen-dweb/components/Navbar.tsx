import { FaPhoneAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { TbMenu } from 'react-icons/tb'

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between h-20 px-10 bg-[#202620] text-white shadow-xl">
            <TbMenu className="h-10 w-10" />
            <h1 className="text-2xl font-bold">MAGPPIE</h1>
            <div>
                <button
                    className="p-2 text-white"
                    // onClick={() => {
                    //     setToggle((prev) => ({
                    //         ...prev,
                    //         isOpenContactModal: true,
                    //     }))
                    // }}
                >
                    <RiUserSettingsFill className="h-5 w-5" />
                </button>
                <button
                    className="p-2 text-white"
                    // onClick={() => {
                    //     setToggle((prev) => ({
                    //         ...prev,
                    //         isOpenConsultModal: true,
                    //     }))
                    // }}
                >
                    <FaPhoneAlt className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
