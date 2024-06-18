import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../redux"
import _ from "lodash"

export default function AuthGuard(props: TProps) {
    const isCms = props.variant === 'cms'

    const user = useAppSelector((state) => _.get(state, `${isCms ? 'Cms' : 'Kitchen'}.Auth`))

    if (user?.value?.email?.length) {
        return props.children
    }
    return <Navigate to={isCms ? '/cms/sign-in' : '/sign-in'} />
}

type TProps = { children: React.ReactNode, variant?: 'cms' | 'user' }
