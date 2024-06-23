import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
//====================================================================

import PageProgress from "../../../../components/PageProgress"
import { useAppSelector } from "../../../../redux"
import Header from "../Header"

export default function ProtectedRoute() {
    const { pathname } = useLocation()
    const user = useAppSelector(({ Cms }) => Cms.Auth)

    const navigate = useNavigate()
    useEffect(() => {
        if (!user?.loading) {
            if (!user?.value) {
                navigate('/cms/sign-in')
            }
        }
    }, [navigate, user?.loading, user?.value])
    if (user?.loading) {
        return <PageProgress />
    }
    if (user?.value && !GUEST_ROUTES?.includes(pathname)) {
        return <div className="">
            <Header />
            <Outlet />
        </div>
    }
    return <Outlet />

}

const GUEST_ROUTES = ['/cms/sign-in'];
