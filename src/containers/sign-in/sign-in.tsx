import { useCallback } from 'react'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useFirebaseActionAuth } from '../../hooks/firebase/use-firebase-actions'
import { Icon } from "@iconify/react"
import _ from 'lodash'

export default function SignIn() {
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
        watch
    } = useForm({ resolver: yupResolver(schema) })
    const AuthAction = useFirebaseActionAuth()
    const navigate = useNavigate()
    const values = watch();

    const isError = !!_.keys(errors).length
    const helperText = (name: 'email' | 'password') => {

        return <small className='text-xs text-red-500'>{'root' in errors ? 'Invalid Credentials' : _.get(errors, `${name}.message`)}</small>
    }
    const onSubmit = handleSubmit((data: TFormInput) => {
        setValue('loading', true)
        setTimeout(() => {
            AuthAction.signIn(data).then((e) => {
                if (e?.user) {
                    navigate('/')
                }
            }).catch(() => {
                setError('root', { type: 'validate' })
            }).finally(() => {
                setValue('loading', false)
            })
        }, 200)
    })
    const onSignUp = useCallback(() => {
        if (values?.email?.length && values?.password?.length) {
            AuthAction.signUp(values as TFormInput)
        }
    }, [AuthAction, values])


    const renderSubmitButton = (
        <button
            type='submit'
            disabled={values?.loading}
            className={`grid grid-cols-3 flex-row align-middle a w-full py-2 px-4 ${isError ? 'bg-red-600' : 'bg-indigo-600'} text-white rounded-md ${isError ? 'hover:bg-red-700' : 'hover:bg-indigo-600'}  focus:outline-none focus:ring-2 ${isError ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} focus:ring-offset-2`}

        >
            <div className="" />
            <div className="">
                Login
            </div>
            <div className="">
                {values.loading && <Icon icon='line-md:loading-loop' width={20} />}
            </div>
        </button>
    )

    return (<div className="min-h-screen flex md:flex-row">
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
                <h2 className="text-2xl font-bold text-center"
                    onClick={onSignUp}
                >Login</h2>
                <form onSubmit={onSubmit} className="space-y-4">
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
                            className={`mt-1 w-full p-2 border ${isError ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm ${isError ? 'focus:ring-red-500' : 'focus:ring-gray-500'} ${isError ? 'focus:border-red-500' : 'focus:border-gray-500'}`}
                        />
                        {helperText('email')}
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
                            className={`mt-1 w-full p-2 border ${isError ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm ${isError ? 'focus:ring-red-500' : 'focus:ring-gray-500'} ${isError ? 'focus:border-red-500' : 'focus:border-gray-500'}`}
                        />
                        {helperText('password')}

                    </div>
                    <div>
                        {renderSubmitButton}
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}


type TFormInput = { email: string, password: string }
const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    loading: yup.boolean(),

})
