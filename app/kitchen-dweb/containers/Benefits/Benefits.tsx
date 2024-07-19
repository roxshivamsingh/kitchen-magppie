import { TComponentItem } from '../../../../types'

export function Benefits(props: TProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-[#343b34] text-white py-10 w-full">
            {/* <h1
                className="text-7xl mb-16 text-start font-sm"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-5xl mb-16 text-start font-sm">
                What makes
                <span className="font-bold"> MAGPPIE</span> unique?
            </h1>
            <div className="mb-10 flex items-center gap-12 justify-center">
                {props.item.gallery?.map((row, i) => {
                    return (
                        <div key={i} className="flex flex-col items-center">
                            <img
                                src={row.link}
                                alt=""
                                className="w-20 h-20 mb-3"
                            />
                            <span className="text-xl font-light">
                                {row.typography.main}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
type TProps = { item: TComponentItem }
