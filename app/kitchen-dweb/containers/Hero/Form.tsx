import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
    INIT_LANDING_CONSULT,
    LANDING_CONSULT_SCHEMA,
    TLandingConsult,
} from '../../types'
import { useFirebaseConsultActions } from '../../../../appHooks/firebase/use-firebase-actions'
import { CONSULT_CITIES, CONSULT_TENTATIVE_BUDGETS } from '../../../../mocks'
import Select from "react-select"
import { REACT_SELECT_DESKTOP_STYLES } from '../../../../types/react-select'
export default function Form() {
    const { register, handleSubmit, setValue, watch, reset } = useForm({
        defaultValues: INIT_LANDING_CONSULT,
        resolver: yupResolver(LANDING_CONSULT_SCHEMA),
    })
    const action = useFirebaseConsultActions()

    const onSubmit = handleSubmit((data: TLandingConsult) => {
        action.add(data)
        toast('Your consultation request has been submitted')
        reset()
    })
    const values = watch()
    return (
        <>
            <div className="justify-center items-center w-full max-h-full ">
                <div className="relative w-full max-w-lg max-h-full">
                    <div className="relative bg-[#1E1E1E] rounded-lg shadow">
                        <div className="flex items-center justify-between px-8 py-5 rounded-t ">
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

                                    <Select
                                        isClearable
                                        value={values.city.length ? { value: values.city, label: values.city } : null}
                                        placeholder="Please select your city"
                                        styles={REACT_SELECT_DESKTOP_STYLES}
                                        onChange={(e: { label: string, value: string }) => {
                                            setValue('city', `${e.value || ''}`)
                                        }}
                                        options={CONSULT_CITIES?.map((value) => ({ value, label: value }))}
                                    />

                                    <Select
                                        placeholder="Your Tentative Budget"
                                        value={values.budget?.length ? { value: values.budget, label: values.budget } : null}
                                        styles={REACT_SELECT_DESKTOP_STYLES}
                                        onChange={(e: { label: string, value: string }) => {
                                            setValue('budget', `${e.value || ''}`)
                                        }}
                                        options={CONSULT_TENTATIVE_BUDGETS?.map((value) => ({ value, label: value }))}
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
