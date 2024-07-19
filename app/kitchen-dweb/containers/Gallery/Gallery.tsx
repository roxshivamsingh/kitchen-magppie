import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './swiper-custom.css'

import { TComponentItem } from '../../../../types'
import { Navigation } from 'swiper/modules'

export function Gallery(props: TProps) {
    return (
        <div className="flex flex-col items-cente justify-center bg-[#f9f5ef]">
            {/* <h1
                className="mb-10 px-5 text-5xl font-extralight text-center"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-5xl mb-5 text-center mt-10">
                Explore our <span className="italic font-thin">Gallery</span>
            </h1>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="w-full flex flex-col" // Adjusted width and height
                style={{ overflow: 'hidden' }} // Added overflow handling
            >
                {props.item.gallery.map((feature, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={feature.link}
                            alt="logo"
                            className="w-screen h-screen object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

type TProps = { item: TComponentItem }
