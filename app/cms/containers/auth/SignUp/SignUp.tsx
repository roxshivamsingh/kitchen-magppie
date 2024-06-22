import Form from '../components/Form'
import LoginBanner from "../../../../../assets/photos/kitchen/g5.png"
export function CmsSignUp() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Form />
            <div className="md:w-1/2 hidden md:block">
                <img
                    src={LoginBanner}
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
