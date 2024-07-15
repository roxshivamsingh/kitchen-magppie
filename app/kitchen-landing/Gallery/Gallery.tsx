import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import { TComponentItem } from '../../../types'

export function Gallery(props: TProps) {
    return (
        <div className="px-2 py-10 flex flex-col items-start bg-[#f9f5ef]">
            <h1 className="mb-10 text-7xl"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />

            <Swiper
                scrollbar={{ hide: true }}
                modules={[Scrollbar]}
                className="w-full h-100" // Adjusted width and height
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
                            className="h-screen object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


type TProps = { item: TComponentItem }
