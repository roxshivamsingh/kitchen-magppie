import ContactUs from './ContactUs/ContactUs'
import FAQ from './FAQ/FAQ'
import Features from './Features/Features'
import Hero from './Hero/Hero'
import MoreFea from './MoreFea/MoreFea'
import Ratings from './Ratings/Ratings'
import Review from './Review/Review'

export default function Home() {
    console.log('x')
    return (
        <>
            <Hero />
            <Features />
            <Review />
            <MoreFea />
            <Ratings />
            <ContactUs />
            <FAQ />

        </>
    )
}
