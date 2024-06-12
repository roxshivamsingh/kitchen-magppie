import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../app/kitchen/containers/home'
import NotFound from '../app/kitchen/containers/not-found'
import SignIn from '../app/kitchen/containers/sign-in'
import Stepper from '../app/kitchen/containers/Stepper'
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
                    path: '*',
                    element: <Navigate to="/not-found" replace />,
                },
            ],
        },
        {
            path: 'sign-in',
            element: <SignIn />,
        },
    ])
}
