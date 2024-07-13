import one from '../../assets/carouselOne/One.png'
import two from '../../assets/carouselOne/Two.jpeg'
import three from '../../assets/carouselOne/Three.jpeg'

interface Feature {
    id: number
    img: string
}

export const features: Feature[] = [
    {
        id: 1,
        img: one,
    },
    {
        id: 2,
        img: two,
    },
    {
        id: 3,
        img: three,
    },
]
