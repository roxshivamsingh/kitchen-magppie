import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../app/kitchen/containers/home'
import NotFound from '../app/kitchen/containers/not-found'
import SignIn from '../app/kitchen/containers/sign-in'
import Stepper from '../app/kitchen/containers/Stepper'
import CmsSignIn from '../app/cms/containers/SignIn/SignIn'
import CmsHome from '../app/cms/containers/Home/Home'
import CmsKitchen from '../app/cms/containers/Kitchen/Kitchen'
import KitchenCreateEdit from '../app/cms/containers/KitchenCreateEdit'


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
