// import Select from './Select'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useFirebaseCmsProjectAction } from '../../../utils/firebase/projects/actions'
import { useNavigate, useParams } from 'react-router-dom'
import _ from 'lodash'
import { TProject } from '../../../types/Project'
import Select from 'react-select';
import { useAppSelector } from '../../../../../redux'
import { useFirebaseCmsKitchensListener } from '../../../utils/firebase/use-firebase-cms-listeners'

type TProps = { item?: TProject }

const Form = (props: TProps) => {
    const ProjectActions = useFirebaseCmsProjectAction()
    const params = useParams()
    const navigate = useNavigate()

    const schema = yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
        kitchenIds: yup.array().of(yup.string())
    })

    const defaultValues = {
        name: _.get(props, 'item.name', ''),
        description: _.get(props, 'item.description', ''),
        kitchenIds: _.get(props, 'item.kitchenIds', []) as string[]
    }

    const { register, handleSubmit, setValue } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    })

    const onSubmit = handleSubmit((data) => {
        if ('id' in params) {
            ProjectActions.edit({ ...data, id: params.id })
        } else {
            ProjectActions.add(data)
        }
        navigate('/cms/projects')
    })
    useFirebaseCmsKitchensListener()
    const kitchens = useAppSelector((state) => state.Cms.Kitchens.value)
    const options = kitchens?.map((row) => ({ label: row.name, value: row.id }))
    return (
        <form onSubmit={onSubmit}>


            <div className="flex flex-col gap-2 mb-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Select Kitchen
                    </label>
                    <Select
                        isMulti
                        defaultValue={defaultValues?.kitchenIds?.map((id) =>
                            options?.find((option) => option.value === id)
                        )}
                        onChange={(arr) => {


                            setValue('kitchenIds', _.uniq([...defaultValues.kitchenIds, ..._.map(arr, 'value')]))
                            // setSelectedOption(e)
                        }}

                        options={options}
                    />
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Description
                    </label>
                    <textarea
                        {...register('description')}
                        id="description"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        defaultValue={''}
                    />
                </div>
                {/* <div>
                    <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                        required
                    />
                </div>
                <div>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                    >
                        Upload Kitchen Media
                    </label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                    />
                </div> */}
                {/* <div>
                    <Select label="Select Project" />
                </div>
                <div>
                    <Select label="Select Kitchens" />
                </div> */}
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    )
}

export default Form
