import PageProgress from '../../components/PageProgress'
import { useAppSelector } from '../../redux'
import { useFirebaseCustomerListener } from '../cms/utils/firebase/customer'
import About from './About'
import Caption from './Caption'
import Hero from './Hero'
import Intro from './Intro'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default function LandingPage() {
    useFirebaseCustomerListener()

    const data = useAppSelector((state) => state.Cms.CustomerSiteComponent)

    if (data.status === 'loading') {
        return <PageProgress />
    }

    if (data?.value?.length)
        return (
            <>
                <Hero
                    data={data.value?.find(
                        (row) => row.name === 'first-component'
                    )}
                />
                <About
                    data={data.value?.find(
                        (row) => row.name === 'planet-component'
                    )}
                />
                <Intro
                    data={data.value?.find(
                        (row) => row.name === 'rating-component'
                    )}
                />
                <Caption
                    data={data.value?.find(
                        (row) => row.name === 'transform-component'
                    )}
                />
                <SectionOne />
                <SectionTwo />
            </>
        )
    return <>Components not found</>
}
