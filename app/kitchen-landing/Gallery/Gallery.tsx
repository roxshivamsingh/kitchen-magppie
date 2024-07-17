import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import './swiper-custom.css'

import { TComponentItem } from '../../../types'
import { Navigation, Scrollbar } from 'swiper/modules'

export function Gallery(props: TProps) {
    return (
        <div className="px-2 py-10 flex flex-col items-start justify-center bg-[#f9f5ef]">
            <h1
                className="mb-10 px-5 text-7xl font-extralight"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            <Swiper
                navigation={true}
                modules={[Navigation, Scrollbar]}
                className="w-full" // Adjusted width and height
                style={{ overflow: 'hidden' }} // Added overflow handling
                scrollbar={{
                    // hide: true,
                }}
            >
                {props.item.gallery.map((feature, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={feature.link}
                            alt="logo"
                            className="w-screen object-contain mb-10"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

type TProps = { item: TComponentItem }
