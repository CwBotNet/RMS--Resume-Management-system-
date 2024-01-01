import { Jobs } from '@/components/models/Jobs'
import React from 'react'

const JobsPage = () => {
  return (
    <div className='container'>
      <div className="flex justify-center mb-12 mt-[20vh]">
        <h1 className='font-bold'>Jobs</h1>
      </div>
      <Jobs />
    </div>
  )
}

export default JobsPage
