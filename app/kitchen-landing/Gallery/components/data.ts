import one from '../../assets/gallery/Rectangle68.png'
import two from '../../assets/gallery/Rectangle69.png'
import three from '../../assets/gallery/Rectangle70.png'
import four from '../../assets/gallery/Rectangle71.png'

interface Gallery {
    id: number
    img: string
}

export const galleries: Gallery[] = [
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
    {
        id: 4,
        img: four,
    },
]
