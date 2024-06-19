import { useEffect } from 'react';
import { collection, doc, getDoc, onSnapshot, } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

//====================================================================

import { db, auth } from "../../../../config/firebase.config"
import { useAppDispatch } from '../../../../redux';
import { setSuperUsers } from '../../redux/slices/SuperUser.slice';
import { INIT_SUPER_USER, ISuperUser } from '../../types/SuperUser';
import { setAuth } from '../../redux/slices/Auth.slice';

const { getAuth, onAuthStateChanged } = auth;

export function useFirebaseCmsAuthListener() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        const q = getAuth()
        onAuthStateChanged(q, (user) => {

            if (user?.email?.length) {
                const id = _.get(user, 'reloadUserInfo.localId')
                getDoc(doc(db, 'super-users', id)).then((doc) => {
                    dispatch(setAuth({
                        ...INIT_SUPER_USER,
                        id: _.get(user, 'reloadUserInfo.localId'),
                        email: user.email,
                        ...doc.data()
                    } as ISuperUser))
                })

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

