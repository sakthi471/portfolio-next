import React from 'react'
import { Button } from './ui/button'

const AboutSections = () => {
    return (
        <div id='about' className=' w-[70%]  min-h-[500px] flex flex-col items-center gap-9 '>
            <h1 className=' font-bold text-3xl'>About Me</h1>
            <p className='text-center'>Here you will find more information about me, what I do, and my current skills mostly in terms
                of programming and technology</p>
            <div className=' flex flex-row'>
                <div className=' flex flex-col gap-7 items-center '>
                    <h1 className='font-bold text-2xl'>Get to know me!
                    </h1>
                    <p>
                        Hello! I'm Dinesh Kumar M S, a passionate full-stack web developer . My journey began by honing my skills in web development, mastering languages such as HTML, CSS, and JavaScript which led to advanced frameworks and library like React JS , Node JS , Express JS .
                    </p>
                    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    <Button size='lg' className=' uppercase' >contact</Button>
                </div>
            </div>
        </div>
    )
}

export default AboutSections