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
    return (
        <>
            <div
                aria-hidden={!open}
                className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden transform transition-transform duration-500 flex font-custom ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div
                    className={`fixed inset-0 transition-all duration-300 ${open ? 'bg-opacity-50' : 'bg-opacity-0'
                        } backdrop-blur-sm`}
                    onClick={() => {
                        onHide()
                    }}
                />
                <div className="relative w-full max-w-xl max-h-full">
                    <div className="relative bg-[#202620] rounded-lg shadow">
                        <div className="flex items-center justify-between px-6 py-5 rounded-t w-screen">
                            <h3 className="text-4xl font-thin text-white">
                                Book Your Consultation
                            </h3>
                        </div>
                        <div className="px-5 py-2">
                            <form onSubmit={onSubmit}>
                                <div className="space-y-6">
                                    <input
                                        placeholder="Your Name"
                                        type="text"
                                        name="fullName"
                                        {...register('fullName')}
                                        className="text-white text-lg border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                                        required
                                    />
                                    <input
                                        placeholder="Mobile Number"
                                        type="tel"
                                        name="mobile"
                                        {...register('mobile')}
                                        className="text-white text-lg border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                                        required
                                    />
                                    <input
                                        placeholder="Please select your city"
                                        type="text"
                                        name="city"
                                        {...register('city')}
                                        className="text-white text-lg border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                                        required
                                    />
                                    <input
                                        placeholder="Your Tentative Budget"
                                        type="text"
                                        name="budget"
                                        {...register('budget')}
                                        className="text-white text-lg border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
