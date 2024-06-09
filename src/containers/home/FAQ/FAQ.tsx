import { Accordion } from 'flowbite-react'
import { faqData } from './data'

export default function FAQ() {
    return (
        <Accordion className="p-20">
            <h1 className="text-4xl font-medium mb-10">FAQ</h1>
            <Accordion.Panel>
                {faqData.map((data) => (
                    <div key={data.id} className="mb-10">
                        <Accordion.Title>{data.title}</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 mt-2 text-gray-500">
                                {data.description}
                            </p>
                        </Accordion.Content>
                        <hr className='border' />
                    </div>
                ))}
            </Accordion.Panel>
        </Accordion>
    )
}
