import Features from './Features/Features'
import Hero from './Hero'
import Benefits from './Benefits/Benefits'
import Clients from './Clients'
import Gallery from './Gallery/Gallery'
import { useAppSelector } from '../../redux'
import { Footer } from "."
export default function LandingPage() {
    const components = useAppSelector((state) => state.Cms.Landing.value);
    // console.log(components)
    return (
        <>
            <Hero />
            <Features />
            <Benefits />
            <Clients />
            <Gallery />
            <Footer item={components?.find((row) => row.name === 'footer-component')} />
        </>
    )
}

