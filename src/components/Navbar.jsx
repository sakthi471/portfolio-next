import Link from 'next/link'
import React from 'react'


const links = [
  {
    name: 'home',
  }
  , {
    name: 'about'
  },
  {
    name: 'skills'
  }
  , {
    name: 'project'
  }
  , {
    name: 'contact'
  }

]

const Navbar = () => {
  return (
    <div className=' flex shadow-lg fixed w-full top-0 flex-row justify-between items-center px-14 py-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
      <h1 className=' font-bold text-2xl'>Sakthi M</h1>
      <ul className=' capitalize h-full flex flex-row items-center gap-7'>
         {
          links.map((link, index) => (
            <li key={index} className='   text-sm  hover:font-bold cursor-pointer hover:border-b-2 border-primary duration-500 py-2 '>
              <Link href={`#${link.name}`}>{link.name}</Link>   
            </li>
          ))
          
         }
      </ul>

    </div>
  )
}

export default Navbar