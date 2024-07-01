import { _CUSTOMER_SITE_COMPONENTS } from "../../types/component";

export default function Intro() {
    const data = _CUSTOMER_SITE_COMPONENTS?.find((row) => row.value === 'rating-component');

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="bg-[#76726c] flex items-center justify-center lg:w-2/3 h-full p-8">
                <div className="text-center text-white max-w-xl flex flex-col justify-center items-center w-full">
                    <div className="bg-[#918e89] rounded-full w-10 h-10 flex items-center justify-center mb-4">
                        <span className="text-xl">{data.typography.secondary}</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">{data.typography.main}</h1>
                    <h2 className="text-7xl mb-4">{data.typography.subtitle}</h2>
                    <p className="text-2xl">
                        {data.typography.description}
                    </p>
                    <p className="text-2xl">
                        {data.typography.secondaryDescription}
                    </p>
                </div>
            </div>
            <div
                className="lg:w-1/3 h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${data.links.illustration})`,
                }}
            ></div>
        </div >
    )
}

