import Select from 'react-select'
import { utils, writeFile } from 'xlsx';

import { CONSULT_CITIES, CONSULT_TENTATIVE_BUDGETS } from '../../../../mocks'
import { useAppSelector } from '../../../../redux'
import { CONSULTATION_COLUMN_HEADER_OPTIONS, IConsult, _ } from '../../../../types';
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
// import { CONSULTATION_COLUMN_HEADER_OPTIONS } from '../../../../types/consultation'
// import { _ } from '../../../../types'

type TValue = { value: string, label: string } | null
const INIT_TVALUE: TValue = { value: '', label: '' }
type TForm = {
    startIndex: string,
    endIndex: string,
    budget: TValue,
    city: TValue
}
const INIT_FORM: TForm = {
    startIndex: '',
    endIndex: '',
    budget: INIT_TVALUE,
    city: INIT_TVALUE
}
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
    startIndex: Yup.string().nullable(),
    endIndex: Yup.string().nullable(),
    // .min(0, 'End index must be at least 0'),
    // .moreThan(Yup.ref('startIndex'), 'End index must be greater than start index'),

    budget: Yup.object().nullable().shape({
        value: Yup.string(),
        label: Yup.string(),
    }),

    city: Yup.object().nullable().shape({
        value: Yup.string(),
        label: Yup.string(),
    })
});

export default function Exporter() {
    const { value } = useAppSelector((state) => state.Cms.Consultations)
    const { watch, register, handleSubmit, setValue, reset } = useForm({
        defaultValues: INIT_FORM,
        resolver: yupResolver(validationSchema),
    })
    const [toggle, setToggle] = useState({ isLoading: false })

    const values = watch()

    const onSubmit = handleSubmit((data: TForm) => {
        setToggle((prev) => ({ ...prev, isLoading: true }))
        setTimeout(() => {
            APPLY_FILTER(value, data)
            reset()
            setToggle((prev) => ({ ...prev, isLoading: false }))

        }, 3000)
    })

    return (
        <div className="w-1/4 relative">
            <h1 className="text-3xl mb-4">Export Enquiries</h1>
            <form onSubmit={onSubmit}>
                <div className="flex items-center mb-4 gap-2 justify-start">
                    <div className="flex flex-col mr-5">
                        <label className="text-xl" htmlFor="">
                            Start
                        </label>
                        <input
                            type="string"
                            // value={values.startIndex < 0 ? '' : values.startIndex}
                            name='startIndex'
                            {...register('startIndex')}
                            placeholder="Starting Number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl" htmlFor="">
                            End
                        </label>
                        <input
                            // value={values.endIndex < 0 ? '' : values.endIndex}

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="string"
                            name="endIndex"
                            {...register('endIndex')}
                            placeholder="Ending Number"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-xl my-2" htmlFor="">
                        Export By Budget
                    </label>
                    <Select
                        value={values.budget?.value?.length ? values.budget : null}

                        options={CONSULT_TENTATIVE_BUDGETS?.map((value) => ({
                            value,
                            label: value,
                        }))}
                        onChange={(e) => {
                            setValue('budget', e)
                        }}
                        placeholder="Select Budget"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl my-2" htmlFor="">
                        Export By City
                    </label>
                    <Select
                        value={values.city?.value?.length ? values.city : null}
                        placeholder="Select City"
                        options={CONSULT_CITIES?.map((value) => ({
                            value,
                            label: value,
                        }))}
                        onChange={(e) => {
                            setValue('city', e)
                        }}
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <button
                        type='button'
                        onClick={() => { reset() }}
                        className="text-white w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex justify-center gap-3 flex-row align-middle ">
                        Reset <GrPowerReset className='text-xl' />
                    </button>
                    <button
                        type='submit'
                        // onClick={onClickExport}
                        className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex justify-center gap-3 flex-row align-middle ">
                        Export {toggle.isLoading ? <AiOutlineLoading3Quarters className='text-xl animate-spin' /> : <PiMicrosoftExcelLogoDuotone className='text-xl' />}
                    </button>

                </div>
            </form>
            <p>
                Note: Exporting more than 500 inquiries may take longer. For
                faster export times, please limit the number of inquiries.
            </p>
        </div>
    )
}

// const FILTER_APPLIED = (values: TForm) => {
//     const results: { [key: string]: string } = {}
//     _.keys(values)?.forEach((key) => {
//         const currentValue = _.get(values, 'key', '')
//         if (INIT_FORM[key] !== currentValue) {
//             results[key] = 'value' in values[key] ? _.get(values, `${key}.value`, '') : values[key]
//         }
//     })
//     return results
// }

const APPLY_FILTER = (consultations: IConsult[], data: TForm) => {
    const { budget, city, startIndex, endIndex } = data

    const index = {
        start: _.isNumericString(startIndex) ? Number(startIndex) : '',
        end: _.isNumericString(endIndex) ? Number(endIndex) : '',
    }
    consultations = consultations?.filter(((row) => {
        return (budget.value?.length) ? budget.value === row.budget : true
    }))

    consultations = consultations?.filter(((row) => {
        return (city.value?.length) ? city.value === row.city : true
    }))

    consultations = consultations?.filter(((__, i) => {

        if (_.isNumber(index.start) || _.isNumber(index.end)) {
            if (_.isNumber(index.start)) {
                return i >= index.start
            }
            if (_.isNumber(index.end)) {
                return i < index.end
            }
            return false
        }
        return true;
    }))

    if (consultations?.length) {
        const header = _.map(CONSULTATION_COLUMN_HEADER_OPTIONS, 'label')

        const filteredValues = consultations?.map((row, i) => ({
            ['ID']: i + 1,
            ['City']: row.city,
            ['Name']: row.fullName,
            ['Phone']: row.mobile,
            ['Budget']: row.budget,
        }))
        const worksheet = utils.json_to_sheet(filteredValues, { header });
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'MAIN');
        writeFile(workbook, `enquiries-${+new Date()}.xlsx`);
    }
}
