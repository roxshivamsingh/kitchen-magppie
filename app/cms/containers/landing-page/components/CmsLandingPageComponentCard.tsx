import { FaPen } from 'react-icons/fa'
//====================================================================
import { MdDeleteOutline } from "react-icons/md";
import rating from '../../../../../assets/photos/ratings.png'
import { TComponentItem } from '../../../../../types/component'


export default function CmsLandingPageComponentCard(props: TProps) {
    return (<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
        <img className="rounded-t-lg" src={rating} alt="" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.item.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
                {props.item.typography.description}
            </p>
            <div className="flex flex-row justify-between">
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit
                    <FaPen className="ml-2" />
                </button>

                <div className="hidden group-hover:block self-center">
                    <MdDeleteOutline className="text-red-700 text-xl cursor-pointer"
                        onClick={() => {
                            if (props?.onRemove) {
                                props?.onRemove(props.item.id)
                            }
                        }} />

                </div>
            </div>
        </div>
    </div>
    )
}

type TProps = { item: TComponentItem, onRemove?: (e: string) => void }
