import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../../../redux"
import { ReactNode } from "react"

export default function PrivateRoute(props: TProps) {
    const user = useAppSelector(({ Cms }) => Cms.Auth)
    return (user?.value?.email?.length) ? props.children : <Navigate to='/cms/sign-in' />
}

type TProps = { children: ReactNode }
