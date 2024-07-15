import { TComponentItem } from '../../../types'
import { MinimalAccordion } from '../../cms/components'
import { FaArrowRight } from 'react-icons/fa'

export function FAQs(props: TProps) {
    return (
        <div className="bg-[#343b34] text-white py-40 px-10">
            <div className=" text-6xl container px-5">FAQS</div>
            {props.item.items?.map((item, i) => {
                return (
                    <MinimalAccordion key={i} title={item.main}>
                        {item.description} #{i + 1}
                    </MinimalAccordion>
                )
            })}
            <div className="flex items-center text-2xl cursor-pointer mt-6 uppercase">
                {props.item.typography.action}{' '}
                <FaArrowRight className="h-6 w-6 pl-2" />
            </div>
        </div>
    )
}
type TProps = { item: TComponentItem }
