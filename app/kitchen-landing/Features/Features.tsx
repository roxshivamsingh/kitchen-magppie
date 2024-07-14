import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import { TComponentItem } from '../../../types'

export function Features(props: TProps) {
    return (<div className="px-8 py-20 flex flex-col items-center justify-center bg-[#f9f5ef]">
        <h1 className="mb-10 text-7xl"
            dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
        />
        <Swiper
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
            className="w-full h-full" // Adjusted width and height
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
                        className="h-full object-cover h-100"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}


type TProps = { item: TComponentItem }
