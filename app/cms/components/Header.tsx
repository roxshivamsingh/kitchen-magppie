import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'

import { useAppDispatch, useAppSelector } from '../../../redux'
import _ from 'lodash'
import { useFirebaseCmsAuthAction } from '../utils/firebase/use-firebase-cms-actions'
import { setAuth } from '../redux/slices/Auth.slice'
import { useCallback } from 'react'

const Header = () => {
    const auth = useAppSelector(({ Cms }) => Cms.Auth.value)
    const AuthAction = useFirebaseCmsAuthAction()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const onClickSignOut = useCallback(() => {
        AuthAction.signOut()
        dispatch(setAuth(undefined))
        navigate('/cms/sign-in')
    }, [AuthAction, dispatch, navigate])

    return (
        <nav className="bg-white border-gray-200 border-b-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="">
                    <Link to="/cms">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            MagpPie
                        </span>
                    </Link>
                </div>
                <div className="flex flex-row justify-center align-middle gap-3 ">
                    <div className="">
                        <p className="font-medium flex flex-col p-0 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                            Welcome,{''}
                            <span className="text-purple-600">
                                {_.get(auth, 'name', 'User')}
                            </span>
                        </p>
                    </div>

                    <div className="m-auto">
                        <MdLogout
                            onClick={onClickSignOut}
                            className="cursor-pointer hover:text-gray-500 "
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
