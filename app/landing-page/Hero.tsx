import { _CUSTOMER_SITE_COMPONENTS } from "../../types/component"

const Hero = () => {
    const data = _CUSTOMER_SITE_COMPONENTS?.find((row) => row.value === 'first-component');
    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${data.links.bg})` }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                        {data.typeography.main}
                    </h1>
                    <p className="lg:text-4xl text-lg mb-4">
                        {data.typeography.secondary}
                    </p>
                    <p className="text-sm lg:text-xl font-bold">
                        {data.typeography.subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
