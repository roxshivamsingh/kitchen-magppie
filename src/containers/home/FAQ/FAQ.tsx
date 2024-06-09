import { Accordion } from 'flowbite-react'
import { faqData } from './data'
import './FAQ.css'

export default function FAQ() {
    return (
        <div className="p-20">
            <h1 className="text-4xl font-medium mb-10">FAQ</h1>
            <Accordion className="p-2" collapseAll>
                {faqData.map((data, index) => (
                    <>
                        <Accordion.Panel>
                            <div className="p-2">
                                <Accordion.Title>{data.title}</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 mt-2 text-gray-500">
                                        {data.description}
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        {index !== faqData.length - 1 && (
                            <hr className="border" />
                        )}
                    </>
                ))}
            </Accordion>
        </div>
    )
}
