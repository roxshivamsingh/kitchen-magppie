import { useState } from 'react'
import { TComponentItem } from '../../../../types';
import galleryTwo from '../../assets/gallery/two.png';

export function Features(props: TProps) {
    const [opacity, setOpacity] = useState(-1)
    return (
        <div className="flex flex-col items-center justify-center bg-[#fff4ec] pt-10 w-full px-2">
            <h1 className="text-5xl font-light pb-10">
                What makes our{' '}
                Kitchens{' '}
                safe?
            </h1>
            <div className="flex container w-full mx-auto max-w-7xl gap-10">
                {props.item.gallery.map((feature, i) => (
                    <div
                        className={'flex w-full relative cursor-pointer group'}
                        key={i}
                        onMouseEnter={() => {
                            setOpacity(i)
                        }}
                        onMouseLeave={() => {
                            setOpacity(-1)
                        }}
                    >
                        <img
                            src={i === 0 ? galleryTwo : feature.link}
                            alt="logo"
                            className="w-full h-full"
                        />
                        <div
                            style={{ opacity: Number(i === opacity) }}
                            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-linear bg-[#262424c7]`}
                        >
                            <div className="text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                Did your kichen{' '}
                                <span className="font-bold italic">shower</span>{' '}
                                today?
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

type TProps = { item: TComponentItem }
