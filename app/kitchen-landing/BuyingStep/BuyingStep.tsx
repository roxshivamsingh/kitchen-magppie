import { TComponentItem } from "../../../types"

export function BuyingStep(props: TProps) {
    return <div>
        <div className="text-2xl italic"
            dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
        />
        <div className="grid grid-cols-2">
            {props.item.items?.map((item, i) => {
                return <div key={i} className="flex flex-row gap-2 align-bottom justify-center">
                    <div className="text-3xl italic">{i + 1}.</div>
                    <div className="my-auto">{item.main}</div>
                </div>
            })}
            <div className="">{props.item.typography.action}</div>
        </div>
    </div>
}

type TProps = { item: TComponentItem }
