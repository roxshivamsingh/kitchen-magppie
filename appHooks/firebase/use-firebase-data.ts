import { useAppSelector } from "../../redux";

export function useFirebaseDataUser() {
    const user = useAppSelector((state) => state.Kitchens.Users)
    return user;
}
