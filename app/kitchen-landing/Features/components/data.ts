import one from '../../assets/features/One.png'
import two from '../../assets/features/Two.jpeg'
import three from '../../assets/features/Three.jpeg'

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
