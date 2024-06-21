import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import _ from 'lodash';
// ===============================================================================

import { useAppDispatch, useAppSelector } from '../../../redux'
import { useFirebaseCmsAuthAction } from '../utils/firebase/use-firebase-cms-actions';
import { setAuth } from '../redux/slices/Auth.slice';

export default function Header() {
    const auth = useAppSelector(({ Cms }) => Cms.Auth.value);
    const AuthAction = useFirebaseCmsAuthAction()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onClickSignOut = useCallback(() => {
        AuthAction.signOut()
        dispatch(setAuth(undefined))
        navigate('/cms/sign-in')
    }, [AuthAction, dispatch, navigate])

    return (<nav className="bg-white border-gray-200 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="">
                <Link to="/cms">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        MagpPie
                    </span>
                </Link>
            </div>
            <div className="flex flex-row justify-center align-middle gap-3">
                <div className="font-medium flex flex-col p-0 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                    Welcome,
                </div>

                <div className='text-purple-600'>
                    {_.get(auth, 'name', 'User')}
                </div>
                <div className="m-auto">
                    <MdLogout onClick={onClickSignOut}
                        className='cursor-pointer hover:text-gray-500 '
                    />

                </div>
            </div>
        </div>
    </nav>
    )
}
