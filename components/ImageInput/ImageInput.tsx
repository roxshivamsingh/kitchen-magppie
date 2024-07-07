import { ChangeEvent, useCallback, useState } from "react"
import { useFirebaseStorageActions } from "../../appHooks/firebase"
import { IoMdClose } from "react-icons/io"
import CustomCircularProgress from "../CircularProgress/CircularProgress"

export default function ImageActions(props: TImageActionProps) {

    const [corpus, setCorpus] = useState<TCorpus>(INIT_CORPUS)

    const StorageActions = useFirebaseStorageActions()

    const onRemove = useCallback((e: string) => {
        StorageActions.remove(e)
        setCorpus((prev) => ({ ...prev, values: prev.values?.filter((row) => row !== e) }))
        props.onSuccess(corpus.values?.filter((row) => row !== e))
    }, [StorageActions, corpus.values, props])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const arr = Array.from(e.target.files)
        if (arr?.length) {
            setCorpus((prev) => ({ ...prev, loading: true }))
            StorageActions.batch.upload({
                files: arr,
                path: props.path,
                onSuccess: (e) => {
                    setCorpus((prev) => ({
                        ...prev,
                        loading: false,
                        values: [...prev.values, ...e]?.filter((row) => row?.length)
                    }))

                    props.onSuccess([...corpus.values,
                    ...e]?.filter((row) => row?.length))
                },
            })
        }

    }
    return (<>
        <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            multiple
            onChange={onChangeInput}
            defaultValue={[]}
            value={[]}
            type="file"
            accept="image/*"
        />
        <div className="flex flex-wrap">
            {corpus.loading ? <CustomCircularProgress /> : corpus?.values?.map((link, i) => {
                return <div key={i} className="relative my-2 ">
                    <ImageCard link={link} onRemove={onRemove} />
                </div>
            })}
        </div>

    </>)
}

function ImageCard(props: TImageCardProps) {
    return (<div className="relative my-2 ">
        <img
            src={props.link}
            alt=""
            className="w-32 h-32 object-cover rounded-lg ms-1"
        />
        <button
            onClick={() => { props.onRemove(props.link) }}
            className="absolute top-0 right-0 mt-1 mr-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
            <IoMdClose />
        </button>
    </div>)
}

type TImageCardProps = {
    link: string,
    onRemove: (link: string) => void
}


type TImageActionProps = {
    onSuccess: (e: string[]) => void,
    path: string,
}
type TCorpus = { loading: boolean, values: string[] }
const INIT_CORPUS: TCorpus = { loading: false, values: [] }
