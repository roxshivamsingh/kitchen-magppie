import { FaPlus } from 'react-icons/fa'
import Card from './components/Card'
import Header from './components/Header'
import Search from './components/Search'

const Projects = () => {
    return (
        <div>
            <Header />
            <Search />
            <div className="mt-10">
                <Card />
            </div>
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <button
                    type="button"
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                >
                    <FaPlus className="w-3 h-3 me-2" />
                    Add Project
                </button>
            </div>
        </div>
    )
}

export default Projects
