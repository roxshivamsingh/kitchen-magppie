import * as React from 'react'
import { mockData } from './data'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { MdMail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import { MdCurrencyRupee } from 'react-icons/md'

type Person = {
    id: number
    name: string
    email: string
    phone: string
    city: string
    budget: string
}

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.email, {
        id: 'email',
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => (
            <span className="flex items-center justify-center">
                <MdMail className="text-xl mr-2" />
                Email
            </span>
        ),
    }),
    columnHelper.accessor('phone', {
        header: () => (
            <span className="flex items-center">
                <FaPhoneAlt className="text-xl mr-2" />
                Phone
            </span>
        ),
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('city', {
        header: () => (
            <span className="flex items-center">
                <GrMapLocation className="text-xl mr-2" />
                City
            </span>
        ),
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('budget', {
        header: () => (
            <span className="flex items-center">
                <MdCurrencyRupee className="text-xl mr-2" />
                Tentative Budget
            </span>
        ),
        cell: (info) => info.renderValue(),
    }),
]

export default function EnquiriesTable() {
    const [data] = React.useState(() => [...mockData])
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 10,
    })

    const table = useReactTable({
        data,
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
            <table className="mb-5 border shadow-lg rounded-3xl">
                <thead className="text-center">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className="border-b text-gray-800 uppercase"
                        >
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 pr-2 py-4 font-medium text-center"
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
                    {table.getRowModel().rows.map((row) => (
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
                    ))}
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
