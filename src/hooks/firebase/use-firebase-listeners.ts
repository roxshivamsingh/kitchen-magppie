import { useEffect } from "react";

import { auth } from "../../config/firebase.config";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux";
import { IUser, INIT_USER } from "../../types/user";
import { setUser } from "../../redux/slices/user.slice";
import { useDataUser } from "./use-firebase-data";

export function useFirebaseAuth() {
    const q = auth.getAuth()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const AuthSelector = useDataUser()

    useEffect(() => {
        auth.onAuthStateChanged(q, (user) => {
            let result: IUser | null = null
            if (user?.email) {
                result = {
                    ...INIT_USER,
                    email: user?.email
                }
            }
            dispatch(setUser(result))


        });
    }, [dispatch, navigate, q]);
    return ({
        loading: AuthSelector.loading,
        value: AuthSelector.value
    })
}
