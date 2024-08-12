import * as React from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import dayjs from 'dayjs'
import { useFirebaseConsultationListener } from '../../utils/firebase/customer'
import { useAppSelector } from '../../../../redux'
import { IConsult } from '../../../../types/consultation'
import { MdCurrencyRupee } from 'react-icons/md'
import Select from 'react-select'
import { CONSULT_CITIES, CONSULT_TENTATIVE_BUDGETS } from '../../../../mocks'

const columnHelper = createColumnHelper<IConsult>()

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor('fullName', {
        header: () => 'Name',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('mobile', {
        header: () => (
            <span className="flex items-center justify-center">
                <FaPhoneAlt className="text-lg mr-1" />
                Phone
            </span>
        ),
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('city', {
        header: () => (
            <span className="flex items-center justify-center">
                <GrMapLocation className="text-lg mr-1" />
                City
            </span>
        ),
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('budget', {
        header: () => (
            <span className="flex items-center justify-center">
                <MdCurrencyRupee className="text-lg mr-1" />
                Budget
            </span>
        ),
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('at.created', {
        header: () => 'Created at',
        cell: (info) => dayjs(info.renderValue()).format('hh:mm A, DD/MM/YYYY'),
    }),
]

export default function EnquiryTable() {
    useFirebaseConsultationListener()
    const { value } = useAppSelector((state) => state.Cms.Consultations)
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 10,
    })
    const [selectedBudget, setSelectedBudget] = React.useState(null)
    const [selectedCity, setSelectedCity] = React.useState(null)

    // Filter data based on selected values
    const filteredData = React.useMemo(() => {
        return (value || []).filter((item) => {
            const isBudgetMatch = selectedBudget
                ? item.budget === selectedBudget.value
                : true
            const isCityMatch = selectedCity
                ? item.city === selectedCity.value
                : true
            return isBudgetMatch && isCityMatch
        })
    }, [value, selectedBudget, selectedCity])

    const table = useReactTable({
        data: filteredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
    })

    return (
        <div className="flex flex-col items-center w-3/4">
            <div className="flex justify-end w-3/4 mb-3">
                <Select
                    className="mr-4 w-48"
                    options={CONSULT_TENTATIVE_BUDGETS?.map((value) => ({
                        value,
                        label: value,
                    }))}
                    placeholder="Filter By Budget"
                    onChange={(selectedOption) =>
                        setSelectedBudget(selectedOption)
                    }
                    value={selectedBudget}
                />
                <Select
                    options={CONSULT_CITIES?.map((value) => ({
                        value,
                        label: value,
                    }))}
                    className='w-40'
                    placeholder="Filter By City"
                    onChange={(selectedOption) =>
                        setSelectedCity(selectedOption)
                    }
                    value={selectedCity}
                />
            </div>
            <table className="mb-5 border shadow-lg w-3/4">
                <thead className="text-center">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className="border-b text-gray-800 uppercase"
                        >
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 pr-2 py-2 font-medium text-center"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="text-center">
                    {filteredData.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="py-4 text-center text-gray-500"
                            >
                                No Data Found
                            </td>
                        </tr>
                    ) : (
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="border-b">
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="px-4 pt-[14px] pb-[18px]"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="mt-0 flex items-center">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Previous
                </button>
                <span className="mx-4">
                    Page {pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Next
                </button>
            </div>
        </div>
    )
}
