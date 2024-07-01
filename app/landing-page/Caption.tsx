import { _CUSTOMER_SITE_COMPONENTS } from "../../types/component";

export default function Caption() {
    const data = _CUSTOMER_SITE_COMPONENTS?.find((row) => row.value === 'transform-component');

    return (
        <div className="flex items-center justify-center h-screen bg-[#afa796]">
            <div className="text-center text-white">
                <h1 className="text-6xl font-light mb-4">
                    {data.typeography.main}{' '}
                    <span className="underline">{data.typeography.secondary}</span>
                </h1>
                <p className="text-4xl font-light">
                    {data.typeography.subtitle}
                </p>
            </div>
        </div>
    )
}

