import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import Select from './Select'
// import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
// import { storage as storageApp } from '../../../../../config/firebase.config';
import { useFirebaseCmsKitchenAction } from '../../../utils/firebase/use-firebase-cms-actions'
import { useNavigate } from 'react-router-dom'
// import { ChangeEvent } from 'react';

const Form = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const KitchenActions = useFirebaseCmsKitchenAction()

    const navigate = useNavigate()
    const onSubmit = handleSubmit((data) => {
        KitchenActions.add(data);
        navigate('/cms/kitchen')

    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e?.target?.files?.length) {
    //         const attachment = e?.target?.files[0];
    //         if (attachment?.size) {
    //             const fileName = `${+new Date()}_${attachment?.name}`;
    //             const storageRef = ref(storageApp, `guestAttachments/${fileName}`);
    //             const uploadTask = uploadBytesResumable(storageRef, attachment);
    //             uploadTask.on(
    //                 'state_changed',
    //                 (snap) => {
    //                     // isLoading?.onTrue();

    //                     const uploading = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
    //                     if (uploading === 100) {
    //                         console.log('Success');
    //                     }
    //                 },
    //                 (error) => {
    //                     console.log(error);
    //                 },
    //                 () => {
    //                     getDownloadURL(uploadTask.snapshot.ref).then((link: string) => {
    //                         console.log(link)
    //                     });
    //                 }
    //             );
    //         }
    //     }
    // };
    return (
        <form onSubmit={onSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        {...register('name')}

                        name="name"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Description
                    </label>
                    <textarea
                        rows={4}
                        {...register('description')}

                        name="description"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder="Flowbite"
                    />
                </div>
                <div>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                    >
                        Upload Kitchen Media
                    </label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                    />
                </div>
                <div>
                    <Select label="Select Project" />
                </div>
                <div>
                    <Select label="Select Kitchens" />
                </div>
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    )
}

export default Form

const schema = yup.object({
    name: yup.string().required('Name is required'),
    description: yup.string().required('Name is required'),
})
