// import { TComponentItem } from '../../../../types'
// import { Grid, Navigation } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import G4 from '../../../../assets/photos/kitchen/g4.png'

import { MdClose } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import { galleries } from './data'
import { useState } from 'react'

function Modal({ isOpen, onClose, imageSrc }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 px-10">
            <div className="relative">
                <MdClose
                    className="absolute top-4 right-4 text-white h-12 w-12"
                    onClick={onClose}
                />
                <img
                    src={imageSrc}
                    alt="Selected"
                    className="max-w-full max-h-full object-contain rounded-lg"
                />
            </div>
        </div>
    )
}

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (src) => {
        setSelectedImage(src)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImage(null)
    }
    return (
        <>
            <div
                className="grid grid-cols-2 grid-rows-7 gap-3 pb-14 mx-5"
                id="Gallery"
            >
                {galleries.map((gallery) => (
                    <div
                        key={gallery.id}
                        className={`relative w-full h-full overflow-hidden rounded-3xl ${
                            gallery.colSpan === 2 ? 'col-span-2' : 'col-span-1'
                        } ${
                            gallery.rowSpan === 2 ? 'row-span-2' : 'row-span-1'
                        }`}
                    >
                        <img
                            src={gallery.src}
                            alt={`Image ${gallery.id}`}
                            className={`w-full h-[350px] object-cover bg-center rounded-3xl ${
                                gallery.height === 1
                                    ? 'h-full object-contain'
                                    : ''
                            }`}
                            onClick={() => openModal(gallery.src)}
                        />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageSrc={selectedImage}
            />
        </>
        // <div
        //     id="Gallery"
        //     className="flex flex-col items-center justify-center bg-[#f9f5ef] py-10 relative"
        // >
        //     <h1
        //         className="mb-10 px-5 text-5xl font-extralight text-center"
        //         dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
        //     />
        //     <h1 className="text-5xl mb-5 text-center mt-10 font-extralight">
        //         Explore our{' '}
        //         <span className="italic font-thin uppercase">Gallery</span>
        //     </h1>
        //     <Swiper
        //         modules={[Navigation, Grid]}
        //         grid={{
        //             rows: 2,
        //             fill: 'row',
        //         }}
        //         navigation={{
        //             nextEl: '.custom-next',
        //             prevEl: '.custom-prev',
        //         }}
        //         spaceBetween={20}
        //         slidesPerView={2}
        //         className="w-full relative container mx-auto max-w-7xl gap-0"
        //     >
        //         {galleries.map((gallery, index) => (
        //             <SwiperSlide key={index}>
        //                 <div className="relative w-full h-full overflow-hidden">
        //                     <img
        //                         src={gallery.image}
        //                         alt="img"
        //                         className="w-[630px] h-[354px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        //                     />
        //                 </div>
        //             </SwiperSlide>
        //         ))}
        //     </Swiper>
        //     <button className="custom-prev cursor-pointer bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute left-20 mt-10 top-1/2 transform -translate-y-1/2 z-10">
        //         <FaArrowLeft className="h-4 w-4" />
        //     </button>
        //     <button className="custom-next bg-[#343b34] text-white p-2 rounded-full shadow-lg absolute right-20 mt-10 cursor-pointer top-1/2 transform -translate-y-1/2 z-10">
        //         <FaArrowRight className="h-4 w-4" />
        //     </button>
        // </div>
    )
}

// type TProps = { item: TComponentItem }
