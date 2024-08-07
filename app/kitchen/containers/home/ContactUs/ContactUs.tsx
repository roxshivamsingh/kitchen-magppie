import ContactUsForm from './components/ContactForm'
import ContactusBg from '../../../../../assets/photos/contact-us/contact-us-bg.png'

export default function ContactUs() {
    return (
        <div
            className="flex flex-col md:flex-row items-center justify-center md:justify-start min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${ContactusBg})` }}
        >
            <div className="bg-white p-8 md:ml-40 rounded shadow-md w-full md:w-1/3 mx-5">
                <h2 className="text-xl font-semibold mb-4">CONTACT US NOW</h2>
                <p className="mb-4 text-gray-600">
                    Please provide the following information so that we can get
                    in touch with you
                </p>
                <ContactUsForm />
            </div>
        </div>
    )
}
