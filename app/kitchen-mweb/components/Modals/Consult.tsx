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

// const cities = [
//     "Mumbai",
//     "Delhi",
//     "Bangalore",
//     "Hyderabad",
//     "Ahmedabad",
//     "Chennai",
//     "Kolkata",
//     "Surat",
//     "Pune",
//     "Jaipur"
//     // Add more cities as needed
//   ];

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
                    <input
                        placeholder="Your city"
                        type="text"
                        name="city"
                        {...register('city')}
                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                        required
                    />
                    {/* <input
                        placeholder="Your Tentative Budget"
                        type="text"
                        name="budget"
                        {...register('budget')}
                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                        required
                    /> */}
                    {/* <select
                        name="budget"
                        // className="w-full p-2 border border-gray-300 rounded mt-1"
                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                    >
                        <option className="text-xs flex w-[200px]" selected value="">
                            Your Tentative Budget
                        </option>
                        <option className="text-xs" value="under_500">
                            0 - 5 Lakhs
                        </option>
                        <option className="text-xs" value="500_1000">
                            5 - 10 Lakhs
                        </option>
                        <option className="text-xs" value="1000_5000">
                            10 - 15 Lakhs
                        </option>
                        <option className="text-xs" value="over_5000">
                            15 - 20 Lakhs
                        </option>
                    </select> */}
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
