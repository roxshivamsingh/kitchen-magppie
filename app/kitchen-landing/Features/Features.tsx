import { Carousel } from 'react-responsive-carousel'

// import FeatureCard from './components/Card'
import { features } from './components/data'

const Features = () => {
    return (
        <div className="px-8 py-20 flex flex-col items-center justify-center bg-[#f9f5ef]">
            <h1 className="mb-10 text-7xl">
                What makes <span className="font-bold">MAGPPIE</span> different?
            </h1>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="carousel-root w-full"
            >
                {features.map((feature, i) => (
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md" key={i}>
                        <img src={feature.img} alt="logo" className="h-100 mb-4 object-cover" />
                    </div>))}
            </Carousel>
            {/* {features.map((feature) => (
                    <FeatureCard key={feature.id} img={feature.img} />
                ))} */}
        </div>
    )
}

export default Features
