const About = () => {
    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url('../../assets/photos//contact-us/contact-us-bg.png`,
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center md:w-2/3">
                <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">MAGPPIE</h1>
                    <h2 className="text-7xl mb-4">for people and planet</h2>
                    <p className="text-2xl mb-4">
                        We design and build products that bring wellness at home
                    </p>
                    <p className="text-lg">
                        At MAGPPIE™, we're committed to create products that
                        make everyday life healthier and more sustainable. Our
                        goal is to offer solutions that prioritise personal
                        well-being while caring for our planet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
