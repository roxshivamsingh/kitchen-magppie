// import { TComponentItem } from '../../../../types/component'
import { clients } from './data'
// import { Grid, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/navigation';

export function Clients() {
    return (
        <div
            id="Clients"
            className="bg-[#f9f5ef] w-full py-10 relative"
        >
            <h1 className="text-center text-6xl mb-10 pt-10 px-5 font-extralight">
                The ones who chose <span className="font-bold">MAGPPIE</span>{' '}
                safe kitchens
            </h1>
            {/* <Swiper
                modules={[Navigation, Grid]}
                grid={{
                    rows: 1,
                    fill: 'row',
                }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                spaceBetween={30}
                slidesPerView={6}
                className="flex container w-full mx-auto max-w-6xl gap-10 relative"
            > */}
            <div className="grid grid-cols-2 gap-6 mx-5 pb-14">
                {clients.map((client) => (
                    // <SwiperSlide key={index}>
                    <div
                        className={`relative w-full h-full overflow-hidden ${client.colSpan === 2 ? 'col-span-2' : 'col-span-1'
                            } ${client.rowSpan === 2 ? 'row-span-2' : 'row-span-1'
                            }`}
                        key={client.id}
                    >
                        <img
                            src={client.src}
                            alt=""
                            className={`w-full h-auto object-cover rounded-lg hover:rounded-lg ${client.height === 1
                                ? 'h-[350px] object-cover'
                                : ''
                                }`}
                        />
                        <h3 className="text-start mt-2 text-3xl font-normal">
                            {client.title}
                        </h3>
                        <p className="text-start text-xl italic text-gray-600">
                            {client.subTitle}
                        </p>
                    </div>
                    /* </SwiperSlide> */
                ))}
            </div>
            {/* </Swiper> */}
            {/* <button className="custom-prev cursor-pointer bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute left-24 top-60 transform -translate-y-1/2 z-10">
                <FaArrowLeft className="h-4 w-4" />
            </button>
            <button className="custom-next bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute right-24 cursor-pointer top-60 transform -translate-y-1/2 z-10">
                <FaArrowRight className="h-4 w-4" />
            </button> */}
        </div>
    )
}

// type TProps = { item: TComponentItem }
