import { Card } from "flowbite-react";


export default function CmsHome() {
    return <div className="container mx-auto">
        <div className="text-5xl font-bold uppercase">Dashboard</div>
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-2 lg:mt-10 md:mt-10">

            <Card
                className="cursor-pointer grow-0"
                renderImage={() => <img src={"../../../../assets/photos/kitchen/g12.png"} alt="image 1" />}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kitchen
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card
                renderImage={() => <img src={"../../../../assets/photos/kitchen/g10.png"} alt="image 1" />}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    User
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card
                // className="max-w-sm"
                renderImage={() => <img src={"../../../../assets/photos/kitchen/g4.png"} alt="image 1" />}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Projects
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </div>
    </div>
}
