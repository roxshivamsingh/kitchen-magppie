import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
//====================================================================

import { useAppSelector } from '../../redux'
import {
    Gallery,
    FAQs,
    Footer,
    BuyingStep,
    Hero,
    Clients,
    Video,
} from '.'
import { useFirebaseLandingListener } from '../cms/utils/firebase'
import { PageProgress } from '../../components'
import Navbar from './components/Navbar'
import Consult from './components/Modals/Consult'
import Contact from './components/Modals/Contact'
import About from './containers/About/About'
import ContactSection from './containers/Contact/ContactSection'
import Qualities from './containers/Qualities/Qualities'
import { _LANDING_COMPONENTS } from '../../types'

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
                {/* <Features
                    item={value?.find(
                        (row) => row.name === 'carousel-component'
                    )}
                />
                <ToggleButton
                    onConsultOpen={() => {
                        setToggle((prev) => ({ ...prev, consult: true }))
                    }}
                /> */}
                <About

                    item={_LANDING_COMPONENTS?.find((row) => row.name === 'about-component')}

                />
                <Gallery />
                {/* // item={value?.find( */}
                {/* //     (row) => row.name === 'explore-gallery-component' */}
                {/* // )} */}

                <Qualities />
                {/* <Benefits
                    item={value?.find((row) => row.name === 'scope-component')}
                /> */}
                <Clients
                // item={value?.find(
                //     (row) => row.name === 'feedback-component'
                // )}
                />

                <BuyingStep
                    item={value?.find((row) => row.name === 'step-component')}
                />
                <FAQs
                    item={value?.find((row) => row.name === 'faqs-component')}
                />
                <ContactSection />
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
