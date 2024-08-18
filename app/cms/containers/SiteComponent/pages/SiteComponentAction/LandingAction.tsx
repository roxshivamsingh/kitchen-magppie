import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { ComponentActionForm } from "../../components"
import { useAppSelector } from "../../../../../../redux"
import {
    _,
    COMPONENT_META,
    ComponentModeEnum,
    INIT_CUSTOMER_SITE_COMPONENT
} from "../../../../../../types"

export default function LandingAction() {
    const params = useParams()
    const { value } = useAppSelector((state) => state.Cms.Landing);

    const data = useMemo(() => {
        const item = value?.find((row) => row.id === _.get(params, 'id', ''))
        return ({
            item: item || INIT_CUSTOMER_SITE_COMPONENT,
            meta: COMPONENT_META(value),
            mode: item ? ComponentModeEnum.Edit : ComponentModeEnum.Create
        })
    }, [params, value])

    return <ComponentActionForm item={data.item} meta={data.meta} mode={data.mode} />
}
