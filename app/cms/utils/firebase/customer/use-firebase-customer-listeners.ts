import { useEffect } from "react";
import { useAppDispatch } from "../../../../../redux";
import { collection, onSnapshot } from "firebase/firestore";
import { TComponentItem } from "../../../../../types/component";
import { db } from "../../../../../config/firebase.config";
import { setCustomerSiteComponent } from "../../../redux/slices";

export function useFirebaseCustomerListener() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const collectionRef = collection(db, `customer-site-components`);

        onSnapshot(collectionRef, ({ docs }) => {
            const data: TComponentItem[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({
                    ...row,
                    id: doc.id,
                    at: { created: row.at.created?.toDate() }
                } as TComponentItem);
            });
            dispatch(setCustomerSiteComponent(data))
        });
    }, [dispatch])
}
