import Fea1 from '../../../assets/photos/more-features/more-fea-1.png'
import Fea2 from '../../../assets/photos/more-features/more-fea-2.png'

interface MoreFeature {
    id: number
    imgTop: string
    titleTop: string
    descTop: string
    imgDown: string
    titleDown: string
    descDown: string
}

export const moreFeaturesData: MoreFeature[] = [
    {
        id: 1,
        imgTop: Fea1,
        titleTop: 'Kitchen as strong as a rock',
        descTop:
            'Magppie Silverstone’s benefits extend far beyond hygiene. This robust material stands resilient against fire, water, heat, scratches, and absorption. It’s a promise of a worry-free culinary experience for your family, blending durability with elegance.',
        imgDown: Fea2,
        titleDown: 'Waterproof and easy to clean',
        descDown:
            'Porcelain Slabs are waterproof and non-porous and the water does not damage the surface or the body of the slab, making cleaning your kitchen a breeze. Simply hose it down for a hygienic and effortless shine.',
    },
    {
        id: 1,
        imgTop: Fea1,
        titleTop: 'Kitchen as strong as a rock',
        descTop:
            'Magppie Silverstone’s benefits extend far beyond hygiene. This robust material stands resilient against fire, water, heat, scratches, and absorption. It’s a promise of a worry-free culinary experience for your family, blending durability with elegance.',
        imgDown: Fea2,
        titleDown: 'Waterproof and easy to clean',
        descDown:
            'Porcelain Slabs are waterproof and non-porous and the water does not damage the surface or the body of the slab, making cleaning your kitchen a breeze. Simply hose it down for a hygienic and effortless shine.',
    },
]
