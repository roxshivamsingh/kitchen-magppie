import Card from './components/Card'
import { galleries } from './components/data'
import { Carousel } from 'react-responsive-carousel'

const Gallery = () => {
    return (
        <div className="px-8 py-10 flex flex-col items-start bg-[#f9f5ef]">
            <h1 className="mb-10 text-4xl">
                Explore our <span>Gallery</span>
            </h1>
            <Carousel
                // showArrows={true}
                // showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="carousel-root w-full"
            >
                {galleries.map((feature) => (
                    <Card key={feature.id} img={feature.img} />
                ))}
            </Carousel>
        </div>
    )
}

export default Gallery
