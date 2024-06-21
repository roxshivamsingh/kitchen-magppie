import { RouteObject } from 'react-router-dom'
import CmsHome from '../containers/Home/Home'
// import CmsHome from "../../cms/Home/Home";

import KitchenCreateEdit from '../containers/kitchens/KitchenCreateEdit/KitchenCreateEdit'
import CmsSignIn from '../containers/auth/SignIn/SignIn'
import CmsKitchen from '../containers/kitchens/Kitchen'
import AuthGuard from '../../../components/AuthGuard'
import Projects from '../containers/projects/Projects'
// import CreateEditProject from '../containers/projects/CreateEditProject'

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
        // {
        //     path: 'home',
        //     element: (
        //         <AuthGuard variant="cms">
        //             <CmsHome />
        //         </AuthGuard>
        //     ),
        // },
        {
            path: 'kitchens',
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
            path: 'kitchen/:id/edit',
            element: (
                <AuthGuard variant="cms">
                    <KitchenCreateEdit />
                </AuthGuard>
            ),
        },

        {
            path: 'sign-in',
            element: <AuthGuard variant='cms'>
                <CmsSignIn />
            </AuthGuard>,
        },
        {
            path: '/cms/projects',
            element: (
                <AuthGuard variant="cms">
                    <Projects />
                </AuthGuard>
            ),
        },
        // {
        //     path: 'project/create',
        //     element: <CreateEditProject />,
        // },
        // {
        //     path: 'project/:id/edit',
        //     element: <CreateEditProject />,
        // },
    ],
} as RouteObject

export default CmsRoutes
