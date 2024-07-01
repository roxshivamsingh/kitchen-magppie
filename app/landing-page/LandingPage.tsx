import PageProgress from '../../components/PageProgress'
import { useAppSelector } from '../../redux'
import { useFirebaseCustomerListener } from '../cms/utils/firebase/customer/use-firebase-customer-listeners'
import About from './About'
import Caption from './Caption'
import Hero from './Hero'
import Intro from './Intro'

export default function LandingPage() {

    useFirebaseCustomerListener()
    const data = useAppSelector((state) => state.Cms.CustomerSiteComponent);

    if (data.status === 'loading') {
        return <PageProgress />
    }

    return (
        <>
            <Hero data={data.value?.find((row) => row.value === 'first-component')} />
            <About
                data={data.value?.find((row) => row.value === 'planet-component')}
            />
            <Intro data={data.value?.find((row) => row.value === 'rating-component')} />
            <Caption
                data={data.value?.find((row) => row.value === 'transform-component')}
            />
        </>
    )
}

