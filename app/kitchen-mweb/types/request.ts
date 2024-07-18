import * as Yup from 'yup';

export type TLandingRequest = {
    fullName: string,
    email: string,
    mobile: string,
    remark: string,
    at: { created: Date, updated: Date }

}

export const INIT_LANDING_REQUEST: TLandingRequest = {
    fullName: '',
    email: '',
    mobile: '',
    remark: '',
    at: { created: new Date(), updated: new Date() }

}


export const LANDING_REQUEST_SCHEMA = Yup.object().shape({
    fullName: Yup.string()
        .required('Full Name is required')
        .max(50, 'Full Name must be at most 50 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    mobile: Yup.string()
        .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(15, 'Mobile number must be at most 15 digits')
        .required('Mobile number is required'),
    remark: Yup.string()
        .max(200, 'Remark must be at most 200 characters')
});

