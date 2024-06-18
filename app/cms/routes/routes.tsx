import { RouteObject } from "react-router-dom";
import CmsHome from "../containers/Home/Home";
import KitchenCreateEdit from "../kitchens/KitchenCreateEdit";
import CmsSignIn from "../auth/SignIn";
import CmsKitchen from "../kitchens/Kitchen"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
const CmsRoutes = {
    path: 'cms',
    children: [
        {
            element: (<PrivateRoute>
                <CmsHome />
            </PrivateRoute>),
            index: true,
        },
        {
            path: 'kitchen',
            element: (<PrivateRoute>
                <CmsKitchen />
            </PrivateRoute>),
        },
        {
            path: 'kitchen/create',
            element: (<PrivateRoute>
                <KitchenCreateEdit />
            </PrivateRoute>),
        },

        {
            path: 'sign-in',
            element: <CmsSignIn />,
        },
    ]
} as RouteObject

export default CmsRoutes;
