import { useState } from 'react'
import growth from './assets/growth.png'

const ToggleButton = () => {
    const [toggled, setToggled] = useState(false)

    const handleToggle = () => {
        setToggled(!toggled)
    }

    return (
        <div className="flex items-center justify-center bg-[#f9f5ef] py-32 w-screen font-custom">
            <button
                onClick={handleToggle}
                className={`relative flex items-center justify-between px-4 py-2 rounded-full transition-all shadow-xl duration-400 ${
                    toggled
                        ? 'bg-[#ffffff] text-black'
                        : 'bg-[#ffffff] text-black'
                }`}
                style={{ width: '500px', height: '180px' }}
            >
                <span
                    className={`absolute flex items-center justify-center w-40 h-40 rounded-full transition-all duration-300 ${
                        toggled
                            ? 'left-0 transform -translate-x-8'
                            : 'right-0 transform translate-x-8'
                    }`}
                    style={{ backgroundColor: '#202620' }}
                >
                    <img src={growth} alt="Icon" className="w-40 h-40" />
                </span>
                <span
                    className={`transition-opacity duration-300 ${
                        toggled ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                        fontSize: '32px',
                        padding: '45px',
                        textAlign: 'left',
                        fontWeight: "lighter"
                    }}
                >
                    Switch to Wellness Kitchen.
                </span>
                <span
                    className={`transition-opacity duration-300 absolute ${
                        toggled ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        marginLeft: toggled ? '100px' : '',
                        fontSize: '32px',
                        padding: '40px',
                        textAlign: 'left',
                        fontWeight: "lighter"
                    }}
                >
                    Tired of unhealthy Kitchen?
                </span>
            </button>
        </div>
    )
}

export default ToggleButton
