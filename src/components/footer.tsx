import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-slate-600 text-white flex flex-col'>
        <div className='flex justify-end m-10'> <a href='' className='py-5 px-5 w-44 rounded-md bg-green-500 hover:bg-green-600 flex justify-center '>DEVENIR LIVREUR</a></div>
        <div className='flex justify-center'>            <p className='flex'>Copyright © DABWEB</p></div>

{/*             <a href='' className='py-5 px-5 w-44 rounded-md bg-green-500 hover:bg-green-600 flex justify-center '>DEVENIR LIVREUR</a>
            <p className='flex'>Copyright, Made with love from Abidjan 225</p>
 */}    </footer>
  )
}

export default Footer