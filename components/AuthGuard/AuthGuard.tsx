import React, { useMemo } from "react"
import { useFirebaseCmsAuthListener } from "../../app/cms/utils/firebase/use-firebase-cms-listeners"
import { useAppSelector } from "../../redux"
import { Navigate, useLocation } from "react-router-dom"
import _ from "lodash"
import CustomCircularProgress from "../../app/kitchen/components/CustomCircularProgress"

export default function AuthGuard(props: TProps) {

    const isCms = useMemo(() => props.variant === 'cms', [props.variant])

    const location = useLocation()
    useFirebaseCmsAuthListener()

    const user = useAppSelector((state) => _.get(state, `${isCms ? 'Cms' : 'Kitchen'}.Auth`))
    if (user?.loading) {
        return <CustomCircularProgress />
    } else {
        if (isCms) {
            if (user?.value?.email?.length) {
                return props.children
            }
            if (location?.pathname !== '/cms/sign-in')
                return <Navigate to={'/cms/sign-in'} />
            // return <Navigate to={isCms ? '/cms/sign-in' : '/sign-in'} />
        }
        return props.children

    }

}

type TProps = {
    children: React.ReactNode,
    variant?: 'cms' | 'user'
}
