import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

//====================================================================

import {
    Projects,
    Kitchen,
    SignIn,
    KitchenCreateEdit,
    Home,
    User,
    // LandingPage,
} from '../containers'
import { useFirebaseCmsAuthListener } from '../utils/firebase'
import { ProtectedRoute } from '../components'
import { PageProgress } from '../../../components'

const LandingAction = lazy(() => import('../containers/Landing/LandingAction'))
const LandingHome = lazy(() => import('../containers/Landing/LandingHome'))
const EnquiryPage = lazy(() => import('../containers/enquiries/Page'))

export default function CmsRoutes() {
    useFirebaseCmsAuthListener()
    return {
        path: 'cms',
        element: <ProtectedRoute />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: 'kitchens',
                element: <Kitchen />,
            },
            {
                path: 'kitchen/create',
                element: <KitchenCreateEdit />,
            },
            // {
            //     path: 'kitchen/:id/edit',
            //     element: (<KitchenCreateEdit />),
            // },
            {
                path: 'sign-in',
                element: <SignIn />,
            },
            {
                path: '/cms/projects',
                element: <Projects />,
            },
            {
                path: '/cms/users',
                element: <User />,
            },
            // {
            //     path: '/cms/landing-page',
            //     element: <LandingPage />, // FIXME: To remove this route in future and also container from `cms/landing-page`;
            // },
            {
                path: '/cms/landing',
                element: <Suspense fallback={<PageProgress />}><LandingHome /></Suspense>,

            },
            {
                path: '/cms/landing/component/:id/edit',
                element: <Suspense fallback={<PageProgress />}><LandingAction /></Suspense>,
            },
            {
                path: '/cms/landing/component/create',
                element: <Suspense fallback={<PageProgress />}><LandingAction /></Suspense>,
            },
            {
                path: '/cms/enquiries',
                element: <Suspense fallback={<PageProgress />}><EnquiryPage /></Suspense>,
            },
        ],
    } as RouteObject
}
