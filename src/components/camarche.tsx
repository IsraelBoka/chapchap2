import React from 'react'

type Props = {'text' : string, 'logo' : string}

const Camarche = (props: Props) => {
  return (
    <div className='bg-gray-200 py-5 px-5 m-5 border-slate-500 w-96 h-96 rounded-lg flex  justify-center items-center'>
        <div className='flex flex-col'>
        <div className='mb-20'>{props.logo}</div>
        <div className=' text-center'>{props.text}</div>

        </div>
    </div>
  )
}

export default Camarche