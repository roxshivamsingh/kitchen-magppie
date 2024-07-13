import one from '../../assets/benefits/AntiBacteriaimage.png'
import two from '../../assets/benefits/AntiGerm.png'
import three from '../../assets/benefits/AntiGerm.png'
import four from '../../assets/benefits/AntiGerm.png'
import five from '../../assets/benefits/AntiGerm.png'
import six from '../../assets/benefits/AntiGerm.png'

interface Benefit {
    id: number
    img: string
    title: string
}

export const benefits: Benefit[] = [
    {
        id: 1,
        img: one,
        title: 'Anti Fungal',
    },
    {
        id: 2,
        img: two,
        title: 'Anti Fungal',
    },
    {
        id: 3,
        img: three,
        title: 'Anti Fungal',
    },
    {
        id: 4,
        img: four,
        title: 'Anti Fungal',
    },
    {
        id: 5,
        img: five,
        title: 'Anti Fungal',
    },
    {
        id: 6,
        img: six,
        title: 'Anti Fungal',
    },
]
