import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { INIT_LANDING_CONSULT, LANDING_CONSULT_SCHEMA, TLandingConsult } from '../../types/consultation'
import { useFirebaseConsultActions } from '../../../../appHooks/firebase/use-firebase-actions'
// import { IoMdClose } from 'react-icons/io'

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
                <div className="relative w-full max-w-3xl max-h-full">
                    <div className="relative bg-[#202620] rounded-lg shadow">
                        <div className="flex items-center justify-between px-8 py-10 rounded-t w-screen">
                            <h3 className="text-7xl font-thin text-white">
                                Book Your Consultation
                            </h3>
                            {/* <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={onHide}
                            >
                                <IoMdClose className="text-4xl" />
                            </button> */}
                        </div>
                        <div className="px-10 py-5">
                            <form onSubmit={onSubmit}>
                                <div className="space-y-8">
                                    <input
                                        placeholder="Your Name"
                                        type="text"
                                        name="fullName"
                                        {...register('fullName')}
                                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Mobile Number"
                                        type="tel"
                                        name="mobile"
                                        {...register('mobile')}
                                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Please select your city"
                                        type="text"
                                        name="city"
                                        {...register('city')}
                                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Your Tentative Budget"
                                        type="text"
                                        name="budget"
                                        {...register('budget')}
                                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                                        required
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
