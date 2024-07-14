import { galleries } from './components/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

const Gallery = () => {
    return (
        <div className="px-2 py-10 flex flex-col items-start bg-[#f9f5ef]">
            <h1 className="mb-10 text-7xl">
                Explore our <span className="italic">Gallery</span>
            </h1>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="w-full h-full" // Adjusted width and height
                style={{ overflow: 'hidden' }} // Added overflow handling
            >
                {galleries.map((feature, i) => (
                    <SwiperSlide
                        key={i}
                        className="flex justify-center items-center"
                    >
                        <img
                            src={feature.img}
                            alt="logo"
                            className="h-screen object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Gallery
