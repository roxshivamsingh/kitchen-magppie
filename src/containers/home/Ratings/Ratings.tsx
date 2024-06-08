import ratings from "../../../assets/photos/ratings.png"

const Ratings = () => {
    return (
        <div className="bg-white text-[#7b766f]">
            <div className="flex flex-col items-center mb-16">
                <img
                    src={ratings}
                    alt="Kitchen"
                    className="w-full h-auto"
                />
            </div>

            <div className="py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-medium mb-4">
                        Ratings and reviews
                    </h2>
                    <p className="text-lg mb-4">
                        Porcelain Slabs are waterproof and non-porous and the
                        water does not damage the surface or the body of the
                        slab, making cleaning your kitchen a breeze. Simply hose
                        it down for a hygienic and effortless shine.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ratings
