import { RouteObject } from 'react-router-dom'

//====================================================================

import {
    Projects,
    Kitchen,
    SignIn,
    KitchenCreateEdit,
    Home,
    User
} from '../containers'
import { useFirebaseCmsAuthListener } from '../utils/firebase'
import { ProtectedRoute } from '../components'

export default function CmsRoutes() {

    useFirebaseCmsAuthListener()
    return ({
        path: 'cms',
        element: <ProtectedRoute />,
        children: [
            {
                element: (<Home />),
                index: true,
            },
            {
                path: 'kitchens',
                element: (<Kitchen />),
            },
            {
                path: 'kitchen/create',
                element: (<KitchenCreateEdit />),
            },
            // {
            //     path: 'kitchen/:id/edit',
            //     element: (<KitchenCreateEdit />),
            // },
            {
                path: 'sign-in',
                element: (<SignIn />),
            },
            {
                path: '/cms/projects',
                element: (<Projects />),
            },
            {
                path: '/cms/users',
                element: (<User />),
            },
        ]
    }) as RouteObject
}
