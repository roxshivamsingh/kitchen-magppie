import { TComponentItem } from '../../types/component'

type TProps = { data: TComponentItem }

export default function Caption({ data }: TProps) {
    return (
        <div className="flex items-center justify-center h-screen bg-[#afa796]">
            <div className="text-center text-white">
                <h1 className="text-6xl font-light mb-4">
                    {data.typography.main}{' '}
                    <span className="underline">
                        {data.typography.secondary}
                    </span>
                </h1>
                <p className="text-4xl font-light">
                    {data.typography.subtitle}
                </p>
            </div>
        </div>
    )
}
