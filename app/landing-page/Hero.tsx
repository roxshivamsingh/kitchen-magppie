import ReviewImage from "../../assets/photos/review.png"

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${ReviewImage})` }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                        MAGPPIE
                    </h1>
                    <p className="lg:text-4xl text-lg mb-4">
                        an exclusive compilation for Ms Monica Chaudhary
                    </p>
                    <p className="text-sm lg:text-xl font-bold">
                        Habitat Architects • India
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
