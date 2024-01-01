import { Company } from '@/components/models/Company'
import React from 'react'

const CompanyPage = () => {
  return (
    <div>
      <div className='flex justify-center mb-12 mt-[20vh] capitalize font-bold'>
        <h1>company page</h1>
      </div>
      <Company />
    </div>
  )
}

export default CompanyPage
