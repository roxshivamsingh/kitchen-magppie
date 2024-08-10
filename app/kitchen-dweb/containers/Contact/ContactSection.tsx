import Form from '../Hero/Form'
import ContactSectionBg from "../../assets/contact-section.png"

const ContactSection = () => {
    return (
        <div
            className="relative w-full bg-contain"
            style={{ backgroundImage: `url(${ContactSectionBg})` }}
        >
            <div className="relative z-10 flex flex-col items-start justify-between h-full w-full">
                <div className="absolute w-full h-full bg-black opacity-40" />
                <div className="flex items-center justify-between w-full h-screen container mx-auto max-w-7xl">
                    <div className="flex">
                        <h1 className="text-6xl font-extralight text-white z-20">
                            Book your
                            <br />
                            <span className='font-bold'>Stone Kitchen</span> <br />
                        </h1>
                        {/* <h1
                            className="text-5xl font-extralight text-white z-20"
                            dangerouslySetInnerHTML={{
                                __html: props.item.typography.description,
                            }}
                        /> */}
                    </div>

                    <div className="z-20">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
