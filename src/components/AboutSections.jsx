import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AboutSections = () => {
    return (
        <div id='about' name='about' className='  w-[65%] max-md:w-full  min-h-[600px] flex flex-col pt-24 items-center gap-9 '>
            <h1 className=' font-bold text-3xl'>About Me</h1>

            <div className=' flex flex-row p-3'>
                <div className=' flex flex-col gap-7 items-center '>

                    <p className="leading-10 md:leading-8 tracking-wider opacity-75">
                    Hello! I&apos;m Sakthi M, A passionate <b> full stack  web developer </b> with a robust foundation in both front-end and back-end technologies. My journey began with mastering the essentials of HTML, CSS, and JavaScript, leading me to <b>advanced frameworks</b> and <b>libraries</b> such as React JS , Next.js ,Tailwind css on the front end. On the back end, I&apos;ve developed expertise in Node JS, Express JS, and working with databases like MongoDB 
                    </p>
                    <p  className="leading-10 md:leading-8 tracking-wider opacity-75">I&apos;m enthusiastic about <b>job </b> opportunities where I can leverage my comprehensive skill set to contribute meaningfully while continuing to learn and grow. If you have an exciting opportunity that aligns with my expertise, please don&apos;t hesitate to reach out. Let&apos;s create something amazing together!.</p>
                    <Link href={'#contact'}>  
                     <Button size='lg' className=' uppercase' >contact</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutSections