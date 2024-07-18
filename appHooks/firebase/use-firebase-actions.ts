import { useMemo } from "react"
import { auth, db } from "../../config/firebase.config";
import _ from "../../types/lodash";
import { addDoc, collection } from "firebase/firestore";
import { TLandingRequest } from "../../app/kitchen-landing/types/request";
import { TLandingConsult } from "../../app/kitchen-landing/types/consultation";

export function useFirebaseActionAuth() {
    const q = auth.getAuth()
    return useMemo(() => ({
        signIn: (row: TCredential) => auth?.signInWithEmailAndPassword(q, row.email, row.password),
        signUp: (row: TCredential) => auth?.createUserWithEmailAndPassword(q, row.email, row.password),
    }), [q])
}

export function useFirebaseRequestActions() {
    return ({
        add: (row: TLandingRequest) => {
            addDoc(collection(db, 'requests'), _.omit(row, ['id']))
        },

    })
}

export function useFirebaseConsultActions() {
    return ({
        add: (row: TLandingConsult) => {
            addDoc(collection(db, 'consultations'), _.omit(row, ['id']))
        },
    })
}


type TCredential = { email: string, password: string }
