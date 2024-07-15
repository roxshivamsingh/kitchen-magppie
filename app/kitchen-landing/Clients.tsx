import { TComponentItem } from '../../types'

export function Clients(props: TProps) {
    return (
        <div className="bg-[#f9f5ef] py-8 px-4">
            <h2 className="text-start text-7xl mb-10" dangerouslySetInnerHTML={{ __html: props.item.typography.main }} />
            <div className="grid grid-cols-2 gap-4">
                {props.item.gallery.map((person, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={person.link}
                            alt={person.typography.main}
                            className="w-full h-auto rounded-lg"
                        />
                        <h3 className="text-center mt-2 text-md font-semibold">
                            {person.typography.main}
                        </h3>
                        <p className="text-center text-md text-gray-600">
                            {person.typography.subtitle}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}


type TProps = { item: TComponentItem }
