import kitchenImage from '../../assets/photos/review.png'

const SectionTwo = () => {
    return (
        <div className="flex items-center justify-center h-screen text-white">
            <div className="relative flex flex-col items-center">
                <img
                    src={kitchenImage}
                    alt="Magppie Kitchen"
                    className="w-screen h-screen"
                />
                <div className="absolute bottom-80 w-full text-center px-4 md:px-0">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">
                        MAGPPIE KITCHEN
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">
                        bespoke luxury kitchens, used by the finest builders,
                        architects & homes
                    </p>
                </div>
                <div className="absolute bottom-12">
                    <p className="mb-6">
                        A revolutionary holistic approach to how a kitchen can
                        serve the wellbeing of your family, the Magppie Wellness
                        Kitchen is built using patented germ free materials,
                        integrates alkaline water systems and health appliances,
                        offers two free services per year for 25 years, and even
                        access to an Organic Food Subscription and Health
                        Workshops. Globally Awarded and recognized by ECHA (EU),
                        we've created the perfect blend of functionality, design
                        and durability. This is the future of kitchens.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center w-full items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-base bg-white text-black py-2">
                        <p className="inline-block">www.magppiekitchen.com</p>
                        <span className="hidden md:inline-block">|</span>
                        <p className="inline-block">999 9999 012</p>
                        <span className="hidden md:inline-block">|</span>
                        <p className="inline-block">
                            352 Sultanpur, MG Road, New Delhi (Open daily from
                            10am to 7pm)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
