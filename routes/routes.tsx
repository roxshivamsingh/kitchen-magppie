import { Navigate, useRoutes } from 'react-router-dom'
import KitchenRoutes from '../app/kitchen/routes'
import CmsRoutes from '../app/cms/routes/routes'
import MPage from '../app/kitchen-mweb/Page'
import DPage from '../app/kitchen-dweb/Page'
import { useMedia } from 'react-use';
export default function Routes() {
    const isPortrait = useMedia('(orientation: portrait)');
    return useRoutes([
        KitchenRoutes,
        CmsRoutes(),
        {
            path: '*',
            element: <Navigate to="/not-found" replace />,
        },
        {
            path: '/landing',
            element: isPortrait ? <MPage /> : <DPage />,
        },
        {
            path: '/mweb',
            element: <MPage />,
        },
        {
            path: '/dweb',
            element: <DPage />,
        },
    ])
}
