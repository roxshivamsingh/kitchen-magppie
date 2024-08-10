import { TComponentItem } from "../../types/component";
type TProps = { data: TComponentItem }

export default function About({ data }: TProps) {
    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url('${data.links.bg}` }}
        >
            <div className="absolute inset-0 flex items-center justify-center md:w-2/3">
                <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">{data.typography.main}</h1>
                    <h2 className="text-7xl mb-4">{data.typography.secondary}</h2>
                    <p className="text-2xl mb-4">
                        {data.typography.subtitle}
                    </p>
                    <p className="text-lg">
                        {data.typography.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
