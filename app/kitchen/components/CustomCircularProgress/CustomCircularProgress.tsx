import { Icon } from "@iconify/react"

export default function CustomCircularProgress() {
    return (<div className="flex h-screen border justify-center items-center">
        <Icon icon='line-md:loading-loop' className='text-indigo-600 text-5xl' />
    </div>)
}
