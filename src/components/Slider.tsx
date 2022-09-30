import Image from 'next/image';
import React from 'react'


const Slider = () => {
  return (
    <div className='flex flex-grow  h-[89%]'>
        <div className="relative h-full w-full bg-red-400 flex flex-col justify-center items-center">
   <Image
    alt='Mountains'
    src='/image3.jpg'
    layout="fill"  
  />
  <p className='m-5 relative top-5 text-white '> TEXTE DE QUALITE PRENIUM </p> 
  <button className='m-5 relative top-5 text-slate-900 py-5 px-5 hover:bg-green-800 bg-green-500 rounded-md '> Suivre ma livraison</button> 
  <button className='m-5 relative top-5 text-slate-900 py-5 px-5 hover:bg-green-800 bg-green-500 rounded-md '> Effectuer ma livraison</button> 

</div>
    </div>

  )
}
export default Slider;