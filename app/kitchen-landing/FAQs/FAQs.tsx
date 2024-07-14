import { TComponentItem } from "../../../types"
import { MinimalAccordion } from "../../cms/components"

export function FAQs(props: TProps) {
    return <div>
        <div className=" text-2xl container px-5">FAQS</div>
        {props.item.items?.map((item, i) => {
            return (<MinimalAccordion key={i} title={item.main}>
                {item.description} #{i + 1}
            </MinimalAccordion>)
        })}
    </div>
}
type TProps = { item: TComponentItem }
