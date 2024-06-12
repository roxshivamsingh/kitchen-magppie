import { Drawer } from "flowbite-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Icon } from "@iconify/react"
import { SignInForm } from "../../../sign-in/sign-in"
export default function Sidebar() {

    const [toggle, setToggle] = useState({ main: true, login: false })

    const renderMain = (<div className=" h-screen  bg-transparent p-4 border-l-2"
    >
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

        <div className="mt-60 text-lg cursor-pointer text-center"
            onClick={() => { setToggle((prev) => ({ ...prev, login: true })) }}
        >
            MEMBERS LOGIN
        </div>

    </div>)
    return (<>

        {!toggle.main && (<div className="absolute right-2 top-2 bg-[#434343] rounded-2xl p-1 text-white cursor-pointer"
            onClick={() => { setToggle((prev) => ({ ...prev, main: true })) }}
        >
            <Icon icon='material-symbols:menu' width={40} />
        </div>)}
        <Drawer open={toggle.main}
            backdrop={toggle.login}
            className=" bg-transparent p-0"

            onClose={() => { setToggle({ login: false, main: false }) }}

            position="right"
        >
            {/* <Drawer.Header
            className="text-2xl font-bold mb-4 border-b-2 w-full"
            title="MENU"
            titleIcon={() => <Icon icon='tabler:menu-deep' />}
            /> */}
            <Drawer.Items className="text-white flex flex-col items-start"

            >

                <div className={`grid ${toggle.login ? 'grid-cols-2' : ''}`}>
                    {toggle.login && (<div className="bg-white text-black h-screen w-96 p-3 flex flex-col justify-center transition-all">
                        <SignInForm />
                    </div>
                    )}

                    {renderMain}
                </div>

            </Drawer.Items>
        </Drawer>
    </>
    )
}
