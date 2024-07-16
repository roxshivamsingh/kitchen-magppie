import { TComponentItem } from '../../../types'
import { FaArrowRight } from 'react-icons/fa'

export function BuyingStep(props: TProps) {
    return (
        <div className="bg-[#5d4e3e] text-white py-40 px-10 flex flex-col justify-start w-full">
            <div
                className="text-6xl italic"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            <div className="grid grid-cols-2 mt-6">
                {props.item.items?.map((item, i) => {
                    return (
                        <div key={i} className="flex flex-row gap-2 py-4 px-4">
                            <div className="text-8xl italic">{i + 1}.</div>
                            <div className="my-auto mt-10 max-w-sm text-2xl">
                                {item.main}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="inline-flex items-center text-4xl cursor-pointer mt-6">
                {props.item.typography.action}{' '}
                <FaArrowRight className="h-8 w-8 pl-3 pt-2" />
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
