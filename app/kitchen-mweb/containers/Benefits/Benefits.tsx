import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { A11y } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import './swiper-custom.css'

import { TComponentItem } from '../../../../types'
import { useState } from 'react'

export function Benefits(props: TProps) {
    const [swiper, setSwiper] = useState<SwiperClass>(null)
    return (
        <div className="flex flex-col items-start bg-[#343b34] text-white py-32 px-4 mx-1">
            {/* <h1
                className="text-7xl mb-16 text-start font-sm"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-7xl mb-16 text-start font-sm">
                What makes <br />
                <span className="font-bold">MAGPPIE</span> different?
            </h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                // freeMode={true}
                onSwiper={(e) => {
                    setSwiper(e)
                }}
                modules={[A11y]}
                className="w-full h-100 overflow-hidden"
                // scrollbar={{
                //     hide: true,
                // }}

                speed={800}
            // style={{ overflow: 'hidden' }}

            // Added overflow handling
            >
                <div className="mb-10">
                    {props.item.gallery?.map((row, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="flex mb-10 flex-col items-center">
                                    <img
                                        src={row.link}
                                        alt=""
                                        className="w-40 h-40 mb-6"
                                    />
                                    <span className="text-3xl font-light">
                                        {row.typography.main}
                                    </span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
                <div className="flex justify-center">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" className="sr-only peer "
                            onClick={() => {
                                swiper.slideTo(swiper && swiper.isEnd ? 0 : 3)
                            }}
                        />
                        <div className="relative  w-10 h-6 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  bg-[#575857] " />

                    </label>

                </div>
            </Swiper>
        </div>
    )
}
type TProps = { item: TComponentItem }
