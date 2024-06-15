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
import ecoswap from "@/assets/img/ecoswap.png";

const ProjectCard = () => {
    return (
       

            <Card className='flex flex-row p-7 justify-between'>

            <Image src={ecoswap} width={500} height={500} alt='image' />
                 <div className='w-[50%]'>
                 <CardHeader>
                    <CardTitle>EcoSwap</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is a MERN App. Motive is to make simple CRUD App. Users can create account and use that to store their tasks. I used bcrypt for encrypting tasks and password to maintain privacy of the users.</p>
                </CardContent>
                <CardFooter>
                    <Button className=' uppercase' >demo</Button>
                </CardFooter>
                 </div>
            </Card>
      

    )
}

export default ProjectCard