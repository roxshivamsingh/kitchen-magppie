import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import { TComponentItem } from '../../../types'

export function Features(props: TProps) {
    return (
        <div className="px-4 flex flex-col items-center justify-center bg-[#f9f5ef] font-custom">
            <h1
                className="mb-10 text-8xl"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="w-full" // Adjusted width and height
                style={{ overflow: 'hidden' }} // Added overflow handling
            >
                {props.item.gallery.map((feature, i) => (
                    <SwiperSlide
                        key={i}
                        className="flex justify-center items-center"
                    >
                        <img
                            src={feature.link}
                            alt="logo"
                            className="w-screen object-contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

type TProps = { item: TComponentItem }
