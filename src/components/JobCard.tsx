import React from 'react'

type Props = {
    title: string
    hook: string
    companyName: string
    salary: string
    id: string
}

const JobCard = ({title, hook, companyName, salary, id}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center border p-4 rounded-xl shadow-xl z-10 '>
        <div>
          {title}
        </div>
        <div className='text-5xl font-bold font-mono flex gap-x-4 '>
            {title}
            
        </div>
    </div>
  )
}

export default JobCard