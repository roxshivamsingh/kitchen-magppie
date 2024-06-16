import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../src/containers/home'
import NotFound from '../src/containers/not-found'
import SignIn from '../src/containers/sign-in'
import Stepper from '../src/containers/Stepper'


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
                    element: <Stepper />
                },
                {
                    path: '/cms',
                    element: <CmsHome />,
                },
                {
                    path: '/cms/kitchen',
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
