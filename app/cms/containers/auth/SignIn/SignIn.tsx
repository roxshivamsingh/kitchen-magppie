// import { useCallback } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash'
import LoginBanner from '../../../../../assets/photos/kitchen/g5.png'

import { useFirebaseCmsAuthAction } from '../../../../../app/cms/utils/firebase/use-firebase-cms-actions'
import CircularProgress from '../../../../../components/CircularProgress'
// import { Link } from 'react-router-dom'

// import { useFirebaseCmsAuthListener } from '../../../utils/firebase/use-firebase-cms-listeners'

export default function CmsSignIn() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <SignInForm />
            <div className="md:w-1/2 hidden md:block min-h-screen">
                <img
                    src={LoginBanner}
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export function SignInForm() {
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
        watch,
    } = useForm({ resolver: yupResolver(schema) })

    const navigate = useNavigate()
    const AuthAction = useFirebaseCmsAuthAction()

    const values = watch()

    const isError = !!_.keys(errors).length
    const helperText = (name: 'email' | 'password') => {
        return (
            <small className="text-xs text-red-500">
                {'root' in errors
                    ? 'Invalid Credentials'
                    : _.get(errors, `${name}.message`)}
            </small>
        )
    }

    const onSubmit = handleSubmit((data: TFormInput) => {
        setValue('loading', true)
        setTimeout(() => {
            AuthAction.signIn(data)
                .then((e) => {
                    if (e?.user) {
                        navigate('/cms')
                    }
                })
                .catch(() => {
                    setError('root', { type: 'validate' })
                })
                .finally(() => {
                    setValue('loading', false)
                })
        }, 200)
    })
    const renderSubmitButton = (
        <button
            type="submit"
            disabled={values?.loading}
            className={`text-white w-full text-center h-12 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center me-2 mb-2 ${
                isError ? 'bg-red-600' : 'bg-black'
            } uppercase text-white ${
                isError ? 'hover:bg-red-700' : 'bg-black'
            }  focus:outline-none focus:ring-2 ${
                isError ? 'focus:ring-red-500' : 'bg-black'
            } focus:ring-offset-2`}
        >
            <div className="flex justify-center items-center w-full">
                <div>Sign In</div>
                <div className="">
                    {values.loading && <CircularProgress size="xl" />}
                </div>
            </div>
        </button>
    )

    return (
        <div className="md:w-1/2 bg-white md:flex md:justify-center md:items-center min-h-screen pt-60 w-full md:pt-0">
            <div className="max-w-sm w-full px-6 py-8">
                <h2 className="text-center font-semibold text-2xl mb-4 uppercase">
                    sign up
                </h2>
                <form
                    onSubmit={onSubmit}
                    className="space-y-4 w-full"
                    onKeyUp={(e) => {
                        if (e.code === 'Enter') {
                            onSubmit()
                        }
                    }}
                >
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            {...register('email')}
                            placeholder="Email"
                            className={`bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                errors.email
                                    ? 'border-red-500'
                                    : 'border-gray-400'
                            }`}
                        />
                        {helperText('email')}
                    </div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            {...register('password')}
                            type="password"
                            placeholder="Password"
                            className={`bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                errors.password
                                    ? 'border-red-500'
                                    : 'border-gray-400'
                            }`}
                        />
                        {helperText('password')}
                    </div>
                    {/* <div className="text-right text-sm cursor-pointer">
                        Forgot Password
                    </div> */}
                    <div>{renderSubmitButton}</div>
                </form>
                {/* <div className="text-center mt-4">
                    <p>
                        Already have an account?
                        <Link to="/portal/register">
                            <span className="text-blue-500 cursor-pointer ml-2">
                                Sign In
                            </span>
                        </Link>
                    </p>
                </div> */}
            </div>
        </div>
    )
}

type TFormInput = { email: string; password: string }

const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    loading: yup.boolean(),
})
