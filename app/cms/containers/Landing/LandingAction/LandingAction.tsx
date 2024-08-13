import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { ComponentActionForm } from "../components"
import { useAppSelector } from "../../../../../redux"
import {
    _,
    COMPONENT_META,
    INIT_CUSTOMER_SITE_COMPONENT
} from "../../../../../types"

export default function LandingAction() {
    const params = useParams()
    const values = useAppSelector((state) => state.Cms.Landing.value);
    const currentComponent = values?.find((row) => row.id === _.get(params, 'id', ''))

    const meta = useMemo(() => COMPONENT_META(values), [values])

    return <ComponentActionForm
        item={currentComponent || INIT_CUSTOMER_SITE_COMPONENT}
        meta={meta}
        mode={currentComponent ? 'edit' : 'create'}
    />
}
