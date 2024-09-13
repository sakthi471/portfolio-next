import React from 'react'
import { Badge } from "@/components/ui/badge"
import { badgeVariants } from "@/components/ui/badge"
import Link from 'next/link'



const skills = [
    {
        name: 'Next.js',
        link:'https://nextjs.org/'

    },


    {
        name: 'React.js',
        link:'https://reactjs.org/'
    }
    , {
        name: 'Tailwind.css',
        link:'https://tailwindcss.com/'
    }
    , {
        name: 'Node.js',
        link:'https://nodejs.org/en/'
    }
    , {
        name: 'Express.js',
        link:'https://expressjs.com/'
    }
    , {
        name: 'MongoDB',
        link:'https://www.mongodb.com/'
    },
    {
        name: 'Javascript',
        link:'https://www.javascript.com/'

    },

    {
        name: 'Sql',
        link:'https://www.mysql.com/'

    }
    , {
        name: 'Figma',
        link:'https://www.figma.com/'
    },
    {
        name:'sass',
        link:'https://sass-lang.com/'

    }
    ,
    {
        name: 'Git',
        link:'https://git-scm.com/'
    },
    {
        name:'Shandcn',
        link:'https://ui.shadcn.com/'
    }
    ,
    {
        name: 'Java',
        link:'https://www.java.com/en/'
    }
    ,
    {
        name: 'Typescript',
        link:'https://www.typescriptlang.org/'
    }
    ,{
        name: 'c',
        link:'https://en.wikipedia.org/wiki/C_(programming_language)'
    
    }


]

const SkillsSections = () => {
    return (
        <div id='skils' name='skills' className=' flex  flex-col items-center gap-10 min-h-[400px] pt-24 '>
            <h1 className='text-3xl font-bold'>My Skills</h1>
            <div className=' min-w-[70%] flex flex-row justify-center flex-wrap gap-5 '>
                {
                    skills.map((skill, index) => (
                        <Link key={index} href={skill.link} target='_blank' className={'hover:bg-primary/80 text-base  font-normal w-[130px] hover:text-white h-[40px] '+badgeVariants({ variant: "outline" })}>{skill.name}</Link>

                    ))
                }
            </div>
        </div>
    )
}

export default SkillsSections