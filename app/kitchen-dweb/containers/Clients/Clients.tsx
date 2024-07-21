import { TComponentItem } from '../../../../types/component';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

export function Clients(props: TProps) {
    return (
        <div id="Meet our Clients" className="bg-[#f9f5ef] w-full py-10 relative">
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
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                spaceBetween={30}
                slidesPerView={6}
                className="flex container w-full mx-auto max-w-6xl gap-10 relative"
            >
                {props.item.gallery.map((person, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center">
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
                ))}
            </Swiper>
            <button className="custom-prev cursor-pointer bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute left-24 top-60 transform -translate-y-1/2 z-10">
                <FaArrowLeft className="h-4 w-4" />
            </button>
            <button className="custom-next bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute right-24 cursor-pointer top-60 transform -translate-y-1/2 z-10">
                <FaArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
}

type TProps = { item: TComponentItem };
