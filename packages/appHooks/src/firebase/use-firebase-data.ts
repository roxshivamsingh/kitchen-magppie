import { useAppSelector } from "../../redux";

export function useFirebaseDataUser() {
    const user = useAppSelector((state) => state.user)
    return user;
}
