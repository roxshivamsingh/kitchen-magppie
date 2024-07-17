import { toast } from 'react-toastify'

interface IProps {
    onHide: VoidFunction
    open: boolean
}

const Consult = ({ onHide, open }: IProps) => {

    return (
        <>
            <div
                aria-hidden={!open}
                className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden transform transition-transform duration-500 flex ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className={`fixed inset-0 transition-all duration-300 ${open ? 'bg-opacity-50' : 'bg-opacity-0'} backdrop-blur-sm`}
                    onClick={() => { onHide() }}
                />
                <div className="relative py-20 w-full max-w-2xl max-h-full">
                    <div className="relative bg-[#202620] rounded-lg shadow">
                        <div className="flex items-center justify-between px-8 py-10 rounded-t">
                            <h3 className="text-5xl font-thin text-white mb-1">
                                Book Your Consultation
                            </h3>
                        </div>
                        <div className="px-10 py-10">
                            <form>
                                <div className="space-y-8">
                                    <input
                                        placeholder="Your Name"
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="text-white text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Your Number"
                                        type="tel"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        className="text-white text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Your select your city"
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="text-white text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4 placeholder-gray-300 px-10"
                                        required
                                    />
                                    <input
                                        placeholder="Your Tentative Budget"
                                        type="text"
                                        name="budget"
                                        id="budget"
                                        className="text-white text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4 placeholder-gray-300 px-10"
                                        required
                                    />
                                </div>

                                <div className="flex flex-row-reverse mt-10">
                                    <button
                                        type="submit"
                                        onClick={() => {
                                            toast('Your request has been submitted')
                                        }}
                                        className=" text-black bg-white cursor-pointer font-medium text-2xl w-52 py-4 text-center rounded-full uppercase"
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

export default Consult

// const validationSchema = Yup.object().shape({
//     fullName: Yup.string()
//         .required('Full Name is required')
//         .max(50, 'Full Name must be at most 50 characters'),
//     mobile: Yup.string()
//         .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
//         .min(10, 'Mobile number must be at least 10 digits')
//         .max(15, 'Mobile number must be at most 15 digits')
//         .required('Mobile number is required'),
//     city: Yup.string()
//         .max(200, 'Remark must be at most 200 characters'),
//     budget: Yup.string()
//         .max(200, 'Remark must be at most 200 characters'),
// });

