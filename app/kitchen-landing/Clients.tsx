import { TComponentItem } from '../../types/component'
import { Grid, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/scrollbar'

export function Clients(props: TProps) {
    return (
        <div className="bg-[#f9f5ef] py-8 px-4">
            {/* <h2
                className="text-start text-7xl mb-10 mt-10 px-5"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-start text-7xl mb-10 mt-10 px-5 font-extralight">
                The ones who already {" "}
                <span className="font-semibold italic">SWITCHED</span>
            </h1>
            <Swiper
                modules={[Grid, Scrollbar]}
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                spaceBetween={30}
                slidesPerView={2}
            >
                {props.item.gallery.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className="flex flex-col items-center"
                                key={index}
                            >
                                <img
                                    src={person.link}
                                    alt={person.typography.main}
                                    className="w-full h-auto rounded-lg"
                                />
                                <h3 className="text-center mt-2 text-2xl font-semibold">
                                    {person.typography.main}
                                </h3>
                                <p className="text-center text-xl text-gray-600">
                                    {person.typography.subtitle}
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

type TProps = { item: TComponentItem }
