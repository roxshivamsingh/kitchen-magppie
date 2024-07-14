// import Card from './components/Card'
// import { benefits } from './components/data'
// import { Carousel } from 'react-responsive-carousel'
import one from '../assets/benefits/AntiBacteriaimage.png'

const Features = () => {
    return (
        <div className="flex flex-col items-start bg-[#343b34] text-white py-16 px-4">
            <h1 className="text-4xl mb-6 text-start">
                What makes <span className="font-bold">MAGPPIE</span> different?
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full">
                <div className="flex flex-col items-center">
                    <img src={one} alt="" className='w-32 h-32' />
                    <span className="text-xl">Anti Fungal</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={one} alt="" className='w-32 h-32' />
                    <span className="text-xl">Anti Fungal</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={one} alt="" className='w-32 h-32' />
                    <span className="text-xl">Anti Fungal</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={one} alt="" className='w-32 h-32' />
                    <span className="text-xl">Anti Fungal</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={one} alt="" className='w-32 h-32' />
                    <span className="text-xl">Anti Fungal</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={one} alt="" className='w-32 h-32' />
                    <span className="text-xl">Anti Fungal</span>
                </div>
            </div>
        </div>
    )
}

export default Features
