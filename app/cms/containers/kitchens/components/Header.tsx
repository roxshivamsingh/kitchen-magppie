import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from "react-icons/md";

import { useAppDispatch, useAppSelector } from '../../../../../redux'
import _ from 'lodash';
import { useFirebaseCmsAuthAction } from '../../../utils/firebase/use-firebase-cms-actions';
import { setAuth } from '../../../redux/slices/Auth.slice';
const Header = () => {
    const auth = useAppSelector(({ Cms }) => Cms.Auth.value);
    const AuthAction = useFirebaseCmsAuthAction()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    return (<nav className="bg-white border-gray-200 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/">
                <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
                    Magppie
                </span>
            </Link>
            <p className="font-medium flex flex-col p-0 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                Welcome, {_.get(auth, 'name', 'User')}
            </p>
            <MdLogout onClick={() => {
                AuthAction.signOut()
                dispatch(setAuth(undefined))
                navigate('/cms/sign-in')
            }} />
        </div>
    </nav>
    )
}

export default Header
