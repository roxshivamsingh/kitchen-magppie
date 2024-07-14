import { Carousel } from 'react-responsive-carousel'
import { galleries } from './components/data'
// import Card from './components/Card'

const Gallery = () => {
    return (
        <div className="px-8 py-10 flex flex-col items-start bg-[#f9f5ef]">
            <h1 className="mb-10 text-7xl">
                Explore our <span className="italic">Gallery</span>
            </h1>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="carousel-root w-full"
            >
                {galleries.map((feature, i) => (
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md" key={i}>
                        <img src={feature.img} alt="logo" className="h-100 mb-4 object-cover" />
                    </div>))}
            </Carousel>
        </div>
    )
}

export default Gallery
