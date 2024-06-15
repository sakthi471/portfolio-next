import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex sticky top-0 flex-row justify-between items-center px-14 py-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
         <h1 className=' font-bold text-2xl'>Sakthi M</h1>
         <ul className=' capitalize flex flex-row items-center gap-7'>
            <li>home</li>
            <li>project</li>
            <Link  href='#about' >about</Link>
         </ul>

    </div>
  )
}

export default Navbar