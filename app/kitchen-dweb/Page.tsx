import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useAppSelector } from '../../redux'
import {
    Gallery,
    Benefits,
    FAQs,
    Footer,
    BuyingStep,
    Hero,
    Features,
    Clients,
    Video,
} from '.'
import { useFirebaseLandingListener } from '../cms/utils/firebase'
import { PageProgress } from '../../components'
import ToggleButton from './components/ToggleButton'
import Navbar from './components/Navbar'
import Consult from './components/Modals/Consult'
import Contact from './components/Modals/Contact'

export default function Page() {
    useFirebaseLandingListener()
    const { status, value } = useAppSelector((state) => state.Cms.Landing)

    const [toggle, setToggle] = useState(INIT_TOGGLE)
    if (status === 'loading') {
        return <PageProgress />
    } else if (value?.length) {
        return (
            <div>
                <Navbar />
                <Hero
                    item={value?.find((row) => row.name === 'reel-component')}
                    onContactOpen={() => {
                        setToggle((prev) => ({ ...prev, contact: true }))
                    }}
                    onConsultOpen={() => {
                        setToggle((prev) => ({ ...prev, consult: true }))
                    }}
                />
                <Video />
                <Features
                    item={value?.find(
                        (row) => row.name === 'carousel-component'
                    )}
                />
                <ToggleButton
                    onConsultOpen={() => {
                        setToggle((prev) => ({ ...prev, consult: true }))
                    }}
                />
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
                <Gallery
                // item={value?.find(
                //     (row) => row.name === 'explore-gallery-component'
                // )}
                />
                <FAQs
                    item={value?.find((row) => row.name === 'faq-component')}
                />
                <Footer
                    item={value?.find((row) => row.name === 'footer-component')}
                />
                <ToastContainer
                    position="bottom-right"
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
                <Consult
                    open={toggle.consult}
                    onHide={() => {
                        setToggle((prev) => ({ ...prev, consult: false }))
                    }}
                />
                <Contact
                    onHide={() => {
                        setToggle((prev) => ({
                            ...prev,
                            contact: false,
                        }))
                    }}
                    open={toggle.contact}
                />
            </div>
        )
    }
    return <></>
}

const INIT_TOGGLE = {
    consult: false,
    contact: false,
}
