// import { db, firestore } from "../../config/firebase.config";
import { TComponentItem } from "../../types/component"

type TProps = { data: TComponentItem }
export default function Hero({ data }: TProps) {
    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${data.links.bg})` }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-6xl lg:text-7xl font-bold mb-4"

                    // onClick={() => {
                    //     const { addDoc, collection } = firestore
                    //     _CUSTOMER_SITE_COMPONENTS?.forEach((row) => {
                    //         addDoc(collection(db, 'customer-site-components'), row)

                    //     })
                    // }}
                    >
                        {data.typography.main}
                    </h1>
                    <p className="lg:text-4xl text-lg mb-4">
                        {data.typography.secondary}
                    </p>
                    <p className="text-sm lg:text-xl font-bold">
                        {data.typography.subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}
