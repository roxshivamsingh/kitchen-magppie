import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Header from '../kitchens/components/Header'

export default function CmsHome() {

    return (

        <div className="">
            <Header />

            <div className="container mx-auto min-h-screen">

                <div className="text-3xl font-bold uppercase text-center mt-2">
                    Dashboard
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 space-x-2 lg:mt-10 md:mt-10 gap-10">
                    <Link to="/cms/kitchen">
                        <Card
                            className="cursor-pointer grow-0"
                            renderImage={() => (
                                <img
                                    src={
                                        '../../../../assets/photos/kitchen/g12.png'
                                    }
                                    alt="image 1"
                                />
                            )}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Kitchen
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </Card>
                    </Link>
                    <Card
                        renderImage={() => (
                            <img
                                src={'../../../../assets/photos/kitchen/g10.png'}
                                alt="image 1"
                            />
                        )}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            User
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions
                            of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Link to="/cms/projects">
                        <Card
                            // className="max-w-sm"
                            renderImage={() => (
                                <img
                                    src={'../../../../assets/photos/kitchen/g4.png'}
                                    alt="image 1"
                                />
                            )}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Projects
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}
