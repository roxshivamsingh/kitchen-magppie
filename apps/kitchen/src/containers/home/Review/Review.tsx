import review from '@repo/assets/photos/'


const Review = () => {
    return (
        <div
            className="relative flex items-center justify-centermin-h-screen bg-cover bg-center min-h-screen"
            style={{
                backgroundImage: `url(${review})`,
            }}
        >
            <div className="text-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
                <h1 className="text-7xl font-light mb-4">
                    For people and planet
                </h1>
                <p className="text-xl font-medium">
                    <strong>Magppie™ Wellness Kitchens</strong> for a healthier
                    you &amp; a sustainable planet. Made from washable, hygienic{' '}
                    <strong>Magppie Silverstone™</strong>, the world's strongest
                    and most hygienic kitchen.
                </p>
            </div>
        </div>
    )
}

export default Review
