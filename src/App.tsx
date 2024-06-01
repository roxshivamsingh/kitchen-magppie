import { useFirebaseAuth } from "./hooks/firebase/use-firebase-listeners"
import Routes from "./routes"
import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { RouteEnum } from "./types/route";
import CustomCircularProgress from "./components/custom-circular-progress";
export default function App() {

    const auth = useFirebaseAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        if (!(auth.loading || auth?.value)) {
            if (RouteEnum.SignIn !== pathname)
                navigate(`/${RouteEnum.SignIn}`)
        }
    }, [auth.loading, auth?.value, navigate, pathname])



    if (auth?.loading) {

        return <CustomCircularProgress />
    }
    return <Routes />
}

