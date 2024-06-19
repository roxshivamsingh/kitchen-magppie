import { RouteObject } from "react-router-dom";
import CmsHome from "../containers/Home/Home";
// import CmsHome from "../../cms/Home/Home";

import KitchenCreateEdit from "../containers/kitchens/KitchenCreateEdit/KitchenCreateEdit";
import CmsSignIn from "../containers/auth/SignIn/SignIn";
import CmsKitchen from "../containers/kitchens/Kitchen"
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
