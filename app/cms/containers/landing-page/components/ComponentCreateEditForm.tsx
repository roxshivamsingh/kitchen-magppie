import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
//====================================================================

import { INIT_CUSTOMER_SITE_COMPONENT as defaultValues } from '../../../../../types/component'

export default function ComponentCreateEditForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    })
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    return (
        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md overflow-y-scroll">
            {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Order ID</label>
            <input
                type="number"
                {...register('orderId')}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.orderId && <p className="text-red-500 text-xs mt-1">{errors.orderId.message}</p>}
        </div> */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    {...register('name')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <h3 className="text-lg mb-2">Typography</h3>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Main
                </label>
                <input
                    type="text"
                    {...register('typography.main')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.typography?.main && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.typography.main.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Secondary
                </label>
                <input
                    type="text"
                    {...register('typography.secondary')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.typography?.secondary && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.typography.secondary.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Subtitle
                </label>
                <input
                    type="text"
                    {...register('typography.subtitle')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.typography?.subtitle && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.typography.subtitle.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Action
                </label>
                <input
                    type="text"
                    {...register('typography.action')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.typography?.action && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.typography.action.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <input
                    type="text"
                    {...register('typography.description')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.typography?.description && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.typography.description.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Secondary Description
                </label>
                <input
                    type="text"
                    {...register('typography.secondaryDescription')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.typography?.secondaryDescription && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.typography.secondaryDescription.message}
                    </p>
                )}
            </div>

            {/* Links */}
            <h3 className="text-lg mb-2">Links</h3>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Icon
                </label>
                <input
                    type="text"
                    {...register('links.icon')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.links?.icon && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.links.icon.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Background
                </label>
                <input
                    type="text"
                    {...register('links.bg')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.links?.bg && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.links.bg.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Illustration
                </label>
                <input
                    type="text"
                    {...register('links.illustration')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.links?.illustration && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.links.illustration.message}
                    </p>
                )}
            </div>

            {/* Name */}

            {/* Is Gallery */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Is Gallery
                </label>
                <input
                    type="checkbox"
                    {...register('isGallery')}
                    className="mt-1 block w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                {errors.isGallery && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.isGallery.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Create Component
            </button>
        </form>
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

const schema = Yup.object().shape({
    orderId: Yup.number()
        .required('Order ID is required')
        .integer('Order ID must be an integer'),
    typography: typographySchema,
    links: linkSchema,
    name: Yup.string().required('Name is required'),
    isGallery: Yup.boolean(),
    gallery: Yup.array().of(sectionImageItemSchema),
    iconLists: Yup.array().of(sectionImageItemSchema),
})
