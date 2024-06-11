import { Drawer } from "flowbite-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Icon } from "@iconify/react"
export default function Sidebar() {

    const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(true)

    return (<>

        {!isLoginDrawerOpen && (<div className="absolute right-2 top-2 bg-[#434343] rounded-2xl p-1 text-white cursor-pointer"
            onClick={() => { setIsLoginDrawerOpen(true) }}
        >
            <Icon icon='material-symbols:menu' width={40} />
        </div>)}
        <Drawer open={isLoginDrawerOpen} onClose={() => { setIsLoginDrawerOpen(false) }}
            className="w-70 h-screen  bg-transparent p-4 border-l-2"
            position="right"
        >
            {/* <Drawer.Header
            className="text-2xl font-bold mb-4 border-b-2 w-full"
            title="MENU"
            titleIcon={() => <Icon icon='tabler:menu-deep' />}
            /> */}
            <Drawer.Items className="text-white flex flex-col items-start ">
                <h2 className="text-2xl font-bold mb-4 border-b-2 w-full">
                    MENU
                </h2>
                <div className="mt-6 flex flex-col">
                    <NavLink className="mb-4 text-lg border-b-2 w-full text-start" to='/stepper'>
                        GET A QUOTE IN 30 MINUTES
                    </NavLink>
                    <button className="mb-2 text-lg border-b-2 w-full text-start">
                        CONTACT US NOW
                    </button>
                </div>

                <NavLink className="mt-60 ml-12 text-lg" to='/sign-in'>
                    MEMBERS LOGIN
                </NavLink>
            </Drawer.Items>
        </Drawer>
    </>
    )
}
