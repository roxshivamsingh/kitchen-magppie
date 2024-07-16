import { useAppSelector } from '../../redux'
import { Gallery, Benefits, FAQs, Footer, BuyingStep, Hero, Features, Clients } from '.'
import { useFirebaseLandingListener } from '../cms/utils/firebase'
import { PageProgress } from '../../components'

export default function LandingPage() {
    useFirebaseLandingListener()
    const { status, value } = useAppSelector((state) => state.Cms.Landing)
    if (status === 'loading') {
        return <PageProgress />
    } else if (value?.length) {
        return (<div>
            <Hero item={value?.find((row) => row.name === 'reel-component')} />
            <Features
                item={value?.find((row) => row.name === 'carousel-component')}
            />
            <Benefits
                item={value?.find((row) => row.name === 'scope-component')}
            />
            <Clients item={value?.find((row) => row.name === 'feedback-component')} />
            <Gallery item={value?.find((row) => row.name === 'explore-gallery-component')} />
            <BuyingStep
                item={value?.find((row) => row.name === 'step-component')}
            />
            <FAQs item={value?.find((row) => row.name === 'faq-component')} />
            <Footer
                item={value?.find((row) => row.name === 'footer-component')}
            />
        </div>)
    }
    return <></>

}
