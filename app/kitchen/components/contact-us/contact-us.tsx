export default function ContactUs() {
    return (
        <div>
            <div className="font-[sans-serif] text-[#333]">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div
                        className="grid grid-cols-1 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md"
                        style={{ background: '#c6c3b7' }}
                    >
                        <div className="max-w-md sm:px-6 py-4">
                            <form>
                                {FIELD_OPTIONS?.map((row, i) => (
                                    <div className="mt-8" key={i}>
                                        {/* <label className="text-xs block mb-2">Password</label> */}
                                        <div className="relative flex items-center">
                                            <input
                                                className="w-full uppercase placeholder-gray-500 font-semibold bg-transparent text-sm border-b border-gray-500 focus:border-[#333] px-2 py-3 outline-none"
                                                placeholder={row}
                                            />
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-12">
                                    <button
                                        type="button"
                                        className="w-full uppercase py-2.5 px-4 text-sm font-semibold rounded-sm text-gray-500 bg-transparent border-1 border-gray-500 focus:outline-none border-2 "
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const FIELD_OPTIONS = [
    'Your Name',
    'Mobile Number',
    'City',
    'Type Your Requirement Here',
]

// @akshay
// Use camelcased notation for react files
