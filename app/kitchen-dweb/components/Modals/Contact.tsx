import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
    INIT_LANDING_REQUEST,
    LANDING_REQUEST_SCHEMA,
    TLandingRequest,
} from '../../types/request'
import { useFirebaseRequestActions } from '../../../../appHooks/firebase/use-firebase-actions'
import { ToastMessage } from '../../../../types'
import { CustomSiteModal } from '../../../../components'
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
        toast(ToastMessage.Request.OK)
    })
    return (
        <CustomSiteModal
            open={open}
            onHide={onHide}
            header="Request a Call Back"
            size="large"
        >
            <form onSubmit={onSubmit}>
                <div className="space-y-4">
                    <input
                        placeholder="Your Name"
                        type="text"
                        name="fullName"
                        {...register('fullName')}
                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                        required
                    />
                    <input
                        placeholder="Email ID"
                        type="email"
                        name="email"
                        {...register('email')}
                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                        required
                    />
                    <input
                        placeholder="Mobile Number"
                        type="tel"
                        name="mobile"
                        id="mobile"
                        {...register('mobile')}
                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                        required
                    />
                    <input
                        placeholder="Preferred Slot to Connect"
                        type="text"
                        name="remark"
                        {...register('remark')}
                        className="text-white text-md border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white block w-full p-2 placeholder-gray-300 px-5"
                        required
                    />
                </div>
                <div className="flex flex-row-reverse mt-5">
                    <button
                        type="submit"
                        className=" text-black bg-white cursor-pointer font-medium text-md w-52 py-2 mb-2 text-center rounded-full uppercase"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </CustomSiteModal>
    )
}

export default Contact
