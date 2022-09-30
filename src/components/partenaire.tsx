import Image from 'next/image'
import React from 'react'


const Partenaire = () => {
  return (
    <div className='w-full h-full grid grid-cols-2'>
        <div className='bg-slate-300 '>
            <form action="" method="post" className='mt-5 flex flex-col'>
                <div className='flex items-center justify-center'>
                <label htmlFor=""  className=" w-12" >Nom</label>
                <input type="text" name="" id="" className='m-5 w-96 h-12 rounded-md' placeholder="Entrez votre nom"></input>
                </div>
                <div className='flex items-center justify-center'>
                <label htmlFor="" className=" w-12" >Prénom</label>
                <input type="text" name="" id="" className='m-5 w-96 h-12 rounded-md' placeholder="Entrez votre nom"></input>
                </div>
                <div className='flex items-center justify-center'>
                <label htmlFor="" className=" w-12" >Services</label>
                <input type="text" name="" id="" className='m-5 w-96 h-12 rounded-md' placeholder="Entrez votre nom"></input>
                </div>
                <div className='flex items-center justify-center'>
                <label htmlFor="" className=" w-12" >Email</label>
                <input type="text" name="" id="" className='m-5 w-96 h-12 rounded-md' placeholder="Entrez votre nom"></input>
                </div>
                <div className='flex items-center justify-center'>
                <input type="submit" name="" id="" className='m-5 w-96 h-12 cursor-pointer hover:bg-red-500 rounded-md bg-red-400' value="VALIDER"></input>
                </div>
            </form>
        </div>
        <div className='bg-blue-500 '>
            <div className='relative h-full w-full'>
            <Image
            src="/image2.jpg"
            layout='fill'
                        alt="test"
            />
            </div>
        </div>
    </div>
  )
}
export default Partenaire