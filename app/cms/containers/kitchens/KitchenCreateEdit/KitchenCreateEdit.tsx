// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useForm } from 'react-hook-form'

import Form from '../components/Form'
import Header from '../components/Header'

export default function KitchenCreateEdit() {
    // const {
    //     handleSubmit,
    //     // formState: { errors },
    // } = useForm({ resolver: yupResolver(schema) })

    // const onSubmit = handleSubmit((data: TFormInput) => {
    //     console.log(data)
    //     // We'll add firebase pipeline here..
    // })

    return (
        <div>
            <Header />
            <div className="max-w-screen-xl flex flex-col justify-between mx-auto p-4 mt-4">
                <h1 className="font-bold text-3xl mb-6">Add Kitchen</h1>
                <Form />
            </div>
        </div>
    )
}

// type TFormInput = {
//     name: string,
//     email: string,
//     city: string,
//     mobile: string,
// }

// const schema = yup.object({
//     name: yup.string().required('Name is required'),
//     description: yup.string().required('Name is required'),
// })
