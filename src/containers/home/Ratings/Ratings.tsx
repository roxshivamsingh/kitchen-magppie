import { Carousel } from 'react-responsive-carousel'
import { RatingsData } from './data'

const Ratings = () => {
    return (
        <div className="min-h-screen py-8 bg-white text-[#7b766f]">
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="carousel-root"
            >
                {RatingsData.map((rating) => (
                    <div key={rating.id} className="flex flex-col items-center">
                        <img
                            src={rating.img}
                            alt=""
                            className="w-full object-cover"
                        />
                        <div className='flex flex-col justify-center items-center w-2/3 p-10'>
                            <p className="mt-4 mb-4 text-5xl text-center">
                                Ratings and Reviews
                            </p>
                            <p className="mt-4 text-medium text-center">
                                {rating.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Ratings
