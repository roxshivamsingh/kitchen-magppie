import EnquiriesTable from './EnquiryTable'
import Exporter from './Exporter'

const EnquiryPage = () => {
    return (
        <div className='flex mt-10 items-start'>
            <EnquiriesTable />
            <Exporter />
        </div>
    )
}

export default EnquiryPage
