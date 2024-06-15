import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

export default function KitchenCreateEdit() {

    const {
        handleSubmit,
        // formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })


    const onSubmit = handleSubmit((data: TFormInput) => {
        console.log(data)
        // We'll add firebase pipeline here..
    })

    return (

        <div className="container mx-auto">

            <div className="text-3xl uppercase font-bold ">
                Create Kitchen
            </div>
            <form onSubmit={onSubmit}>
                {['name', 'description']?.map((field, i) => (
                    <div className="mb-4" key={i}>
                        <input
                            id="name"
                            name="name"
                            type="email"
                            placeholder={field}
                            className={`w-full capitalize text-xl border-t-0 border-l-0 border-r-0 border-gray-400`}
                        />
                    </div>
                ))}
                <button
                    type='submit'
                    // disabled={values?.loading}
                    className={`grid grid-cols-3 flex-row align-middle w-full py-3 px-4 uppercase text-white  focus:outline-none focus:ring-2 bg-black focus:ring-offset-2`}

                >
                    <div className="" />
                    <div className="">
                        Create
                    </div>
                    <div className="">
                        {/* <Icon icon='line-md:loading-loop' width={20} /> */}
                    </div>
                </button>

            </form>

        </div>

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
    description: yup.string().required('Name is required'),
})
