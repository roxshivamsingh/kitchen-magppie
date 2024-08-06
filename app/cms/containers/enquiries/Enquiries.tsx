import * as React from 'react'

import { mockData } from './data'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

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
    // you can use different aproach here
    columnHelper.accessor((row) => row.email, {
        id: 'email',
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Email</span>,
    }),
    columnHelper.accessor('phone', {
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
]

export default function Enquiries() {
    const [data] = React.useState(() => [...mockData])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="flex justify-center h-screen">
            <table className="my-auto border">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className="border-b text-gray-800 uppercase"
                        >
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 pr-2 py-4 font-medium text-left"
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
                <tbody>
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
            <div />
        </div>
    )
}
