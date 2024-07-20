import { useCallback, useState } from 'react'
import growth from '../assets/growth.svg'

function ToggleButton() {

    const [isLeft, setIsLeft] = useState(false)
    const onClickToggle = useCallback(() => {
        setIsLeft((prev) => !prev)
    }, [])

    return (
        <div className=" bg-[#f9f5ef]">
            <div
                className="flex flex-row items-center justify-center"
            >
                <div className=" bg-[#f9f5ef] py-32 ">
                    <button
                        onClick={onClickToggle}
                        className={`relative w-full flex items-center justify-between px-4 py-2 rounded-full
                    ${isLeft ? 'bg-[#ffffff] text-black'
                                : 'bg-[#ffffff] text-black'
                            }
                    `
                        }
                        style={{
                            boxShadow: "inset 3px 10px 10px 2px rgba(0,0,0,0.2)"
                        }}
                    >
                        <div
                            className={`  flex items-center justify-center w-44 h-44 rounded-full
                         `
                            }
                            style={{
                                backgroundColor: '#202620',
                                height: '100%',
                                position: 'absolute',
                                left: isLeft ? 0 : 'calc(100% - 11rem)',
                                transition: 'left 0.5s ease-in-out',
                            }}
                        >
                            <img
                                src={growth}
                                alt="Icon"
                                className="w-96 bg-[#202620] rounded-full"
                                style={{
                                    boxShadow: "3px 10px 10px 2px rgba(0,0,0,0.2)",
                                }}
                            />
                        </div>
                        <div
                            className={`transition-opacity duration-300 ${isLeft ? 'opacity-0' : 'opacity-100'
                                }`}
                            style={{
                                marginRight: '50px',
                                fontSize: '32px',
                                padding: '45px',

                            }}
                        >
                            <div
                                style={{
                                    textAlign: "left",
                                    paddingInline: "1rem",
                                }}
                            >

                                Switch to Wellness Kitchen.

                            </div>
                        </div>
                        <div
                            className={`transition-opacity duration-300 absolute ${isLeft ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                display: "flex",
                                width: "500px",
                                wordBreak: "break-word",
                                marginLeft: isLeft ? '120px' : '',
                                fontSize: '32px',
                                padding: '4rem',
                                textAlign: 'left',

                            }}
                        >
                            <div

                            >
                                Tired of unhealthy Kitchen?

                            </div>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ToggleButton
