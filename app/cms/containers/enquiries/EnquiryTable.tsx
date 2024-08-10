import { useState } from 'react'
// import { mockData } from './data'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'
// import { MdMail } from 'react-icons/md'
// import { FaPhoneAlt } from 'react-icons/fa'
// import { GrMapLocation } from 'react-icons/gr'
// import { MdCurrencyRupee } from 'react-icons/md'
import dayjs from "dayjs"
import { useFirebaseConsultationListener } from '../../utils/firebase/customer'
import { useAppSelector } from '../../../../redux'
import { IConsult } from '../../../../types/consultation'


const columnHelper = createColumnHelper<IConsult>()

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor('fullName', {
        cell: (info) => info.getValue(),
    }),
    // you can use different aproach here
    // columnHelper.accessor((row) => row.email, {
    //     id: 'email',
    //     cell: (info) => <i>{info.getValue()}</i>,
    //     header: () => <span>Email</span>,
    // }),
    columnHelper.accessor('mobile', {
        header: () => 'Phone',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('city', {
        header: () => 'City',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('budget', {
        header: () => 'Tentative Budget',
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('at.created', {
        header: () => 'Created at',
        cell: (info) => dayjs(info.renderValue()).format('hh:mm A, DD/MM/YYYY'),
    }),
]


export default function EnquiryTable() {
    useFirebaseConsultationListener()
    const { value } = useAppSelector((state) => state.Cms.Consultations);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })

    const table = useReactTable({
        data: (value || []),
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
// const columnHelper = createColumnHelper<IConsult>()


