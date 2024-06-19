import { RouteObject } from "react-router-dom";
import CmsHome from "../containers/Home/Home";
import KitchenCreateEdit from "../kitchens/KitchenCreateEdit";
import CmsSignIn from "../auth/SignIn";
import CmsKitchen from "../kitchens/Kitchen"
import AuthGuard from "../../../components/AuthGuard";
const CmsRoutes = {
    path: 'cms',
    children: [
        {
            element: (<AuthGuard variant="cms">
                <CmsHome />
            </AuthGuard>),
            index: true,
        },
        {
            path: 'kitchen',
            element: (<AuthGuard variant="cms">
                <CmsKitchen />
            </AuthGuard>),
        },
        {
            path: 'kitchen/create',
            element: (<AuthGuard variant="cms">
                <KitchenCreateEdit />
            </AuthGuard>),
        },

        {
            path: 'sign-in',
            element: <CmsSignIn />,
        },
    ]
} as RouteObject

export default CmsRoutes;
