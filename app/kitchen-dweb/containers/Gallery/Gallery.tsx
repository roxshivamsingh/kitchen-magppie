// import { TComponentItem } from '../../../../types'
import { Grid, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import { galleries } from './data';

export function Gallery() {
    return (
        <div
            id="Gallery"
            className="flex flex-col items-center justify-center bg-[#f9f5ef] py-10 relative"
        >
            {/* <h1
                className="mb-10 px-5 text-5xl font-extralight text-center"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-5xl mb-5 text-center mt-10 font-extralight">
                Explore our{' '}
                <span className="italic font-thin uppercase">Gallery</span>
            </h1>
            {/* <div className="grid grid-cols-2 gap-5 mx-10">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={gallerOne}
                        alt="Description"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={gallerTwo}
                        alt="Description"
                        className="w-50 h-50 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={gallerThree}
                        alt="Description"
                        className="w-50 h-50 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={item}
                        alt="Description"
                        className="w-[30rem] h-[20rem] max-h-[20rem] max-w-[30rem] min-h-[20rem] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div> */}

            <Swiper
                modules={[Navigation, Grid]}
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                spaceBetween={20}
                slidesPerView={2}
                className="w-full relative container mx-auto max-w-7xl gap-0"
            >
                {galleries.map((gallery, index) => (
                    <SwiperSlide>
                        <div
                            className="relative w-full h-full overflow-hidden"
                            key={index}
                        >
                            <img
                                src={gallery.image}
                                alt="img"
                                className="w-[630px] h-[354px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="custom-prev cursor-pointer bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute left-20 mt-10 top-1/2 transform -translate-y-1/2 z-10">
                <FaArrowLeft className="h-4 w-4" />
            </button>
            <button className="custom-next bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute right-20 mt-10 cursor-pointer top-1/2 transform -translate-y-1/2 z-10">
                <FaArrowRight className="h-4 w-4" />
            </button>
        </div>
    )
}

// type TProps = { item: TComponentItem }
// props: TProps
