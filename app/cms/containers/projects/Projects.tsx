import { FaPlus } from 'react-icons/fa'
import Card from './components/Card'
import Header from "../../components/Header"
import Search from './../../components/Search'
import { Link } from 'react-router-dom'
import { useFirebaseCmsProjectsListener } from '../../utils/firebase/use-firebase-cms-listeners'
import { useAppSelector } from '../../../../redux'
import { useMemo, useState } from 'react'
import _ from 'lodash'
import CustomCircularProgress from '../../../kitchen/components/CustomCircularProgress'

export default function Projects() {
    useFirebaseCmsProjectsListener()
    const { loading, value } = useAppSelector((state) => state.Cms.Projects);
    const [search, setSearch] = useState('')

    const projects = useMemo(() => {
        return value?.filter((item) => search?.length ? _.lowerCase(item.name)?.includes(_.lowerCase(search)) : true)
    }, [search, value])

    return (<div>
        <Header />
        <Search placeholder='Search Projects..' onChange={(e) => { setSearch(e) }} />
        <div className="mt-10">
            {loading ? <CustomCircularProgress /> : <div className="mt-10">
                {projects?.length ? (<div className="flex gap-2 flex-row justify-center align-middle">

                    {projects?.map((item, i) => (
                        <Card item={item} key={i} />
                    ))}
                </div>
                ) : <div className='flex flex-row justify-center h-20 align-middle'>
                    Not found
                </div>}
            </div>}
        </div>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <Link to="/cms/project/create"
                className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
                                flex gap-3
                                "
            >
                <FaPlus className="w-3 h-3 my-auto" />
                Add Project
            </Link>
        </div>
    </div>
    )
}

