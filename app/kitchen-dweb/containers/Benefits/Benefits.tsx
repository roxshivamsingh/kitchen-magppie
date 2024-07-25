import { TComponentItem } from '../../../../types'

export function Benefits(props: TProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-[#1E1E1E] text-white py-10 w-full">
            <h1
                className="text-5xl mb-16 text-start font-sm"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            {/* <h1 className="text-6xl mb-16 text-start font-sm">
                What makes
                <span className="font-bold"> MAGPPIE</span> unique?
            </h1> */}
            <div className="mb-10 flex items-center gap-12 justify-center">
                {props.item.gallery?.map((row, i) => (
                    <div key={i} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <img
                                src={row.link}
                                alt=""
                                className="w-20 h-20 mb-3"
                            />
                            <span className="text-xl font-light">
                                {row.typography.main}
                            </span>
                        </div>
                        {i < props.item.gallery.length - 1 && (
                            <div className="h-20 border-r border-gray-400 px-5"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
