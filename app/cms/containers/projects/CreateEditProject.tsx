import Form from './components/Form'
import { useAppSelector } from '../../../../redux'

const CreateEditProject = ({ id = 'create', closeModal }) => {
    const projects = useAppSelector(({ Cms }) => Cms.Projects.value)
    const currentProject = projects?.find((row) => row.id === id)

    return (
        <div>
            <div className="max-w-screen-xl flex flex-col justify-between mx-auto p-4 mt-4">
                <Form item={currentProject} id={id} closeModal={closeModal} />
            </div>
        </div>
    )
}

export default CreateEditProject
