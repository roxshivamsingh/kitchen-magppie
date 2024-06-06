const Sidebar = () => {
    return (
        <div className="w-70 h-screen #3a3939 text-white flex flex-col items-start p-4 border-l-2">
            <h2 className="text-2xl font-bold mb-4 border-b-2 w-full">MENU</h2>
            <div className="mt-6 flex flex-col">
                <button className="mb-4 text-lg border-b-2 w-full text-start">
                    GET A QUOTE IN 30 MINUTES
                </button>
                <button className="mb-2 text-lg border-b-2 w-full text-start">
                    CONTACT US NOW
                </button>
            </div>
            <button className="mt-80 ml-12 text-lg">MEMBERS LOGIN</button>
        </div>
    )
}

export default Sidebar
