export type IConsult = {
    id: string,
    fullName: string,
    city: string,
    mobile: string,
    budget: string,
    at: { created: Date, updated?: Date }
}

type THeader = { accessor: string, label: string }
export const CONSULTATION_COLUMN_HEADER_OPTIONS: THeader[] = [
    { accessor: 'id', label: '' },
    { accessor: 'fullName', label: 'Name' },
    { accessor: 'mobile', label: 'Phone' },
    { accessor: 'city', label: 'City' },
    { accessor: 'budget', label: 'Budget' },

]
