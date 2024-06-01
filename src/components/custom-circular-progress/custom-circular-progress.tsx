import { FC } from "react"
import { Icon } from "@iconify/react"
const CustomCircularProgress: FC = () => {
    return (<div className="flex h-screen border justify-center items-center">
        <Icon icon='line-md:loading-loop' className='text-indigo-600 text-5xl' />
    </div>)
}
export default CustomCircularProgress;
