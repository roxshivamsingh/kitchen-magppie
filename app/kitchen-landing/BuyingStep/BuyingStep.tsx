import { TComponentItem } from '../../../types'

export function BuyingStep(props: TProps) {
    return (
        <div className="bg-[#5d4e3e] text-white py-10 px-10">
            <div
                className="text-4xl italic"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            <div className="grid grid-cols-2">
                {props.item.items?.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="flex flex-row gap-2 align-bottom justify-center py-4"
                        >
                            <div className="text-4xl italic">{i + 1}.</div>
                            <div className="my-auto text-md">{item.main}</div>
                        </div>
                    )
                })}
                <div className="">{props.item.typography.action}</div>
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
