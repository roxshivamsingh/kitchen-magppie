import Clients from './Clients'
import Gallery from './Gallery/Gallery'
import { useAppSelector } from '../../redux'
import { Benefits, FAQs, Footer, BuyingStep, Hero, Features } from "."
export default function LandingPage() {
    const items = useAppSelector((state) => state.Cms.Landing.value);
    console.log(items)
    return (<>
        <Hero item={items?.find((row) => row.name === 'reel-component')} />
        <Features item={items?.find((row) => row.name === 'carousel-component')} />
        <Benefits />
        <Clients />
        <Gallery />
        <BuyingStep item={items?.find((row) => row.name === 'step-component')} />
        <FAQs item={items?.find((row) => row.name === 'faq-component')} />
        <Footer item={items?.find((row) => row.name === 'footer-component')} />
    </>)
}

