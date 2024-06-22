import { RouteObject } from 'react-router-dom'


import AuthGuard from '../../../components/AuthGuard'
import {
    Projects,
    Kitchen,
    SignIn,
    KitchenCreateEdit,
    Home
} from '../containers'

const CmsRoutes = {
    path: 'cms',
    children: [
        {
            element: (
                <AuthGuard variant="cms">
                    <Home />
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
                    <Kitchen />
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
                <SignIn />
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
