import { TComponentItem } from '../../../types'
import { MinimalAccordion } from '../../cms/components'
import { FaArrowRight } from 'react-icons/fa'

export function FAQs(props: TProps) {
    return (
        <div className="bg-[#343b34] text-white py-40 px-10 flex flex-col justify-start">
            <div className=" text-6xl container px-5 py-10">FAQS</div>
            {props.item.items?.map((item, i) => {
                return (
                    <div>
                        <MinimalAccordion key={i} title={item.main}>
                            {item.description} #{i + 1}
                        </MinimalAccordion>
                    </div>
                )
            })}
            <div className="flex items-center text-4xl cursor-pointer mt-6">
                {props.item.typography.action}{' '}
                <FaArrowRight className="h-8 w-8 pl-3 pt-2" />
            </div>
        </div>
    )
}
type TProps = { item: TComponentItem }
