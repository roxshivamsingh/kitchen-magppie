import { useEffect } from "react";
import { useAppDispatch } from "../../../../../redux";
import { collection, onSnapshot } from "firebase/firestore";
import { FirebaseCollectionEnum, TComponentItem } from "../../../../../types";
import { db } from "../../../../../config";
import { setConsultation, setCustomerSiteComponent } from "../../../redux/slices";
import { IConsult } from "../../../../../types/consultation";

export function useFirebaseCustomerListener() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const collectionRef = collection(db, FirebaseCollectionEnum.Component);

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

export function useFirebaseConsultationListener() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const collectionRef = collection(db, FirebaseCollectionEnum.Consultation);

        onSnapshot(collectionRef, ({ docs }) => {
            const data: IConsult[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({
                    ...row,
                    id: doc.id,
                    at: { created: row.at.created?.toDate() }
                } as IConsult);
            });
            dispatch(setConsultation(data))
        });
    }, [dispatch])
}
