import rating from '../../../../../assets/photos/ratings.png'
import { FaEye, FaPen } from 'react-icons/fa'
import { TProject } from '../../../types/Project'

type TProps = {
    item: TProject
    openModal: (id?: string) => void
}

const Card = (props: TProps) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={rating} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.item.name}
                    {/* Noteworthy technology acquisitions 2021 */}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.item.description}
                </p>
                <div className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <div className="flex " role="group">
                        <button
                            type="button"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                        >
                            <FaEye className="w-3 h-3 me-2" />
                            View
                        </button>

                        <button
                            type="button"
                            onClick={() => props.openModal(props.item.id)}
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                        >
                            <FaPen className="w-3 h-3 me-2" />
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
