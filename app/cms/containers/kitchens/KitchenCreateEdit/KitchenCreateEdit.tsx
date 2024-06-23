import Form from '../components/Form'
import { useAppSelector } from '../../../../../redux'

type TProps = { id?: string, closeModal?: VoidFunction }


export default function KitchenCreateEdit(props: TProps) {
    const { id = 'create', closeModal } = props;
    const kitchens = useAppSelector(({ Cms }) => Cms.Kitchens.value)
    const currentKitchen = kitchens?.find((row) => row.id === id)


    return (
        <div>
            <div className="max-w-screen-xl flex flex-col justify-between mx-auto p-4 mt-4">
                <Form item={currentKitchen} id={id} closeModal={closeModal} />
            </div>
        </div>
    )
}
