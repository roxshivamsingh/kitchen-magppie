import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

//====================================================================

import {
    Projects,
    Kitchen,
    SignIn,
    // KitchenCreateEdit,
    Home,
    User,
    // LandingPage,
} from '../containers'
import { useFirebaseCmsAuthListener } from '../utils/firebase'
import { ProtectedRoute } from '../components'
import { PageProgress } from '../../../components'
import CustomerLayout from '../containers/SiteComponent/components/CustomerLayout'

const SiteComponentAction = lazy(() => import('../containers/SiteComponent/pages/SiteComponentAction'))
const SiteComponentDashboard = lazy(() => import('../containers/SiteComponent/pages/SiteComponentDashboard'))
const EnquiryDashboard = lazy(() => import('../containers/enquiries/Page'))

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
            // {
            //     path: 'kitchen/create',
            //     element: <KitchenCreateEdit />,
            // },
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
                path: 'site/components',
                element: <CustomerLayout />,
                children: [
                    {
                        path: '',
                        element: (<Suspense fallback={<PageProgress />}><SiteComponentDashboard /></Suspense>),
                    },
                    {
                        path: ':id/edit',
                        element: <Suspense fallback={<PageProgress />}><SiteComponentAction /></Suspense>,
                    },
                    {
                        path: 'create',
                        element: <Suspense fallback={<PageProgress />}><SiteComponentAction /></Suspense>,
                    },
                ]
            },

            {
                path: 'enquiries',
                element: <Suspense fallback={<PageProgress />}><EnquiryDashboard /></Suspense>,
            },
        ],
    } as RouteObject
}
