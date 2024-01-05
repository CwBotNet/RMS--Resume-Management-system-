import PopupForm from '@/components/PopupForm'
import { Jobs } from '@/components/models/Jobs'

const JobsPage = () => {
  return (
    <div className='container'>
      <div className="flex justify-center mb-12 mt-[20vh]">
        <h1 className='font-bold'>Jobs</h1>
      </div>
      <div className="flex justify-end mb-4">
        <PopupForm name="Add" button="Add Job +" lableFor="Company ID" level="Job level" />
      </div>
      <Jobs update={true} />
    </div>
  )
}

export default JobsPage
