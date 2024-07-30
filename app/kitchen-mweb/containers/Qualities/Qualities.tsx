import { useState } from 'react'
import { data } from './data'

const Qualities = () => {
    const [hoveredCard, setHoveredCard] = useState(null)

    return (
        <div className="bg-[#1E1E1E] w-full text-white py-10">
            <h1 className="text-6xl mb-10 mt-10 text-center font-sm font-thin">
                What makes
                <span className="font-bold"> MAGPPIE</span> kitchens the safest?
            </h1>
            <div className="grid grid-cols-2 gap-1 max-w-2xl mx-auto">
                {data.map((card) => {
                    return (
                        <div
                            key={card.id}
                            className="relative h-[200px] w-[300px] bg-[#2F2F2F] flex justify-center items-center text-4xl text-center rounded-xl mb-2 shadow-xl"
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <p className="flex items-center justify-center w-[200px] z-20 font-extralight">
                                {card.heading}
                            </p>
                            <img
                                src={card.img}
                                alt="Sample"
                                className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
                                    hoveredCard === card.id
                                        ? 'opacity-80'
                                        : 'opacity-0'
                                }`}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Qualities
