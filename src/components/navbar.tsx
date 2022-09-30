import Link from 'next/link';
import React from 'react'


const Navbar = () => {
  return (
    <div className='bg-white text-slate-800 flex shadow-md'>
        <div className=' flex-1 p-3 m-2'>LOGO</div>
        <div className='flex p-3'>
            <div className='hover:text-green-600 m-2 tracking-wide'> 
            <Link href="/"> 
            <a>Accueil</a>
             </Link>
             </div>
             <div className='hover:text-green-600 m-2 tracking-wide'> 
            <Link href="/"> 
            <a>Zone de livraison</a>
             </Link>
             </div>
            <div className=' m-2 tracking-wide'> 
            <Link href="/"> 
            <a className='text-slate-800 py-2 px-2 hover:bg-green-400 bg-green-200 rounded-md '>Se Connecter</a>
             </Link>
             </div>
        </div>
    </div>
  )
}

export default Navbar;