import { Card } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { CmsHomeData } from './data'
import { FaArrowRight } from 'react-icons/fa'

export default function CmsHome() {
    const navigate = useNavigate()

    return (<div className="container mx-auto items-center flex flex-col mt-20">
        <h1 className="text-3xl mb-8 md:mb-0 font-bold uppercase text-center mt-16">
            Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-2 lg:mt-10 lg:grid-cols-4 md:mt-10 gap-10">
            {CmsHomeData.map((data, i) => (
                <Card
                    onClick={() => {
                        navigate(data.link)
                    }}
                    className="cursor-pointer flex justify-center items-center"
                    key={i}
                    renderImage={() => (<img
                        src={data.image}
                        alt="logo"
                        className="h-80 w-80"
                    />
                    )}
                >
                    <Link to={data.link} className="flex items-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {data.title}
                        </h5>
                        <FaArrowRight className="mt-2 ml-2" />
                    </Link>
                </Card>
            ))}
        </div>
    </div>
    )
}
