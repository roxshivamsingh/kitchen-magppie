import { IoMdClose } from 'react-icons/io'

interface IProps {
    onCloseModal: () => void
    isVisible: boolean
}

const Contact = ({ onCloseModal, isVisible }: IProps) => {
    return (
        <>
            <div
                aria-hidden={!isVisible}
                className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden ${
                    isVisible ? 'flex' : 'hidden'
                }`}
            >
                <div className="relative py-20 w-full max-w-2xl max-h-full">
                    <div className="relative bg-[#202620] rounded-lg shadow">
                        <div className="flex items-center justify-between px-8 py-10 rounded-t">
                            <h3 className="text-4xl font-semibold text-white mb-1">
                                Book Your Consultation
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={onCloseModal}
                            >
                                <IoMdClose className="h-12 w-12" />
                            </button>
                        </div>
                        <div className="px-10 py-10">
                            <form className="space-y-12" action="#">
                                <input
                                    placeholder="Your Name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="text-white mb-8 text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4"
                                    required
                                />
                                <input
                                    placeholder="Your Number"
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    className="text-white mb-8 text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4"
                                    required
                                />
                                <input
                                    placeholder="Your City"
                                    type="text"
                                    name="city"
                                    id="city"
                                    className="text-white mb-8 text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4"
                                    required
                                />
                                <input
                                    placeholder="Your Tentative Budget"
                                    type="text"
                                    name="budget"
                                    id="budget"
                                    className="text-white mb-8 text-2xl border rounded-full border-gray-300 bg-[#202620] focus:ring-white focus:border-white block w-full p-4"
                                    required
                                />
                                <button
                                    type="submit"
                                    className=" text-black bg-white cursor-pointer font-medium text-2xl w-full px-5 py-5 rounded-full text-center"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
