import { useEffect } from "react";

import { auth } from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux";
import { IUser, INIT_USER } from "../../types/user";
import { setUser } from "../../app/kitchen/redux/slices/Auth.slice";

const { getAuth, onAuthStateChanged } = auth;
export function useFirebaseAuth() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        const q = getAuth()
        onAuthStateChanged(q, (user) => {
            let result: IUser | null = null
            if (user?.email) {
                result = { ...INIT_USER, email: user?.email }
            }
            dispatch(setUser(result))
        });
    }, [dispatch, navigate]);
}

