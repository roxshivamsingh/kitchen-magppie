// @ts-nocheck

import React from 'react'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useFirebaseActionAuth } from '../../hooks/firebase/use-firebase-actions'
const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const AuthAction = useFirebaseActionAuth()
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex md:flex-row">
            <div className="hidden md:block md:w-3.8/4 md:h-auto">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source src="" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full md:w-1.2/4 flex items-center justify-center bg-gray-100 min-h-screen">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit((data) => {
                        AuthAction.signIn(data).then((e) => {
                            navigate('/')
                        })
                    })} className="space-y-4">
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
                                {...register('email')}
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
                                {...register('password')}

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

type TFormInput = { email: string, password: string }
const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required')
})
