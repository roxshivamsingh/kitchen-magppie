import { Button, TextInput, Label } from 'flowbite-react'

const ContactForm = () => {
    return (
        <form>
            <div className="mb-4">
                <Label className="block text-gray-700" value="Your Name" />
                <TextInput
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
            </div>
            <div className="mb-4">
                <Label className="block text-gray-700" value="Mobile Number" />
                <TextInput
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
            </div>
            <div className="mb-4">
                <Label className="block text-gray-700" value='Email' />
                <TextInput
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
                <small className="text-gray-500">
                    We'll only use your email to respond to your inquiry
                </small>
            </div>
            <div className="mb-4">
                <Label className="block text-gray-700" value='City' />
                <TextInput
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
                <small className="text-gray-500">
                    This helps us provide better service and estimates
                </small>
            </div>
            <Button type="submit" className="mt-4 bg-blue-800 w-full">
                Submit
            </Button>
            <p className="mt-2 text-gray-500 text-center">
                Don’t worry we never share your information with anyone
            </p>
        </form>
    )
}

export default ContactForm
