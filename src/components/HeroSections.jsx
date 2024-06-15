import React from 'react'
import { Button } from "@/components/ui/button"


const HeroSections = () => {
  return (
    <div className='w-full min-h-[450px] flex justify-center py-5 '>
        <div className=' w-[60%] flex flex-col items-center gap-7 justify-center py-5 '>
        <h1 className=' text-5xl font-bold ' >HEY, I'M SAKTHI M</h1>
        <p className=' text-center text-lg '>I love to work on web application using technologies like React, Tailwind, Node js,Express js,Mongodb</p>
        <Button size='lg'>Projects</Button>
        </div>
    </div>
  )
}

export default HeroSections