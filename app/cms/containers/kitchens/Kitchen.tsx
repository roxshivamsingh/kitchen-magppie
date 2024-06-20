import { Link } from 'react-router-dom'
import Card from './components/Card'
import Header from './components/Header'
import Search from './components/Search'
import { FaPlus } from 'react-icons/fa'
import { useFirebaseCmsKitchensListener } from '../../utils/firebase/use-firebase-cms-listeners'
import { useAppSelector } from '../../../../redux'
import CustomCircularProgress from '../../../kitchen/components/CustomCircularProgress'

export default function Kitchen() {
    useFirebaseCmsKitchensListener()
    const { loading, value } = useAppSelector((state) => state.Cms.Kitchens);
    return (
        <div>
            <Header />
            <Search />
            {loading ? <CustomCircularProgress /> : <div className="mt-10">

                <div className="flex gap-2 flex-row justify-center align-middle">

                    {value?.map((item, i) => (
                        <Card item={item} key={i} />
                    ))}
                </div>

            </div>}

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <Link to="/cms/kitchen/create">
                    <button
                        type="button"
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                    >
                        <FaPlus className="w-3 h-3 me-2" />
                        Add Kitchen
                    </button>
                </Link>
            </div>
        </div>
    )
}
