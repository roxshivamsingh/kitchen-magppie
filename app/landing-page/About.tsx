import { _CUSTOMER_SITE_COMPONENTS } from "../../types/component";

export default function About() {
    const data = _CUSTOMER_SITE_COMPONENTS?.find((row) => row.value === 'planet-component');

    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url('${data.links.bg}` }}
        >
            <div className="absolute inset-0 flex items-center justify-center md:w-2/3">
                <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">{data.typeography.main}</h1>
                    <h2 className="text-7xl mb-4">{data.typeography.secondary}</h2>
                    <p className="text-2xl mb-4">
                        {data.typeography.subtitle}
                    </p>
                    <p className="text-lg">
                        {data.typeography.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
