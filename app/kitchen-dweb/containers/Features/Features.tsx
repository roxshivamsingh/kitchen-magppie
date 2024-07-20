import { TComponentItem } from '../../../../types'

export function Features(props: TProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-[#f9f5ef] pt-10 w-full px-2">
            <h1 className="text-5xl font-light pb-10">
                What makes{' '}
                <span className="font-bold text-[#343b34]">MAGPPIE</span>{' '}
                different?
            </h1>
            <div className="flex container w-full mx-auto max-w-7xl gap-10">
                {props.item.gallery.map((feature, i) => (
                    <div className="flex w-full" key={i}>
                        <img
                            src={feature.link}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
