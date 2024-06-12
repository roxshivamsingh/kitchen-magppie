import one from "../../../../../../assets/photos/features/1.png";
import two from "../../../../../../assets/photos/features/2.png";
import three from "../../../../../../assets/photos/features/3.png";
import four from "../../../../../../assets/photos/features/4.png";
import five from "../../../../../../assets/photos/features/5.png";
import six from "../../../../../../assets/photos/features/6.png";


interface Feature {
    icon: string
    title: string
    description: string
}

export const features: Feature[] = [
    {
        icon: one,
        title: 'Fire Resistance',
        description:
            'These are not flammable, reduce the spread of flames, do not burn, and do not emit toxic fumes.',
    },
    {
        icon: two,
        title: 'Stay Healthy',
        description:
            '100% stone slabs infused with silver particles, makes the kitchen anti-bacterial, virus, fungal, germs and termites.',
    },
    {
        icon: three,
        title: 'Resistant to Stain',
        description:
            "Porcelain tiles are waterproof, liquid can't damage the tile.",
    },
    {
        icon: four,
        title: 'Easy to Clean',
        description:
            'Porcelain slabs can be cleaned without any hassle, as they do not stain and resist the most aggressive chemical agents.',
    },
    {
        icon: five,
        title: 'Recyclable',
        description:
            'Porcelain slabs maintain their colors even when exposed to continuous, direct sunlight or in contact with atmospheric agents or smog.',
    },
    {
        icon: six,
        title: 'Resistant to Scratches',
        description: 'Porcelain slabs have a high resistance to scratches.',
    },
]
