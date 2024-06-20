import { useEffect } from 'react';
import { collection, doc, getDoc, onSnapshot, } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

//====================================================================

import { db, auth } from "../../../../config/firebase.config"
import { useAppDispatch } from '../../../../redux';
import { setSuperUsers } from '../../redux/slices/SuperUser.slice';
import { INIT_SUPER_USER, ISuperUser } from '../../types/SuperUser';
import { setAuth } from '../../redux/slices/Auth.slice';
import { TKitchen } from '../../types/Kitchen';
import { setKitchens } from '../../redux/slices/Kitchen.slice';
import { TProject } from '../../types/Project';
import { setProjects } from '../../redux/slices/Project.slice';

const { getAuth, onAuthStateChanged } = auth;

export function useFirebaseCmsAuthListener() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        const q = getAuth()
        onAuthStateChanged(q, (user) => {
            if (user?.email?.length) {
                const id = user.uid
                getDoc(doc(db, 'super-users', id)).then((doc) => {
                    dispatch(setAuth({
                        ...INIT_SUPER_USER,
                        id,
                        email: user.email,
                        ...doc.data()
                    } as ISuperUser))
                })
            } else {
                dispatch(setAuth(undefined))
            }
        });
    }, [dispatch, navigate]);
}

export const useFirebaseCmsSuperUsersListener = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const collectionRef = collection(db, `super-users`);

        onSnapshot(collectionRef, ({ docs }) => {
            const data: ISuperUser[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({
                    ...INIT_SUPER_USER,
                    ...row,
                    id: doc.id
                } as ISuperUser);
            });
            dispatch(setSuperUsers(data))

        });
    }, [dispatch])
}



export const useFirebaseCmsKitchensListener = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const collectionRef = collection(db, `kitchens`);

        onSnapshot(collectionRef, ({ docs }) => {
            const data: TKitchen[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({
                    ...row,
                    id: doc.id
                } as TKitchen);
            });
            dispatch(setKitchens(data))

        });
    }, [dispatch])
}


export const useFirebaseCmsProjectsListener = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const collectionRef = collection(db, `projects`);

        onSnapshot(collectionRef, ({ docs }) => {
            const data: TProject[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({
                    ...row,
                    id: doc.id
                } as TProject);
            });
            dispatch(setProjects(data))

        });
    }, [dispatch])
}
