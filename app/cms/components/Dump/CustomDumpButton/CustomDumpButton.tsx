import _ from "lodash"
import { db, firestore } from "../../../../../config"
import { _LANDING_COMPONENTS } from "../../../../../types"

export default function CustomDumpButton() {
    return <button onClick={() => {
        const { addDoc, collection } = firestore
        _LANDING_COMPONENTS?.forEach((row) => {
            addDoc(collection(db, 'landing'), _.omit(row, ['id']))
        })
    }}>
        Call
    </button>
}
