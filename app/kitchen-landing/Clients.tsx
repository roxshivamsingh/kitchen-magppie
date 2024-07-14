import ranbir from './assets/clients/ranbir.png' // Replace with your actual image paths
import harbhajan from './assets/clients/harbajan.png'
import dhoni from './assets/clients/dhoni.png'
import arshad from './assets/clients/wrshad.png'

const Clients = () => {
    const people = [
        {
            name: 'Ranbir Kapoor',
            title: 'Actor',
            image: ranbir,
        },
        {
            name: 'Harbhajan Singh',
            title: 'Cricketer, Indian Team',
            image: harbhajan,
        },
        {
            name: 'MS Dhoni',
            title: 'Captain, Indian Cricket Team',
            image: dhoni,
        },
        {
            name: 'Arshad Warsi',
            title: 'Actor',
            image: arshad,
        },
    ]

    return (
        <div className="bg-[#f9f5ef] py-8 px-4">
            <h2 className="text-start text-7xl mb-10">
                The ones who already{' '}
                <span className="italic font-medium">SWITCHED</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
                {people.map((person, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-auto rounded-lg"
                        />
                        <h3 className="text-center mt-2 text-md font-semibold">
                            {person.name}
                        </h3>
                        <p className="text-center text-md text-gray-600">
                            {person.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients
