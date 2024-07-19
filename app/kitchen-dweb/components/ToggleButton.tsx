import { useState } from 'react'
import growth from '../assets/growth.svg'

const ToggleButton = () => {
    const [toggled, setToggled] = useState(false)

    const handleToggle = () => {
        setToggled(!toggled)
    }

    return (
        <div className="flex items-center justify-center bg-[#f9f5ef] py-20 w-full">
            <button
                onClick={handleToggle}
                className={`relative flex items-center justify-between px-4 py-2 rounded-full transition-all shadow-xl duration-400 ${
                    toggled
                        ? 'bg-[#ffffff] text-black'
                        : 'bg-[#ffffff] text-black'
                }`}
                style={{ width: '300px', height: '100px' }}
            >
                <div
                    className={`absolute flex items-center justify-center w-28 h-28 rounded-full shadow-xl transition-all duration-300 ${
                        toggled
                            ? 'left-0 transform -translate-x-8'
                            : 'right-0 transform translate-x-8'
                    }`}
                    style={{ backgroundColor: '#202620' }}
                >
                    <img
                        src={growth}
                        alt="Icon"
                        className="w-28 h-28 bg-[#202620] rounded-full"
                    />
                </div>
                <span
                    className={`transition-opacity duration-300 ${
                        toggled ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                        marginRight: '20px',
                        fontSize: '15px',
                        padding: '10px',
                        textAlign: 'left',
                    }}
                >
                    Switch to Wellness Kitchen.
                </span>
                <span
                    className={`transition-opacity duration-300 absolute ${
                        toggled ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        marginLeft: toggled ? '70px' : '',
                        fontSize: '15px',
                        padding: '10px',
                        textAlign: 'left',
                    }}
                >
                    Tired of unhealthy Kitchen?
                </span>
            </button>
        </div>
    )
}

export default ToggleButton
