import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const HeroSections = () => {
  return (
    <div id='home' name='home' className=' min-h-[400px] flex justify-center pt-20 '>
        <div className=' max-w-[90%] flex flex-col items-center gap-7 justify-center py-10 max-lg:w-full  max-md:w-full '>
        <h1 className=' text-5xl font-bold text-center max-md:text-3xl  ' >HEY, I&apos;M SAKTHI M</h1>
        <p className=' text-center text-lg max-md:text-lg  text-wrap '>I love to work on web application using technologies like React, Tailwind, Node js,Express js,Mongodb</p>
        <Link href={'#project'}  ><Button className='' size='lg'>Projects</Button></Link>
        </div>
    </div>
  )
}

export default HeroSections