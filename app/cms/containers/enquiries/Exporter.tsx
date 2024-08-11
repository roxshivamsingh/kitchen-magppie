import Select from 'react-select'
import { CONSULT_CITIES, CONSULT_TENTATIVE_BUDGETS } from '../../../../mocks'

const Exporter = () => {
    return (
        <div className="w-1/4 relative">
            <h1 className="text-3xl mb-4">Export Enquiries</h1>
            <form action="">
                <div className="flex items-center mb-4 gap-2 justify-start">
                    <div className="flex flex-col mr-5">
                        <label className="text-xl" htmlFor="">
                            Start
                        </label>
                        <input
                            required
                            type="string"
                            placeholder="Starting Number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl" htmlFor="">
                            End
                        </label>
                        <input
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="string"
                            name=""
                            id=""
                            placeholder="Ending Number"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-xl my-2" htmlFor="">
                        Export By Budget
                    </label>
                    <Select
                        options={CONSULT_TENTATIVE_BUDGETS?.map((value) => ({
                            value,
                            label: value,
                        }))}
                        placeholder="Select Budget"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl my-2" htmlFor="">
                        Export By City
                    </label>
                    <Select
                    placeholder="Select City"
                        options={CONSULT_CITIES?.map((value) => ({
                            value,
                            label: value,
                        }))}
                    />
                </div>
                <button className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    Export
                </button>
            </form>
            <p>
                Note: Exporting more than 500 inquiries may take longer. For
                faster export times, please limit the number of inquiries.
            </p>
        </div>
    )
}

export default Exporter
