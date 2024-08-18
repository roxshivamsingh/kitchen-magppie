import { lazy } from "react"
import { RouteObject } from 'react-router-dom'
//====================================================================

import Home from '../containers/home'
import NotFound from '../containers/not-found'
import SignIn from '../containers/sign-in'
import Quote from '../containers/Quote'
// import LandingPage from '../../landing-page/LandingPage'

const Example = lazy(() => import('./../containers/Example'))

const KitchenRoutes = {
    path: '',
    children: [
        {
            element: <Home />,
            index: true
        },
        {
            path: 'not-found',
            element: <NotFound />,
        },
        {
            path: 'quote',
            element: <Quote />,
        },
        {
            path: 'sign-in',
            element: <SignIn />,
        },
        // {
        //     path: 'landing-page',
        //     element: <LandingPage />,
        // },
        {
            path: 'example',
            element: <Example />,
        }
    ]
} as RouteObject

export default KitchenRoutes
