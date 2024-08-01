import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
    INIT_LANDING_CONSULT,
    LANDING_CONSULT_SCHEMA,
    TLandingConsult,
} from '../../types/consultation'
import { useFirebaseConsultActions } from '../../../../appHooks/firebase/use-firebase-actions'
import { CustomSiteModal } from '../../../../components'
import DarkDropdown from '../DarkDropdown'
import { CONSULT_CITIES, CONSULT_TENTATIVE_BUDGETS } from '../../../../mocks'

export default function Consult(props: IProps) {
    const { onHide, open } = props
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: INIT_LANDING_CONSULT,
        resolver: yupResolver(LANDING_CONSULT_SCHEMA),
    })
    const action = useFirebaseConsultActions()

    const onSubmit = handleSubmit((data: TLandingConsult) => {
        action.add(data)
        onHide()
        toast('Your consultation request has been submitted')
    })
    return (
        <CustomSiteModal
            open={open}
            onHide={onHide}
            header="Book Your Consultation"
        >
            <form onSubmit={onSubmit}>
                <div className="space-y-6">
                    <input
                        placeholder="Your Name"
                        type="text"
                        name="fullName"
                        {...register('fullName')}
                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                        required
                    />
                    <input
                        placeholder="Mobile Number"
                        type="tel"
                        name="mobile"
                        {...register('mobile')}
                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                        required
                    />

                    <DarkDropdown isAutocomplete
                        onChange={(e) => { setValue('city', e) }}
                        options={CONSULT_CITIES?.map((value) => ({ value, label: value }))}
                        label="Please select your city"
                        viewport='mobile'
                    />
                    <DarkDropdown
                        onChange={(e) => { setValue('budget', e) }}
                        options={CONSULT_TENTATIVE_BUDGETS?.map((value) => ({ value, label: value }))}
                        label="Your Tentative Budget"
                        viewport='mobile'

                    />
                </div>

                <div className="flex flex-row-reverse mt-10">
                    <button
                        type="submit"
                        className=" text-black bg-white cursor-pointer font-medium text-3xl w-52 py-6 text-center rounded-full uppercase mb-10"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </CustomSiteModal>
    )
}

interface IProps {
    onHide: VoidFunction
    open: boolean
}

