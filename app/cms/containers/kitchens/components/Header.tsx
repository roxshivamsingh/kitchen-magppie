import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="bg-white border-gray-200 border-b-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
                        Magppie
                    </span>
                </Link>
                <p className="font-medium flex flex-col p-0 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                    Welcome, User
                </p>
            </div>
        </nav>
    )
}

export default Header
