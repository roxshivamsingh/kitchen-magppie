import { TComponentItem } from '../../../types'
import { FaArrowRight } from 'react-icons/fa'

export function BuyingStep(props: TProps) {
    return (
        <div className="bg-[#5d4e3e] text-white pt-20 pb-28 px-10 flex flex-col justify-start w-full font-custom">
            <div
                className="text-7xl w-full"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            <div className="grid grid-cols-2 mt-6">
                {props.item.items?.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="flex flex-row gap-2 py-4 justify-start max-w-lg"
                        >
                            <div className="text-8xl font-extralight italic">
                                {i + 1}
                            </div>
                            <div className="my-auto mt-10 max-w-sm text-4xl pl-2 font-[200]">
                                {item.main}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-start items-start cursor-pointer">
                <div className="text-3xl cursor-pointer mt-6 bg-brown-600 text-white font-light uppercase py-6 px-6 border border-white rounded-full flex items-center justify-center hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500">
                    {props.item.typography.action}{' '}
                    <FaArrowRight className="h-8 w-8 pl-3" />
                </div>
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
