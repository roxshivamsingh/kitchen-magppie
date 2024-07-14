import FeatureCard from './components/Card'
import { features } from './components/data'
import { Carousel } from 'react-responsive-carousel'

const Features = () => {
    return (
        <div className="px-8 py-20 flex flex-col items-center justify-center bg-[#f9f5ef]">
            <h1 className="mb-10 text-4xl">
                What makes <span className="font-bold">MAGPPIE</span> different?
            </h1>
            <Carousel
                // showArrows={true}
                // showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="carousel-root w-full"
            >
                {features.map((feature) => (
                    <FeatureCard key={feature.id} img={feature.img} />
                ))}
            </Carousel>
        </div>
    )
}

export default Features
