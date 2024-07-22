// import { TComponentItem } from '../../../../types'
import { Grid, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import { galleries } from './data'

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
                        src={gallerFour}
                        alt="Description"
                        className="w-50 h-50 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
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
                spaceBetween={30}
                slidesPerView={2}
                className="w-full relative container mx-auto max-w-7xl gap-10"
            >
                {galleries.map((gallery, index) => (
                    <SwiperSlide>
                        <div
                            className="flex flex-col items-center w-full h-full overflow-hidden"
                            key={index}
                        >
                            <img
                                src={gallery.image}
                                alt="img"
                                className="w-100 h-screen object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="custom-prev cursor-pointer bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute left-10 top-1/2 transform -translate-y-1/2 z-10">
                <FaArrowLeft className="h-5 w-5" />
            </button>
            <button className="custom-next cursor-pointer bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute right-10 top-1/2 transform -translate-y-1/2 z-10">
                <FaArrowRight className="h-5 w-5" />
            </button>
        </div>
    )
}

// type TProps = { item: TComponentItem }
// props: TProps
