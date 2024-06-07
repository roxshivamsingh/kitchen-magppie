import ContactForm from './components/ContactForm'

const ContactUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
            <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4">
                    Get started on your dream kitchen today!
                </h1>
            </div>
            <div className="bg-white p-8 rounded shadow-md w-full md:w-1/3">
                <h2 className="text-xl font-semibold mb-4">CONTACT US NOW</h2>
                <p className="mb-4 text-gray-600">
                    Please provide the following information so that we can get
                    in touch with you
                </p>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs
