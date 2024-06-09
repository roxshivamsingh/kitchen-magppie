import { FC } from 'react'
import { useFirebaseAuth } from './hooks/firebase/use-firebase-listeners'
import Routes from './routes'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { RouteEnum } from "./types/route";
import CustomCircularProgress from './components/CustomCircularProgress'
import { useFirebaseDataUser } from './hooks/firebase/use-firebase-data'

const App: FC = () => {
    useFirebaseAuth()
    const user = useFirebaseDataUser()
    // const navigate = useNavigate()
    // const { pathname } = useLocation()

    // useEffect(() => {
    //     if (!(user.loading || user?.value)) {
    //         if (RouteEnum.SignIn !== pathname)
    //             navigate(`/${RouteEnum.SignIn}`)
    //     }
    // }, [user.loading, user?.value, navigate, pathname])

    // @shivam
    // if route is authenticated or true show array of logged in routes else they should be logged out

    if (user?.loading) {
        return <CustomCircularProgress />
    }
    return <Routes />
}

export default App
