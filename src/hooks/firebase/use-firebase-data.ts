import { useAppSelector } from "../../redux"

export function useDataUser() {
    const { status, value } = useAppSelector((state) => state.user)
    return {
        value,
        loading: (value === undefined || status === 'loading')
    }
}
