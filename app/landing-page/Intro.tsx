const Intro = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="bg-[#76726c] flex items-center justify-center lg:w-2/3 h-full p-8">
                <div className="text-center text-white max-w-xl flex flex-col justify-center items-center w-full">
                    <div className="bg-[#918e89] rounded-full w-10 h-10 flex items-center justify-center mb-4">
                        <span className="text-xl">1</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">MAGPPIE</h1>
                    <h2 className="text-7xl mb-4">Wellness Kitchens</h2>
                    <p className="text-2xl">
                        Magppie Kitchens are world's first wellness kitchens,
                        fully built in sanitised stone - Magppie Silverstone™
                    </p>
                    <p className="text-2xl">
                        These kitchens are fully washable, most hygienic and
                        world's most strongest.
                    </p>
                </div>
            </div>
            <div
                className="lg:w-1/3 h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('../../assets/photos/landing-page/intro.png')`,
                }}
            ></div>
        </div>
    )
}

export default Intro
