import { useCommonSelector } from "@repo/common-redux/hooks";

export function useFirebaseDataUser() {
    const user = useCommonSelector((state) => state.user)
    return user;
}
