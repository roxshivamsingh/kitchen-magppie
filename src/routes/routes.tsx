import { Navigate, useRoutes } from "react-router-dom";
import Home from "../containers/home";
import NotFound from "../containers/not-found";
import SignIn from "../containers/sign-in";


export default function Routes() {

    return useRoutes([
        {
            path: "/",
            // element: (<BaseLayout />),
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/not-found',
                    element: <NotFound />
                },
                {
                    path: '*',
                    element: <Navigate to="/not-found" replace />
                },
            ],
        },
        {
            path: 'sign-in',
            element: <SignIn />
        }
    ]);
}