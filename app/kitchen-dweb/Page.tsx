import { useAppSelector } from '../../redux'
import {
    // Gallery,
    Benefits,
    // FAQs,
    // Footer,
    BuyingStep,
    Hero,
    Features,
    Clients,
} from '.'
import { useFirebaseLandingListener } from '../cms/utils/firebase'
import { PageProgress } from '../../components'
import ToggleButton from './components/ToggleButton'
import Navbar from './components/Navbar'
// import CustomDumpButton from '../cms/components/Dump/CustomDumpButton'

export default function Page() {
    useFirebaseLandingListener()
    const { status, value } = useAppSelector((state) => state.Cms.Landing)

    if (status === 'loading') {
        return <PageProgress />
    } else if (value?.length) {
        return (
            <div>
                <Navbar />
                <Hero
                // item={value?.find((row) => row.name === 'reel-component')}
                />
                <Features
                    item={value?.find(
                        (row) => row.name === 'carousel-component'
                    )}
                />
                <ToggleButton />
                <Benefits
                    item={value?.find((row) => row.name === 'scope-component')}
                />
                <Clients
                    item={value?.find(
                        (row) => row.name === 'feedback-component'
                    )}
                />

                <BuyingStep
                    item={value?.find((row) => row.name === 'step-component')}
                />
                {/* <Gallery
                    item={value?.find(
                        (row) => row.name === 'explore-gallery-component'
                    )}
                />
                <FAQs
                    item={value?.find((row) => row.name === 'faq-component')}
                />
                <Footer
                    item={value?.find((row) => row.name === 'footer-component')}
                /> */}
            </div>
        )
    }
    return <></>
}
