import * as Yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
//====================================================================

import { INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY, TComponentItem, TComponentMeta } from '../../../../../types'
import { CustomToggle, ImageInput } from '../../../../../components'
import { MinimalAccordion } from '../../../components'
import { useCallback, useMemo } from 'react'
import _ from '../../../../../types/lodash'
import FormTypography from './FormTypography'
import { MdDeleteOutline } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";

export default function ComponentCreateEditForm(props: TProps) {
    const { meta, item } = props;
    const schema = Yup.object().shape({
        orderId: Yup.number()
            .min(0, 'The number must be non-negative')
            .required('Order ID is required')
            .integer('Order ID must be an integer')
            .test('checkValidOrderId',
                'The given Order ID is invalid.',
                (currentId) => {
                    return !meta.order.used?.filter((previousId) => previousId !== item.orderId)?.includes(currentId)
                }),
        typography: typographySchema,
        links: linkSchema,
        items: Yup.array().of(typographySchema).required(),
        name: Yup.string().required('Name is required'),
        isGallery: Yup.boolean(),
        gallery: Yup.array().of(sectionImageItemSchema),
        iconLists: Yup.array().of(sectionImageItemSchema),
    })
    const defaultValues = useMemo(() => ({
        ...item,
        orderId: item.orderId < 0 ? meta.order.next : item.orderId,
    }), [item, meta.order.next])
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    })
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = methods

    const values = methods.watch()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    const renderErrorMessage = useCallback((field: string) => {
        if (_.get(errors, field)) {
            return <p className="text-red-500 text-xs mt-1">
                {_.get(errors, `${field}.message`)}
            </p>
        }
        return ''
    }, [errors])



    return (
        <FormProvider {...methods}>

            <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md overflow-y-scroll h-[80vh]">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Order ID
                    </label>
                    <input
                        type="text"
                        {...register('orderId')}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {renderErrorMessage('orderId')}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        {...register('name')}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {renderErrorMessage('name')}
                </div>
                <MinimalAccordion isExpanded title='Typography'>
                    <FormTypography />
                </MinimalAccordion>
                <MinimalAccordion isExpanded title='Items'>
                    <div className="flex flex-row-reverse">
                        <MdPostAdd className='text-xl text-blue-500 cursor-pointer'
                            onClick={() => {
                                setValue('items', [...values.items,
                                    INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY
                                ])
                            }}
                        />
                    </div>
                    {values?.items.map((typography, i) => {

                        console.log(typography)
                        return (<div key={i}>
                            <div className="flex flex-row gap-2">
                                <div className='text-xl text-gray-500 italic'>#{i + 1}.</div>
                                <div className='w-full'>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Main
                                        </label>
                                        <input
                                            type="text"
                                            {...register(`items.${i}.main`)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {renderErrorMessage(`items.${i}.main`)}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Secondary
                                        </label>
                                        <input
                                            type="text"
                                            {...register(`items.${i}.secondary`)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {renderErrorMessage(`items.${i}.secondary`)}

                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Subtitle
                                        </label>
                                        <input
                                            type="text"
                                            {...register(`items.${i}.subtitle`)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {renderErrorMessage(`items.${i}.subtitle`)}

                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Action
                                        </label>
                                        <input
                                            type="text"
                                            {...register(`items.${i}.action`)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {renderErrorMessage(`items.${i}.action`)}

                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            {...register(`items.${i}.description`)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {renderErrorMessage(`items.${i}.description`)}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Secondary Description
                                        </label>
                                        <input
                                            type="text"
                                            {...register(`items.${i}.secondaryDescription`)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {renderErrorMessage(`items.${i}.secondaryDescription`)}
                                    </div>
                                </div>

                                <div >
                                    <MdDeleteOutline className='text-xl text-red-700' />
                                </div>

                            </div>
                        </div>)
                    })}
                </MinimalAccordion>

                {/* Links */}
                <MinimalAccordion
                    isExpanded
                    title='Links'
                >
                    <div className=''>
                        <ImageInput
                            label='Icon'
                            values={values.links.icon?.length ? [values.links.icon] : []}
                            path={`customer-site-components/icons`}
                            onSuccess={(e) => {
                                setValue('links.icon', e[0])
                            }}
                        />
                        {renderErrorMessage('links.icon.message')}

                    </div>

                    <div className="mb-4">
                        <ImageInput
                            values={values.links.bg?.length ? [values.links.bg] : []}
                            label='Background'
                            path={`customer-site-components/backgrounds`}
                            onSuccess={(e) => {
                                setValue('links.bg', e[0])
                            }}
                        />
                        {renderErrorMessage('errors.links.bg')}
                    </div>

                    <div className="mb-4">
                        <ImageInput
                            label='Illustration'
                            values={values.links.illustration?.length ? [values.links.illustration] : []}

                            path={`customer-site-components/illustrations`}
                            onSuccess={(e) => {
                                setValue('links.illustration', e[0] || '')
                            }}
                        />
                        {renderErrorMessage('links.illustration')}
                    </div>

                </MinimalAccordion>
                {/* <h3 className="text-lg mb-2">Links</h3> */}


                {/* Name */}

                {/* Is Gallery */}
                <div className="mb-4">


                    <div className="flex gap-3">
                        Is Gallery

                        <CustomToggle
                            onChange={(e) => {

                                console.log(e)
                            }} />
                        <input
                            type="checkbox"
                            {...register('isGallery')}
                            className="mt-1 block w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                    </div>
                    {renderErrorMessage('isGallery')}
                </div>

                <button
                    type="submit"
                    className="w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create Component
                </button>
            </form>
        </FormProvider>

    )
}

const typographySchema = Yup.object().shape({
    main: Yup.string(),
    secondary: Yup.string(),
    subtitle: Yup.string(),
    action: Yup.string(),
    description: Yup.string(),
    secondaryDescription: Yup.string(),
})

const linkSchema = Yup.object().shape({
    icon: Yup.string().url('Not a valid URL'),
    bg: Yup.string().url('Not a valid URL'),
    illustration: Yup.string().url('Not a valid URL'),
})

const sectionImageItemSchema = Yup.object().shape({
    link: Yup.string().url('Not a valid URL'),
    typography: typographySchema,
})



type TProps = { item: TComponentItem, meta: TComponentMeta }
