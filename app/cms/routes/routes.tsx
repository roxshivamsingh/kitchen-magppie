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
import CustomerLayout from '../containers/Landing/CustomerLayout'

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
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'users',
                element: <User />,
            },
            // {
            //     path: '/cms/landing-page',
            //     element: <LandingPage />, // FIXME: To remove this route in future and also container from `cms/landing-page`;
            // },
            {
                path: 'landing',
                element: <CustomerLayout />,
                children: [
                    {
                        path: '',
                        element: (<Suspense fallback={<PageProgress />}><LandingHome /></Suspense>),
                    },
                    {
                        path: 'component/:id/edit',
                        element: <Suspense fallback={<PageProgress />}><LandingAction /></Suspense>,
                    },
                    {
                        path: 'component/create',
                        element: <Suspense fallback={<PageProgress />}><LandingAction /></Suspense>,
                    },
                ]
            },

            {
                path: 'enquiries',
                element: <Suspense fallback={<PageProgress />}><EnquiryPage /></Suspense>,
            },
        ],
    } as RouteObject
}
