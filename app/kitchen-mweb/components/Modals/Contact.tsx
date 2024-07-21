import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'
import { INIT_LANDING_REQUEST, LANDING_REQUEST_SCHEMA, TLandingRequest } from '../../types/request';
import { useFirebaseRequestActions } from '../../../../appHooks/firebase/use-firebase-actions';
import { CustomSiteModal } from '../../../../components';
// import { IoMdClose } from 'react-icons/io';
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
        <CustomSiteModal open={open} onHide={onHide} header='Request a Call Back'>
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
        </CustomSiteModal>
    )
}
export default Contact
