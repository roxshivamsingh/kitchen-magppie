import Fea1 from '../../../assets/photos/more-features/more-fea-1.png'
import Fea2 from '../../../assets/photos/more-features/more-fea-2.png'

const MoreFea = () => {
    return (
        <div className="bg-white p-20">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                <img
                    src={Fea1}
                    alt="Kitchen"
                    className="w-full md:w-1/2 h-auto shadow-lg"
                />
                <div className="mt-8 md:mt-0 md:ml-8 text-[#7b766f]">
                    <h2 className="text-5xl font-medium mb-4">
                        Kitchen as strong as a rock
                    </h2>
                    <p className="text-lg">
                        Magppie Silverstone’s benefits extend far beyond
                        hygiene. This robust material stands resilient against
                        fire, water, heat, scratches, and absorption. It’s a
                        promise of a worry-free culinary experience for your
                        family, blending durability with elegance.
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between text-[#7b766f]">
                <div className="mt-8 md:mt-0 md:mr-8">
                    <h2 className="text-5xl font-medium mb-4">
                        Waterproof and easy to clean
                    </h2>
                    <p className="text-lg">
                        Porcelain Slabs are waterproof and non-porous and the
                        water does not damage the surface or the body of the
                        slab, making cleaning your kitchen a breeze. Simply hose
                        it down for a hygienic and effortless shine.
                    </p>
                </div>
                <img
                    src={Fea2}
                    alt="Cleaning"
                    className="w-full md:w-1/2 h-auto shadow-lg"
                />
            </div>
        </div>
    )
}

export default MoreFea
