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


        <Card className=' min-w-[90%] max-md:w-full flex flex-row justify-center  max-lg:flex-wrap   shadow-xl px-8 max-md:p-0  gap-8 '>


            <Carousel className="w-[550px] h-[300px] max-md:w-[350px] max-md:h-[200px]  px-6  ">
                <CarouselContent>
                    {project?.images.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className='relative w-[550px] h-[300px] max-md:w-[350px] max-md:h-[200px]  '>
                                <Image src={img} alt="Current Image" placeholder='blur' layout={'fill'} objectFit={'contain'} sizes='100vw'  />
                            </div>  
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className=' min-w-[50%]   flex flex-col justify-between max-md:w-full'>
                <div className='flex flex-col '>
                    <CardHeader>
                        <CardTitle className=' text-lg font-bold'>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent >
                        <div>
                            <p className='text-sm max-md:text-base'> {project.description}</p>
                        </div>
                    </CardContent>
                </div>
                <CardFooter className='flex justify-between flex-wrap gap-5'>
                    <Link href={project.link} target='_blank' ><Button size='sm' className=' uppercase'>demo</Button></Link>
                    <div className='flex items-center gap-3   '>
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