import { Navigate, useRoutes } from 'react-router-dom'
import KitchenRoutes from '../app/kitchen/routes'
import CmsRoutes from '../app/cms/routes/routes'
import Page from '../app/kitchen-mweb/Page'

export default function Routes() {
    return useRoutes([
        KitchenRoutes,
        CmsRoutes(),

        {
            path: '*',
            element: <Navigate to="/not-found" replace />,
        },
        {
            path: '/landing',
            element: <Page />,
        },
    ])
}
