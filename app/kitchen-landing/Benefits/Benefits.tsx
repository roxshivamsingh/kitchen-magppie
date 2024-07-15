import { Swiper, SwiperSlide } from 'swiper/react'
// import { Scrollbar } from 'swiper/modules'
import { Scrollbar } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

import { TComponentItem } from '../../../types'

export function Benefits(props: TProps) {
    return (
        <div className="flex flex-col items-start bg-[#343b34] text-white py-32 px-4">
            <h1
                className="text-7xl mb-16 text-start"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Scrollbar]}
                className="w-full h-100"
                scrollbar={{
                    hide: true,
                }}
                style={{ overflow: 'hidden' }} // Added overflow handling
            >
                <div className="mb-10">
                    {props.item.gallery?.map((row, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='flex flex-col items-center'>
                                    <img
                                        src={row.link}
                                        alt=""
                                        className="w-40 h-40 mb-6"
                                    />
                                    <span className="text-2xl">
                                        {row.typography.main}
                                    </span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </div>
    )
}
type TProps = { item: TComponentItem }
