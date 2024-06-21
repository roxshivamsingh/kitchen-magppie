import Form from '../components/Form'
import { useAppSelector } from '../../../../../redux'

export default function KitchenCreateEdit({id = 'create', closeModal}) {
    const kitchens = useAppSelector(({ Cms }) => Cms.Kitchens.value)
    const currentKitchen = kitchens?.find((row) => row.id === id)

    return (
        <div>
            <div className="max-w-screen-xl flex flex-col justify-between mx-auto p-4 mt-4">
                <Form item={currentKitchen} id={id} closeModal={closeModal}/>
            </div>
        </div>
    )
}
