
import Form from '../components/Form'
import Header from '../components/Header'

export default function KitchenCreateEdit() {

    return (
        <div>
            <Header />
            <div className="max-w-screen-xl flex flex-col justify-between mx-auto p-4 mt-4">
                <h1 className="font-bold text-3xl mb-6">Add Kitchen</h1>
                <Form />
            </div>
        </div>
    )
}


