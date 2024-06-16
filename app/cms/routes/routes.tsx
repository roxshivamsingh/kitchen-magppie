import { RouteObject } from "react-router-dom";
import CmsHome from "../containers/Home/Home";
import KitchenCreateEdit from "../containers/KitchenCreateEdit";
import CmsSignIn from "../containers/SignIn/SignIn";
import CmsKitchen from "./../containers/Kitchen"
const CmsRoutes = {
    path: 'cms',
    // element: (<BaseLayout />),
    children: [
        {
            element: <CmsHome />,
            index: true
        },
        {
            path: 'kitchen',
            element: <CmsKitchen />,
        },
        {
            path: 'kitchen/create',
            element: <KitchenCreateEdit />,
        },
        {
            path: 'sign-in',
            element: <CmsSignIn />,
        },
    ]
} as RouteObject

export default CmsRoutes;
