import { RouteObject } from 'react-router-dom'

//====================================================================

import {
    Projects,
    Kitchen,
    SignIn,
    KitchenCreateEdit,
    Home,
    User,
    LandingHome,
    LandingPage,
} from '../containers'
import { useFirebaseCmsAuthListener } from '../utils/firebase'
import { ProtectedRoute } from '../components'
import EnquiryPage from '../containers/enquiries/Page'

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
            {
                path: '/cms/landing-page',
                element: <LandingPage />, // FIXME: To remove this route in future and also container from `cms/landing-page`;
            },
            {
                path: '/cms/landing',
                element: <LandingHome />,
            },
            {
                path: '/cms/enquiries',
                element: <EnquiryPage />,
            },
        ],
    } as RouteObject
}
