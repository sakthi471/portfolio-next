import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import Image from 'next/image'
import { Badge } from './ui/badge';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    return (


        <Card className=' w-[90%] flex flex-row p-7 gap-6 justify-between shadow-xl'>

            <Image src={project.img}className='' width={400}  alt='image' />
            <div className=''>
                <CardHeader>
                    <CardTitle className=' text-lg font-bold'>{project.title}</CardTitle>
                </CardHeader>
                <CardContent >
                    <div>
                        <p className='text-sm'> {project.description}</p>
                    </div>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Link href={project.link} target='_blank' ><Button className=' capitalize'>demo</Button></Link>
                    <div className='flex items-center gap-3'>
                        { 
                            project.techStack.map((tech, index) => (
                                <Badge key={index}   className={`"capitalize " ${tech.color} `}>{tech.name}</Badge>
                            ))
                        }
                
                    </div>

                </CardFooter>
            </div>
        </Card>


    )
}

export default ProjectCard