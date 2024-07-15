import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
// import one from '../assets/benefits/AntiBacteriaimage.png'
import { TComponentItem } from '../../../types'

export function Benefits(props: TProps) {
    return (
        <div className="flex flex-col items-start bg-[#343b34] text-white py-16 px-4">
            <h1 className="text-7xl mb-10 text-start"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="w-full h-100" // Adjusted width and height
                style={{ overflow: 'hidden' }} // Added overflow handling
            >
                <SwiperSlide className="flex justify-center items-center">
                    <div className="flex items-center mb-5 gap-10" >
                        {props.item.gallery?.map((row, i) => {
                            return (<div className="flex flex-col items-center" key={i}>
                                <img src={row.link} alt="" className="w-32 h-32" />
                                <span className="text-xl">{row.typography.main}</span>
                            </div>)
                        })}
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="flex justify-center items-center">
                    <div className="flex items-center mb-5 gap-10">
                        <div className="flex flex-col items-center">
                            <img src={one} alt="" className="w-32 h-32" />
                            <span className="text-xl">Anti Fungal</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={one} alt="" className="w-32 h-32" />
                            <span className="text-xl">Anti Fungal</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={one} alt="" className="w-32 h-32" />
                            <span className="text-xl">Anti Fungal</span>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}
type TProps = { item: TComponentItem }

