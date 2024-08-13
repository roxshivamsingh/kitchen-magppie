import { useFirebaseConsultationListener } from '../../utils/firebase/customer'
import EnquiriesTable from './EnquiryTable'
import Exporter from './Exporter'

const EnquiryPage = () => {
    useFirebaseConsultationListener()

    return (
        <div className='flex mt-10 items-start'>
            <EnquiriesTable />
            <Exporter />
        </div>
    )
}

export default EnquiryPage
