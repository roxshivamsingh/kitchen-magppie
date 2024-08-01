import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
    INIT_LANDING_CONSULT,
    LANDING_CONSULT_SCHEMA,
    TLandingConsult,
} from '../../types'
import { useFirebaseConsultActions } from '../../../../appHooks/firebase/use-firebase-actions'
import DarkDropdown from '../../../kitchen-mweb/components/DarkDropdown'
import { CONSULT_CITIES, CONSULT_TENTATIVE_BUDGETS } from '../../../../mocks'

export default function Form() {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: INIT_LANDING_CONSULT,
        resolver: yupResolver(LANDING_CONSULT_SCHEMA),
    })
    const action = useFirebaseConsultActions()

    const onSubmit = handleSubmit((data: TLandingConsult) => {
        action.add(data)
        toast('Your consultation request has been submitted')
    })
    return (
        <>
            <div className="justify-center items-center w-full max-h-full overflow-y-auto overflow-x-hidden">
                <div className="relative w-full max-w-lg max-h-full">
                    <div className="relative bg-[#1E1E1E] rounded-lg shadow">
                        <div className="flex items-center justify-between px-8 py-5 rounded-t w-screen">
                            <h3 className="text-4xl font-thin text-white">
                                Book Your Consultation
                            </h3>
                        </div>
                        <div className="px-5 py-2">
                            <form onSubmit={onSubmit}>
                                <div className="space-y-4">
                                    <input
                                        placeholder="Your Name"

                                        type="text"
                                        name="fullName"
                                        {...register('fullName')}
                                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Mobile Number"
                                        type="tel"
                                        name="mobile"
                                        {...register('mobile')}
                                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <DarkDropdown
                                        isAutocomplete
                                        viewport='desktop'
                                        onChange={(e) => { setValue('city', e) }}
                                        options={CONSULT_CITIES?.map((value) => ({ value, label: value }))}
                                        label="Please select your city"
                                    />
                                    <DarkDropdown
                                        viewport='desktop'
                                        onChange={(e) => { setValue('budget', e) }}
                                        options={CONSULT_TENTATIVE_BUDGETS?.map((value) => ({ value, label: value }))}
                                        label="Your Tentative Budget"
                                    />
                                    {/* <input
                                        placeholder="Please select your city"
                                        type="text"
                                        name="city"
                                        {...register('city')}
                                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Your Tentative Budget"
                                        type="text"
                                        name="budget"
                                        {...register('budget')}
                                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-10"
                                        required
                                    /> */}
                                </div>

                                <div className="flex flex-row-reverse mt-5">
                                    <button
                                        type="submit"
                                        className=" text-black bg-white cursor-pointer font-medium text-md w-32 py-2 mb-4 text-center rounded-full uppercase"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
