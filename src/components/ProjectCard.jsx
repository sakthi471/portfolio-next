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

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const ProjectCard = ({ project }) => {
    return (


        <Card className=' w-[90%] flex flex-row py-7 pl-16   gap-6  shadow-xl'>


            <Carousel className="w-[500px] h-[300px] ">
                <CarouselContent>
                    {project?.images.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className='relative w-[500px] h-[300px]'>
                                <Image src={img} alt="Current Image" placeholder='blur' layout={'fill'} objectFit={'contain'} sizes='100vw'  />
                            </div>  
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className=' w-[50%] pl-3 flex flex-col justify-between'>
                <div className='flex flex-col '>
                    <CardHeader>
                        <CardTitle className=' text-lg font-bold'>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent >
                        <div>
                            <p className='text-sm'> {project.description}</p>
                        </div>
                    </CardContent>
                </div>
                <CardFooter className='flex justify-between'>
                    <Link href={project.link} target='_blank' ><Button className=' capitalize'>demo</Button></Link>
                    <div className='flex items-center gap-3'>
                        {
                            project.techStack.map((tech, index) => (
                                <Badge key={index} className={`"capitalize text-white " ${tech.color} `}>{tech.name}</Badge>
                            ))
                        }

                    </div>

                </CardFooter>
            </div>
        </Card>


    )
}

export default ProjectCard