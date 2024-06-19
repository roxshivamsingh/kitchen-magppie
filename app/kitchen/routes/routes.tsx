import { RouteObject } from 'react-router-dom'
import Home from '../containers/home'
import NotFound from '../containers/not-found'
import SignIn from '../containers/sign-in'
import Quote from '../containers/Quote'
import AuthGuard from "../../../components/AuthGuard"
const KitchenRoutes = {
    path: '',
    children: [
        {
            element: <AuthGuard><Home /></AuthGuard>,
            index: true
        },
        {
            path: 'not-found',
            element: <NotFound />,
        },
        {
            path: 'quote',
            element: <AuthGuard><Quote /></AuthGuard>,

        },
        {
            path: 'sign-in',
            element: <SignIn />,
        }
    ]
} as RouteObject

export default KitchenRoutes
