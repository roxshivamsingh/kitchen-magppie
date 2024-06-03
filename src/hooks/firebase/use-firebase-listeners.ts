import { useEffect, useState } from "react";

import { auth } from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux";
import { IUser, INIT_USER } from "../../types/user";
import { setUser } from "../../redux/slices/user.slice";

// type TCorpus = { loading: boolean, value?: IUser }
// const INIT_CORPUS: TCorpus = { loading: true }
const { getAuth, onAuthStateChanged } = auth;
export function useFirebaseAuth() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // const [corpus, setCorpus] = useState<TCorpus>(INIT_CORPUS)

    // const AuthSelector = useAppSelector((state) => state.auth);

    useEffect(() => {
        const q = getAuth()
        onAuthStateChanged(q, (user) => {
            let result: IUser | null = null
            if (user?.email) {
                result = {
                    ...INIT_USER,
                    email: user?.email
                }
            }
            dispatch(setUser(result))
            // setCorpus({ loading: false, value: result })

        });
    }, [dispatch, navigate]);
    // return ({
    //     loading: corpus.loading,
    //     value: corpus.value
    // })
}

