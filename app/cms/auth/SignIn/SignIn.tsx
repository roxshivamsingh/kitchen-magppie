import { useCallback } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFirebaseActionAuth } from '../../../../appHooks/firebase/use-firebase-actions'
// import { Icon } from '@iconify/react'
import _ from 'lodash'

export default function CmsSignIn() {
    const { watch } = useForm({ resolver: yupResolver(schema) })

    const AuthAction = useFirebaseActionAuth()
    const values = watch()

    const onSignUp = useCallback(() => {
        if (values?.email?.length && values?.password?.length) {
            AuthAction.signUp(values as TFormInput)
        }
    }, [AuthAction, values])

    return (
        <div className="min-h-screen flex md:flex-row ">
            <div className="w-full md:w-1.2/4 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2
                        className="text-2xl font-bold text-center"
                        onClick={onSignUp}
                    >
                        CMS SignIn
                    </h2>
                    <SignInForm />
                </div>
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
            if (
                CREDENTIAL?.email === data.email &&
                CREDENTIAL?.password === data.password
            ) {
                navigate('/cms')
            } else {
                setError('root', { type: 'validate' })
            }
            setValue('loading', false)
        }, 200)
    })

    const renderSubmitButton = (
        <button
            type="submit"
            disabled={values?.loading}
            className={`grid grid-cols-3 flex-row align-middle w-full py-3 px-4 ${
                isError ? 'bg-red-600' : 'bg-black'
            } uppercase text-white ${
                isError ? 'hover:bg-red-700' : 'bg-black'
            }  focus:outline-none focus:ring-2 ${
                isError ? 'focus:ring-red-500' : 'bg-black'
            } focus:ring-offset-2`}
        >
            <div className="" />
            <div className="">Sign In</div>
            {/* <div className="">
                {values.loading && (
                    // <Icon icon="line-md:loading-loop" width={20} />
                )}
            </div> */}
        </button>
    )

    return (
        <form onSubmit={onSubmit} className="space-y-4 ">
            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    {...register('email')}
                    placeholder="Email"
                    className={`w-full text-xl border-t-0 border-l-0 border-r-0 ${
                        errors.email ? 'border-red-500' : 'border-gray-400'
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
                    className={`w-full text-xl border-t-0 border-l-0 border-r-0 ${
                        errors.password ? 'border-red-500' : 'border-gray-400'
                    }`}
                />
                {helperText('password')}
            </div>
            <div className="text-right text-sm cursor-pointer">
                Forgot Password
            </div>
            <div>{renderSubmitButton}</div>
        </form>
    )
}

type TFormInput = { email: string; password: string }

const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    loading: yup.boolean(),
})

const CREDENTIAL = {
    email: import.meta.env.VITE_APP_CMS_EMAIL,
    password: import.meta.env.VITE_APP_CMS_PASSWORD,
}
