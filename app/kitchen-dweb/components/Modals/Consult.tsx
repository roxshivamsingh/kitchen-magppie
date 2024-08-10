import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
    INIT_LANDING_CONSULT,
    LANDING_CONSULT_SCHEMA,
    TLandingConsult,
} from '../../types/consultation'
import { useFirebaseConsultActions } from '../../../../appHooks/firebase/use-firebase-actions'
import { ToastMessage } from '../../../../types'
import { CustomSiteModal } from '../../../../components'

interface IProps {
    onHide: VoidFunction
    open: boolean
}

export default function Consult({ onHide, open }: IProps) {
    const { register, handleSubmit } = useForm({
        defaultValues: INIT_LANDING_CONSULT,
        resolver: yupResolver(LANDING_CONSULT_SCHEMA),
    })
    const action = useFirebaseConsultActions()

    const onSubmit = handleSubmit((data: TLandingConsult) => {
        action.add(data)
        onHide()
        toast(ToastMessage.Consult.OK)
    })


    return (<CustomSiteModal open={open} onHide={onHide} header='Book Your Consultation' size='large'>
        <form onSubmit={onSubmit}>
            <div className="space-y-4">
                <input
                    placeholder="Your Name"
                    type="text"
                    name="fullName"
                    {...register('fullName')}
                    className="text-white text-lg border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                    required
                />
                <input
                    placeholder="Mobile Number"
                    type="tel"
                    name="mobile"
                    {...register('mobile')}
                    className="text-white text-lg border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                    required
                />
                <input
                    placeholder="Please select your city"
                    type="text"
                    name="city"
                    {...register('city')}
                    className="text-white text-lg border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                    required
                />
                <input
                    placeholder="Your Tentative Budget"
                    type="text"
                    name="budget"
                    {...register('budget')}
                    className="text-white text-lg border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                    required
                />
            </div>

            <div className="flex flex-row-reverse mt-5">
                <button
                    type="submit"
                    className=" text-black bg-white cursor-pointer font-medium text-xl w-52 py-1 text-center rounded-full uppercase mb-5"
                >
                    Submit
                </button>
            </div>
        </form>

    </CustomSiteModal>

    )
}
