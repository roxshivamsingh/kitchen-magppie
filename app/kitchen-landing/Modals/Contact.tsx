import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'
import { INIT_LANDING_REQUEST, LANDING_REQUEST_SCHEMA, TLandingRequest } from '../types/request';
import { useFirebaseRequestActions } from '../../../appHooks/firebase/use-firebase-actions';
interface IProps {
    onHide: VoidFunction
    open: boolean
}

export function Contact(props: IProps) {
    const { onHide, open } = props
    const { register, handleSubmit } = useForm({
        defaultValues: INIT_LANDING_REQUEST,
        resolver: yupResolver(LANDING_REQUEST_SCHEMA),
    })
    const action = useFirebaseRequestActions()

    const onSubmit = handleSubmit((data: TLandingRequest) => {
        action.add(data)
        onHide()
        toast('Your request has been submitted')
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
                <div className="relative py-20 w-full max-w-3xl max-h-full">
                    <div className="relative bg-[#202620] rounded-lg shadow">
                        <div className="flex items-center justify-between px-8 py-10 rounded-t">
                            <h3 className="text-7xl font-thin text-white mb-1">
                                Request a Call Back
                            </h3>
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
                                        placeholder="Email ID"
                                        type="email"
                                        name="email"
                                        {...register('email')}
                                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Mobile Number"
                                        type="tel"
                                        name="mobile"
                                        id="mobile"
                                        {...register('mobile')}
                                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Preferred Slot to Connect"
                                        type="text"
                                        name="remark"
                                        {...register('remark')}
                                        className="text-white text-3xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-6 placeholder-gray-300 px-10"
                                        required
                                    />
                                </div>
                                <div className="flex flex-row-reverse mt-10">
                                    <button
                                        type="submit"
                                        className=" text-black bg-white cursor-pointer font-medium text-3xl w-52 py-6 mb-10 text-center rounded-full uppercase"
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

export default Contact
