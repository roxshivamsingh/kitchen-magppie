import { NavLink } from "react-router-dom"
export default function Sidebar() {
    return (
        <>
            <div className="w-70 h-screen text-white bg-transparent flex flex-col items-start p-4 border-l-2">
                <h2 className="text-2xl font-bold mb-4 border-b-2 w-full">
                    MENU
                </h2>
                <div className="mt-6 flex flex-col">
                    <button className="mb-4 text-lg border-b-2 w-full text-start">
                        GET A QUOTE IN 30 MINUTES
                    </button>
                    <button className="mb-2 text-lg border-b-2 w-full text-start">
                        CONTACT US NOW
                    </button>
                </div>

                <NavLink className="mt-60 ml-12 text-lg" to='/sign-in'>
                    MEMBERS LOGIN
                </NavLink>
            </div>
        </>
    )
}
