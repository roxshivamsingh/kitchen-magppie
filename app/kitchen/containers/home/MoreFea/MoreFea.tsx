import { moreFeaturesData } from './data'
import { Carousel } from 'react-responsive-carousel'

const MoreFea = () => {
    return (
        <div className="w-full min-h-screen py-8 bg-white text-[#7b766f]">
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="carousel-root"
            >
                {moreFeaturesData.map((moreFeature) => (
                    <div key={moreFeature.id} className='p-16'>
                        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                            <img
                                src={moreFeature.imgTop}
                                alt="Kitchen"
                                className="w-full md:w-1/2 h-auto shadow-lg"
                            />
                            <div className="mt-8 md:mt-0 md:ml-8 text-[#7b766f] text-start">
                                <h2 className="text-5xl font-medium mb-4">
                                    {moreFeature.titleTop}
                                </h2>
                                <p className="text-lg">{moreFeature.descTop}</p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse md:flex-row items-center justify-between text-[#7b766f]">
                            <div className="mt-8 md:mt-0 md:mr-8 text-start">
                                <h2 className="text-5xl font-medium mb-4">
                                    {moreFeature.titleDown}
                                </h2>
                                <p className="text-lg">
                                    {moreFeature.descDown}
                                </p>
                            </div>
                            <img
                                src={moreFeature.imgDown}
                                alt="Cleaning"
                                className="w-full md:w-1/2 h-auto shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default MoreFea

