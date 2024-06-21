// import { Link } from 'react-router-dom'
import Card from './components/Card'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { FaPlus } from 'react-icons/fa'
import { useFirebaseCmsKitchensListener } from '../../utils/firebase/use-firebase-cms-listeners'
import { useAppSelector } from '../../../../redux'
import CustomCircularProgress from '../../../kitchen/components/CustomCircularProgress'
import { useMemo, useState } from 'react'
import _ from 'lodash'
import Modal from './components/Modal'

export default function Kitchen() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    useFirebaseCmsKitchensListener()
    const { loading, value } = useAppSelector((state) => state.Cms.Kitchens)
    const [search, setSearch] = useState('')

    const kitchens = useMemo(() => {
        return value?.filter((item) =>
            search?.length
                ? _.lowerCase(item.name)?.includes(_.lowerCase(search))
                : true
        )
    }, [search, value])

    return (
        <div>
            <Header />
            <Search
                placeholder="Search Kitchens.."
                onChange={(e) => {
                    setSearch(e)
                }}
            />
            {loading ? (
                <CustomCircularProgress />
            ) : (
                <div className="mt-10">
                    {kitchens?.length ? (
                        <div className="gap-6 grid grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto">
                            {kitchens?.map((item, i) => (
                                <Card
                                    openModal={openModal}
                                    item={item}
                                    key={i}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-row justify-center h-20 align-middle">
                            Not found
                        </div>
                    )}
                </div>
            )}
            <div
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
                   flex gap-3"
                onClick={openModal}
            >
                <FaPlus className="w-3 h-3 my-auto" />
                Add Kitchen
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    )
}
