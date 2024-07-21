import { useCallback, useState } from 'react'
import growth from '../assets/growth.svg'

type TProps = { onConsultOpen?: VoidFunction }
function ToggleButton(props: TProps) {

    const [isLeft, setIsLeft] = useState(true)

    const onClickToggle = useCallback(() => {
        setIsLeft((prev) => !prev)
        const timer = setTimeout(() => {
            if (props?.onConsultOpen && isLeft) {
                props.onConsultOpen()
            }
        }, 500)
        return () => clearTimeout(timer)
    }, [isLeft, props])

    return (<div className=" bg-[#f9f5ef]">
        <div className='flex items-center justify-center'>
            <div className=" bg-[#f9f5ef] py-32  w-[70%]">
                <button
                    onClick={onClickToggle}
                    className={`relative w-full flex items-center px-4 py-2 rounded-full bg-[#ffffff] text-black`}
                    style={{
                        boxShadow: "inset 3px 10px 10px 2px rgba(0,0,0,0.2)"
                    }}
                >
                    <div
                        className={`flex items-center justify-center w-48 h-5 rounded-full bg-[#202620] absolute`}
                        style={{
                            left: isLeft ? 0 : 'calc(100% - 11rem)',
                            transition: 'left 0.5s ease-in-out',
                        }}
                    >
                        <img
                            src={growth}
                            alt="Icon"
                            className=" bg-[#202620] rounded-full w-full"
                            style={{
                                zIndex: 1,
                                boxShadow: "3px 10px 10px 2px rgba(0,0,0,0.2)",
                            }}
                        />
                    </div>
                    <div
                        className={`p-[40px] w-96  transition-opacity duration-300 ${isLeft ? 'opacity-0' : 'opacity-100'
                            }`}
                        style={{
                            fontSize: '32px',
                        }}
                    >

                        <div className="text-left ">
                            Switch to Wellness Kitchen.
                        </div>
                    </div>
                    <div
                        className={`flex flex-row justify-between text-[32px] transition-opacity duration-300 absolute ${isLeft ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className='w-52' />

                        <div className="w-72 text-left">
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
