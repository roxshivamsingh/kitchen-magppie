import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Drawer() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (<>
        <div className={`w-70 #3a3939 flex flex-col items-start p-4 border-l-2 fixed top-0 right-0 h-full bg-transparent text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-64`}>
            <div className="flex justify-end">
                <button
                    onClick={handleClose}
                    className="bg-[#c7bda8] text-black font-bold py-1 px-2 rounded"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path></svg>                    </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 w-full">MENU</h2>
            <div className="mt-6 flex flex-col">
                <button className="mb-4 text-lg border-b-2 w-full text-start">
                    GET A QUOTE IN 30 MINUTES
                </button>
                <button className="mb-2 text-lg border-b-2 w-full text-start">
                    CONTACT US NOW
                </button>
            </div>

            <NavLink to="/sign-in" className="mt-80 ml-12 text-lg">
                MEMBERS LOGIN
            </NavLink>
        </div>
        {!isOpen && (
            <button
                onClick={() => { setIsOpen(true) }}
                className="fixed top-4 right-4 bg-[#c7bda8] text-black font-bold py-1 px-2 rounded"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></path></svg>
            </button>
        )}
    </>)
}
