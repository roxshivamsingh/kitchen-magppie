import { useFormContext } from "react-hook-form"
import { TComponentLink, TComponentMediaItem } from "../../../../../types"
import { FormToggle } from "../../../components"
// import { useCallback } from "react"
// import _ from "../../../../../types/lodash"
import { ImageInput } from "../../../../../components"

export default function FormViewPortMedia(props: TProps) {
    console.log(props)
    const methods = useFormContext<TViewPortMedia>()
    const { formState: { errors }, watch, setValue } = methods
    const values = watch()
    console.log(errors)
    // const renderErrorMessage = useCallback((field: string) => {
    //     if (_.get(errors, field)) {
    //         return <p className="text-red-500 text-xs mt-1">
    //             {_.get(errors, `${field}.message`)}
    //         </p>
    //     }
    //     return ''
    // }, [errors])

    return <div className="flex flex-col gap-2">

        <div className="">
            {/* <div className="font-bold">Links</div> */}
            <ImageInput
                label='Links'
                values={values.links.icon?.length ? [values.links.icon] : []}
                path={`customer-site-components/icons`}
                onSuccess={(e) => {
                    setValue('links.icon', e[0])
                }}
            />
        </div>
        <div className="flex gap-2">
            <div className="font-bold">Gallery</div>
            <div>

                <FormToggle checked={values.isGallery} onToggle={(isGallery) => {
                    console.log(isGallery)
                    setValue('isGallery', isGallery)
                }} />
            </div>
        </div>
        {values.isGallery && (<div className="">
            <ImageInput
                // label='Gallery'
                values={values.gallery?.length ? values.gallery?.map((row) => row.link) : []}
                path={`customer-site-components/gallery`}
                onSuccess={(e) => {
                    console.log(e)
                    // setValue('links.icon', e[0])
                }}
            />
        </div>)}

        {/* {renderErrorMessage('links.icon.message')} */}

    </div>
}
type TProps = { variant: 'desktop' | 'mobile' }

type TViewPortMedia = {
    links: TComponentLink,
    icons: TComponentMediaItem[],
    gallery: TComponentMediaItem[],
    isGallery: boolean
}
