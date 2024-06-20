import { Link } from 'react-router-dom'
import Card from './components/Card'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { FaPlus } from 'react-icons/fa'
import { useFirebaseCmsKitchensListener } from '../../utils/firebase/use-firebase-cms-listeners'
import { useAppSelector } from '../../../../redux'
import CustomCircularProgress from '../../../kitchen/components/CustomCircularProgress'
import { useMemo, useState } from 'react'
import _ from 'lodash'

export default function Kitchen() {
    useFirebaseCmsKitchensListener()
    const { loading, value } = useAppSelector((state) => state.Cms.Kitchens);
    const [search, setSearch] = useState('')
    const kitchens = useMemo(() => {
        return value?.filter((item) => search?.length ? _.lowerCase(item.name)?.includes(_.lowerCase(search)) : true)
    }, [search, value])
    return (
        <div>
            <Header />
            <Search placeholder='Search Kitchens..' onChange={(e) => { setSearch(e) }} />
            {loading ? <CustomCircularProgress /> : <div className="mt-10">
                {kitchens?.length ? (<div className="flex gap-2 flex-row justify-center align-middle">

                    {kitchens?.map((item, i) => (
                        <Card item={item} key={i} />
                    ))}
                </div>
                ) : <div className='flex flex-row justify-center h-20 align-middle'>
                    Not found
                </div>}
            </div>}

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <Link to="/cms/kitchen/create"
                    className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
                   flex gap-3
                   "
                >

                    <FaPlus className="w-3 h-3 my-auto" />
                    Add Kitchen
                </Link>
            </div>
        </div>
    )
}
