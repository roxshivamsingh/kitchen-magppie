import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { TComponentItem } from '../../../types'
import { Navigation } from 'swiper/modules'

export function Gallery(props: TProps) {
    return (
        <div className="px-2 py-10 flex flex-col items-start bg-[#f9f5ef]">
            <h1
                className="mb-10 text-7xl"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />

            <Swiper
                // scrollbar={{ hide: true }}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-100" // Adjusted width and height
                style={{ overflow: 'hidden' }} // Added overflow handling
            >
                {props.item.gallery.map((feature, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={feature.link}
                            alt="logo"
                            className="h-screen"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

type TProps = { item: TComponentItem }
