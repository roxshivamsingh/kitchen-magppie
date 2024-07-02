import _ from "lodash"
import { db, firestore } from "../../../../../config/firebase.config"
import { _CUSTOMER_SITE_COMPONENTS } from "../../../../../types/component"

export default function CustomDumpButton() {
    return <button onClick={() => {
        const { addDoc, collection } = firestore
        _CUSTOMER_SITE_COMPONENTS?.forEach((row) => {
            addDoc(collection(db, 'customer-site-components'), _.omit(row, ['id']))
        })
    }}>
        xsxs
    </button>
}
