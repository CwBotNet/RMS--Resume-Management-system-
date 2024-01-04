
import PopUpFormCompany from '@/components/PopUpFormCompany'
import { Company } from '@/components/models/Company'
const CompanyPage = () => {
  return (
    <div className='container'>
      <div className='flex justify-center mb-12 mt-[20vh] capitalize font-bold'>
        <h1>company page</h1>
      </div>
      <div className='flex justify-end mb-4'>
      <PopUpFormCompany name="Add" button="Add Company +"/>
      </div>
      <Company />
    </div>
  )
}

export default CompanyPage
