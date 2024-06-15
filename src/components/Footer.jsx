import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full p-10 flex flex-row items-center justify-around bg-slate-900 text-white'>

        <div className=' w-[50%] flex flex-col gap-5'>
            <h1 className=' font-bold text-xl'>Sakthi M</h1>
            <p className=' text-sm text-slate-400'>A Frontend focused Web Developer building the Frontend of Websites and
            Web Applications that leads to the success of the overall product</p>

        </div>
        <div className=' flex flex-col items-center gap-5 '>
            <p className=' font-bold text-xl capitalize'>social</p>
            <div className='flex gap-4 items-center'>
            <Linkedin/>
            <Github/>
            <Twitter/>
            <Instagram/>
            </div>
        </div>
        </div>
    )
}

export default Footer