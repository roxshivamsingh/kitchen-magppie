import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../app/kitchen/containers/home'
import NotFound from '../app/kitchen/containers/not-found'
import SignIn from '../app/kitchen/containers/sign-in'
import Stepper from '../app/kitchen/containers/Stepper'
import CmsSignIn from '../app/cms/auth/SignIn/SignIn'
import CmsHome from '../app/cms/Home/Home'
import CmsKitchen from '../app/cms/kitchens/Kitchen'
import KitchenCreateEdit from '../app/cms/kitchens/KitchenCreateEdit/KitchenCreateEdit'
import { CmsSignUp } from '../app/cms/auth'

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            // element: (<BaseLayout />),
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/not-found',
                    element: <NotFound />,
                },
                {
                    path: '/stepper',
                    element: <Stepper />,
                },
                {
                    path: '/cms',
                    element: <CmsHome />,
                },
                {
                    path: '/cms/kitchens',
                    element: <CmsKitchen />,
                },
                {
                    path: '/cms/kitchen/create',
                    element: <KitchenCreateEdit />,
                },
                {
                    path: '/cms/sign-in',
                    element: <CmsSignIn />,
                },
                {
                    path: '/cms/sign-up',
                    element: <CmsSignUp />,
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/not-found" replace />,
        },
        {
            path: 'sign-in',
            element: <SignIn />,
        },
    ])
}
