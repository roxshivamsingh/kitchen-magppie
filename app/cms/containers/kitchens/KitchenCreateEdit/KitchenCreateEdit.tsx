import { useParams } from 'react-router-dom';
import Form from '../components/Form'
import Header from '../../../components/Header'
import { useAppSelector } from '../../../../../redux';

export default function KitchenCreateEdit() {
    const params = useParams()

    const kitchens = useAppSelector(({ Cms }) => Cms.Kitchens.value);

    const currentKitchen = kitchens?.find((row) => row.id === params.id)
    return (
        <div>
            <Header />
            <div className="max-w-screen-xl flex flex-col justify-between mx-auto p-4 mt-4">
                <h1 className="font-bold text-3xl mb-6">{'id' in params ? 'Edit' : 'Add'} Kitchen</h1>
                <Form item={currentKitchen} />
            </div>
        </div>
    )
}


