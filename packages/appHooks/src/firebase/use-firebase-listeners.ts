import { useEffect } from "react";

import { auth } from "@repo/config/firebase";
import { useNavigate } from "react-router-dom";
import { useCommonDispatch } from "@repo/common-redux/hooks";
import { IUser, INIT_USER } from "@repo/types/users";
import { setUser } from "@repo/common-redux/slices";

const { getAuth, onAuthStateChanged } = auth;
export function useFirebaseAuth() {
    const navigate = useNavigate()
    const dispatch = useCommonDispatch()
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

