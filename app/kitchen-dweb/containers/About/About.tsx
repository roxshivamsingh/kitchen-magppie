import { IoIosArrowUp } from 'react-icons/io'

const About = () => {
    return (
        <div className="flex flex-col items-center container mx-auto max-w-6xl pb-16 py-10">
            <h1 className="text-7xl">Our kitchens are Safe</h1>
            <div className="flex items-center my-6 bg-[#1e1e1e] text-white text-2xl p-6 rounded-full shadow-lg">
                <p>Discover why your kitchen might be unsafe.</p>
                <IoIosArrowUp className="h-8 w-8 ml-2" />
            </div>
            <div className="flex flex-col items-start mt-4">
                <p className="mb-4 text-xl font-semibold">
                    Most modular kitchens in the world are made from wooden
                    cabinets, which can be harmful and toxic, leading to various
                    health problems in our families. Research by the World
                    Health Organization states that wood-based materials like
                    MDF, particle boards, and plywood contain a toxic chemical
                    called formaldehyde, which emits cancerous fumes in our
                    kitchens. Moreover, termites emerging from wood-based
                    materials are extremely harmful, especially for young kids.
                </p>
                <p className="mb-4 text-xl font-semibold">
                    At Magppie, we've discovered that silver is the best
                    material for kitchen cabinets. By infusing silver into a
                    special stone, we've created a unique, patented material
                    called Silverstone. Our kitchens are made entirely from this
                    material, avoiding the use of wood and other toxic
                    substances.
                </p>
                <p className="mb-4 text-xl font-semibold">
                    MAGPPIE kitchens are dedicated to safeguarding your family's
                    health and safety.
                </p>
            </div>
        </div>
    )
}

export default About
