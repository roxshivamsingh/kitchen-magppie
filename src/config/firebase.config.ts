import * as app from 'firebase/app'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import * as firestore from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const credentials = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
}

const init = app.initializeApp(credentials)
const auth = getAuth()

export const provider = new GoogleAuthProvider()

export function authentication() {
    const data = {
        email: import.meta.env.VITE_APP_FORM_EMAIL_USERNAME,
        password: import.meta.env.VITE_APP_FORM_EMAIL_PASSWORD,
    }

    const msg = 'Please configure valid auth credentials'
    if (data.email?.length && data.password?.length) {
        signInWithEmailAndPassword(auth, data.email, data.password)
    } else {
        console.log(msg)
    }
}
export const config = firestore.getFirestore(init)
export const db = config
export const storage = getStorage(init)
export { firestore, auth, app }
export default config
