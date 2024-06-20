import { RouteObject } from 'react-router-dom'
import CmsHome from '../containers/Home/Home'
// import CmsHome from "../../cms/Home/Home";

import KitchenCreateEdit from '../containers/kitchens/KitchenCreateEdit/KitchenCreateEdit'
import CmsSignIn from '../containers/auth/SignIn/SignIn'
import CmsKitchen from '../containers/kitchens/Kitchen'
import AuthGuard from '../../../components/AuthGuard'
import Projects from '../containers/projects/Projects'
import CreateProject from '../containers/projects/CreateProject'

const CmsRoutes = {
    path: 'cms',
    children: [
        {
            element: (
                <AuthGuard variant="cms">
                    <CmsHome />
                </AuthGuard>
            ),
            index: true,
        },
        {
            path: 'kitchen',
            element: (
                <AuthGuard variant="cms">
                    <CmsKitchen />
                </AuthGuard>
            ),
        },
        {
            path: 'kitchen/create',
            element: (
                <AuthGuard variant="cms">
                    <KitchenCreateEdit />
                </AuthGuard>
            ),
        },

        {
            path: 'sign-in',
            element: <CmsSignIn />,
        },
        {
            path: '/cms/projects',
            element: <Projects />,
        },
        {
            path: '/cms/project/create',
            element: <CreateProject />,
        },
    ],
} as RouteObject

export default CmsRoutes
