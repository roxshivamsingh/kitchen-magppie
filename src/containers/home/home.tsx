import ContactUs from './ContactUs/ContactUs'
import Features from './Features/Features'
import Hero from './Hero/Hero'
import MoreFea from './MoreFea/MoreFea'
import Ratings from './Ratings/Ratings'
import Review from './Review/Review'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Review />
            <MoreFea />
            <Ratings />
            <ContactUs />
        </>
    )
}

export default Home
