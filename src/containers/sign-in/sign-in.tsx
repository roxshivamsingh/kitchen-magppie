// @ts-nocheck

import React from 'react'
import kitchenlogin from '../../assets/videos/kitchen-login.mp4'
// import { useForm, SubmitHandler } from 'react-hook-form'

// type Inputs = {
//     email: string
//     passowrd: string
// }

const Login: React.FC = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm<Inputs>()

    // const handleSubmit = (SubmitHandler<Inputs> = (
    //     event: React.FormEvent,
    //     data
    // ) => {
    //     event.preventDefault()
    //     console.log(data)
    // })

    return (
        <div className="min-h-screen flex md:flex-row">
            <div className="hidden md:block md:w-3.8/4 md:h-auto">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source src={kitchenlogin} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full md:w-1.2/4 flex items-center justify-center bg-gray-100 min-h-screen">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit="" className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
