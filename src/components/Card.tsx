import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    title: string
    hook: string
}

const Card = ({title, hook}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center border p-4 rounded-xl shadow-xl shadow-red-900 z-10 '>
        <div>

        </div>
        <div className='text-5xl font-bold font-mono flex gap-x-4 '>
            {title}
            <div className='flex justify-center items-center'>
        <ArrowRight className='w-10 h-[40px]'/>
            </div>
        </div>
    </div>
  )
}

export default Card