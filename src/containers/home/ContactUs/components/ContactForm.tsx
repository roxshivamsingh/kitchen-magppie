import { Button, TextInput, Label } from 'flowbite-react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import _ from 'lodash'

export default function ContactUsForm() {
    const {
        register,
        handleSubmit,
        // setError,
        // setValue,
        formState: { errors },
        // watch
    } = useForm({ resolver: yupResolver(schema) })


    const onSubmit = handleSubmit((data: TFormInput) => {
        console.log(data)
        // We'll add firebase pipeline here..
    })

    return (<form onSubmit={onSubmit}>
        <div className="mb-4">
            <Label className={`block text-${'name' in errors ? 'red' : 'gray'}-700`} value="Your Name" />
            <TextInput
                type="text"
                name='name'
                {...register('name')}
                className={`mt-1 block w-full ${'name' in errors ? 'border-red-300' : 'border-gray-300'} focus:ring focus:ring-opacity-50`}
                color={'name' in errors ? 'failure' : ""}
                helperText={'name' in errors && (<small className='text-red-500'>{_.get(errors, 'name.message', '')}</small>)}
            />
        </div>
        <div className="mb-4">
            <Label className={`block text-${'mobile' in errors ? 'red' : 'gray'}-700`} value="Mobile Number" />
            <TextInput

                type="text"
                name='mobile'
                {...register('mobile')}
                className={`mt-1 block w-full ${'mobile' in errors ? 'border-red-300' : 'border-gray-300'} focus:ring focus:ring-opacity-50`}
                color={'mobile' in errors ? 'failure' : ""}
                helperText={'mobile' in errors && (<small className='text-red-500'>{_.get(errors, 'mobile.message', '')}</small>)}
            />


        </div>
        <div className="mb-4">
            <Label className={`block text-${'email' in errors ? 'red' : 'gray'}-700`} value="Email" />
            <TextInput
                type="text"
                name='email'
                {...register('email')}
                className={`mt-1 block w-full ${'email' in errors ? 'border-red-300' : 'border-gray-300'} focus:ring focus:ring-opacity-50`}
                color={'email' in errors ? 'failure' : ""}
                helperText={'email' in errors && (<small className='text-red-500'>{_.get(errors, 'email.message', '')}
                    <p>
                        We'll only use your email to respond to your inquiry
                    </p>
                </small>)}
            />

        </div>
        <div className="mb-4">
            <Label className={`block text-${'city' in errors ? 'red' : 'gray'}-700`} value="City" />
            <TextInput
                type="text"
                name='city'
                {...register('city')}
                className={`mt-1 block w-full ${'city' in errors ? 'border-red-300' : 'border-gray-300'} focus:ring focus:ring-opacity-50 `}
                color={'city' in errors ? 'failure' : ""}
                helperText={'city' in errors && (<small className='text-red-500'>{_.get(errors, 'city.message', '')}
                    <p>
                        This helps us provide better service and estimates
                    </p>
                </small>)}
            />
        </div>

        <Button type="submit" className={`mt-4 ${_.keys(errors)?.length ? 'bg-red-500' : 'bg-[#c7bda8]'} w-full`}>
            Submit
        </Button>
        {!!_.keys(errors)?.length && (<p className="mt-2 text-gray-500 text-center">
            Don’t worry we never share your information with anyone
        </p>)}

    </form>
    )
}

type TFormInput = {
    name: string,
    email: string,
    city: string,
    mobile: string,
}

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    city: yup.string().required('City is required'),
    mobile: yup.string().required('Mobile is required'),

})
