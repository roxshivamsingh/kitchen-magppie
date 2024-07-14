import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// import FeatureCard from './components/Card'
import { features } from './components/data'

const Features = () => {
    return (
        <div className="px-8 py-20 flex flex-col items-center justify-center bg-[#f9f5ef]">
            <h1 className="mb-10 text-7xl">
                What makes <span className="font-bold">MAGPPIE</span> different?
            </h1>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="w-full h-full" // Adjusted width and height
                style={{ overflow: 'hidden' }} // Added overflow handling
            >
                {features.map((feature, i) => (
                    <SwiperSlide
                        key={i}
                        className="flex justify-center items-center"
                    >
                        <img
                            src={feature.img}
                            alt="logo"
                            className="h-full object-cover h-100"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Features
