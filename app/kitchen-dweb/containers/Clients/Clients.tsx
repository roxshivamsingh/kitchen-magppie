import { TComponentItem } from '../../../../types/component'
import { Grid, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import './swiper-custom.css'

export function Clients(props: TProps) {
    return (
        <div
            id="Meet our Clients"
            className="bg-[#f9f5ef] w-full py-10 relative  "
        >
            {/* <h2
                className="text-start text-7xl mb-10 mt-10 px-5"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-center text-5xl mb-10 pt-10 px-5 font-extralight">
                The ones who already
                <span className="font-semibold italic"> SWITCHED</span>
            </h1>
            <Swiper
                modules={[Navigation, Grid]}
                grid={{
                    rows: 1,
                    fill: 'row',
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={30}
                slidesPerView={6}
                className="flex container w-full mx-auto max-w-6xl gap-10 relative"
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
                                    className="w-full h-auto"
                                />
                                <h3 className="text-center mt-2 text-lg font-normal">
                                    {person.typography.main}
                                </h3>
                                <p className="text-center text-base italic text-gray-600">
                                    {person.typography.subtitle}
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <div className="swiper-button-prev swiper-button-custom bg-[#343b34] text-white p-7 rounded-full shadow-full ml-20 mt-5" />
            <div className="swiper-button-next swiper-button-custom bg-[#343b34] text-white p-7 rounded-full shadow-full mr-20 mt-5" />
        </div>
    )
}

type TProps = { item: TComponentItem }
