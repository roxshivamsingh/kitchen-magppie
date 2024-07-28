import { useAppSelector } from '../../redux'
import {
    // Gallery,
    // Benefits,
    FAQs,
    Footer,
    BuyingStep,
    Hero,
    // Features,
    // Clients,
} from '.'
import { useFirebaseLandingListener } from '../cms/utils/firebase'
import { PageProgress } from '../../components'
// import ToggleButton from './components/ToggleButton'
import { ToastContainer } from 'react-toastify'
import Consult from './components/Modals/Consult'
import { useState } from 'react'
import { Video } from './containers/VideoSection'
import About from './containers/About/About'
import { Gallery } from './containers/Gallery'
import Qualities from './containers/Qualities/Qualities'
import { Clients } from './containers/Clients'
// import CustomDumpButton from '../cms/components/Dump/CustomDumpButton'

export default function Page() {
    useFirebaseLandingListener()
    const { status, value } = useAppSelector((state) => state.Cms.Landing)
    const [toggle, setToggle] = useState({ consult: false, contact: false })

    if (status === 'loading') {
        return <PageProgress />
    } else if (value?.length) {
        return (
            <div>
                <Hero
                    item={value?.find((row) => row.name === 'reel-component')}
                />
                <Video />
                {/* <Features
                    item={value?.find(
                        (row) => row.name === 'carousel-component'
                    )}
                /> */}
                {/* <ToggleButton
                    onConsultOpen={() => {
                        setToggle((prev) => ({ ...prev, consult: true }))
                    }}
                /> */}
                <About />
                <Gallery />
                <Qualities />
                {/* <Benefits
                    item={value?.find((row) => row.name === 'scope-component')}
                /> */}
                <Clients />
                {/* <Gallery
                    item={value?.find(
                        (row) => row.name === 'explore-gallery-component'
                    )}
                /> */}
                <BuyingStep
                    item={value?.find((row) => row.name === 'step-component')}
                />
                <FAQs
                    item={value?.find((row) => row.name === 'faqs-component')}
                />
                <Footer
                    item={value?.find((row) => row.name === 'footer-component')}
                />
                <Consult
                    open={toggle.consult}
                    onHide={() => {
                        setToggle((prev) => ({ ...prev, consult: false }))
                    }}
                />

                <ToastContainer
                    position="bottom-left"
                    className="h-20 text-4xl p-10 w-full"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        )
    }
    return <></>
}
