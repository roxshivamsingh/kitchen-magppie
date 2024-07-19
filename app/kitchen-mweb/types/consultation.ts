import * as Yup from 'yup';

export const LANDING_CONSULT_SCHEMA = Yup.object().shape({
    fullName: Yup.string()
        .required('Full Name is required')
        .max(50, 'Full Name must be at most 50 characters'),
    mobile: Yup.string()
        .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(15, 'Mobile number must be at most 15 digits')
        .required('Mobile number is required'),
    city: Yup.string()
        .max(200, 'Remark must be at most 200 characters'),
    budget: Yup.string()
        .max(200, 'Remark must be at most 200 characters'),
});

export type TLandingConsult = {
    fullName: string,
    city: string,
    mobile: string,
    budget: string,
    at: { created: Date, updated: Date }
}

export const INIT_LANDING_CONSULT: TLandingConsult = {
    fullName: '',
    city: '',
    mobile: '',
    budget: '',
    at: { created: new Date(), updated: new Date() }
}
