import Form from './components/Form'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux'

export default function CreateEditProject() {
    const params = useParams()
    const projects = useAppSelector(({ Cms }) => Cms.Projects.value)
    const currentProject = projects?.find((row) => row.id === params.id)

    return (
        <div>
            <Header />
            <div className="max-w-screen-xl flex flex-col justify-between mx-auto p-4 mt-4">
                <h1 className="font-bold text-3xl mb-6">
                    {'id' in params ? 'Edit' : 'Add'} Project
                </h1>
                <Form item={currentProject} />
            </div>
        </div>
    )
}

