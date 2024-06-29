import React from 'react'
import ProjectCard from './ProjectCard'

import ecoswap1 from "@/assets/img/ecoswap1.png";
import ecoswap2 from "@/assets/img/ecoswap2.png";
import ecoswap3 from "@/assets/img/ecoswap3.png";
import ecoswap4 from "@/assets/img/ecoswap4.png";
import ecoswap5 from "@/assets/img/ecoswap5.png";

import campus1 from "@/assets/img/campus1.png";
import campus2 from "@/assets/img/campus2.png";
import campus3 from "@/assets/img/campus3.png";
import campus4 from "@/assets/img/campus4.png";

import mcu1 from "@/assets/img/mcu1.png";
import mcu2 from "@/assets/img/mcu2.png";
import mcu3 from "@/assets/img/mcu3.png";
import mcu4 from "@/assets/img/mcu4.png";

import hackathon1 from "@/assets/img/hackathon1.png";
import hackathon2 from "@/assets/img/hackathon2.png";

import rto1 from "@/assets/img/rto1.png";

import fc1 from "@/assets/img/fc1.jpg";
import fc2 from "@/assets/img/fc2.jpg";
import fc3 from "@/assets/img/fc3.jpg";
import fc4 from "@/assets/img/fc4.jpg";
import fc5 from "@/assets/img/fc5.jpg";




const projectData = [
    {   id:1,
        title: 'EcoSwap',
        description: "The project is a Next.js website promoting sustainability by facilitating the exchange and donation of surplus items during moves or redecorations. Donors can post items with descriptions and images, while students in need can browse and acquire these items, fostering a sharing community and reducing waste.",
        images: [
            ecoswap1,
            ecoswap2,
            ecoswap3,
            ecoswap4,
            ecoswap5,
        ],
        link: 'https://ecoswap-app.vercel.app/',
        techStack: [
            {  
                name: 'Next js',
                color: 'bg-black'
            },
            {
                name: 'Tailwind',
                color: 'bg-blue-800'
            },
            {
                name: 'MongoDB',
                color: 'bg-green-600'
            },
        ],
    },
    {
        id:2,
        title: 'Campus Connect',
        description: "The project is a fully functional Next.js website designed to facilitate anonymous student feedback and suggestions for college improvements. Students can post their suggestions, like, and vote on others' submissions, fostering a collaborative environment. By ensuring anonymity, the platform promotes open and honest communication.",
        images:[
            campus1,
            campus2,
            campus3,
            campus4,
        ] ,
        link: 'https://campus-connect-gules.vercel.app/',
        techStack: [
            {  
                name: 'Next js',
                color: 'bg-slate-800'
            },
            {  
                name: 'Shandcn',
                color: 'bg-slate-400'
            },
            {  
                name: 'MongodDB',
                color: 'bg-green-600'
            },
        ],
    },
    {   id:3,
        title: 'Marvel blog site',
        description: 'This is a blog site for marvel fans. The site is designed to showcase the marvel characters, comics, and movies, and also the site has a blog section where the users can read and write blogs about marvel.  ',
        images:[
            mcu1,
            mcu2,
            mcu3,
            mcu4,
        ],
        link: 'https://mcu-blog.vercel.app/',
        techStack: [
            {
                name: 'Next js',
                color: 'bg-slate-800'
            },
           
            {
                name: 'Tailwind',
                color: 'bg-blue-800'    
            }
            ,
            {
                name: 'MongodDB',
                color: 'bg-green-600'
            },
            
        ],
    },
   
    {   id:4,
        title: 'Hackathon Theme site',
        description: "A Hackathon theme site for a  hackathon event. The site is designed to showcase the event details, sponsors, and registration information to potential participants.",
        images: [
            hackathon1,
            hackathon2,
        ],
        link: 'https://hackathon-theme-website.netlify.app/',
        techStack: [
            {  
                name: 'React js',
                color: 'bg-blue-500'
            },
            {  
                name: 'Tailwind',
                color: 'bg-blue-800'
            },
            
        ],
    },
    {   id:5,
        title: 'RTO number finder',
        description: 'A RTO number finder app that helps you to find the RTO details of any vehicle in TamilNadu. You can find the RTO details of any vehicle by entering the vehicle number',
        images:[
            rto1,
        ],
        link: 'https://sakthi471.github.io/RTO-Number-Finder/',
        techStack: [
            {  
                name: 'HTML',
                color: 'bg-orange-500',
            },
            {  
                name: 'Tailwind',
                color: 'bg-blue-800'
            },
        ],
    },

    {   id:6,
        title: 'Food Pre order App',
        description: "A pre-ordering food app has been developed to eliminate waiting times and long queues at the Food Court, comprising both a user app and a Food Court staff app. The user app allows users to browse the menu, select items, and place orders in advance, while also enabling them to track the status of their orders in real-time.",
        images: [
            fc1,
            fc2,
            fc3,
            fc4,
            fc5,
        ],
        link: 'https://www.google.com',
        techStack: [{
            name: 'ReactNative',
            color: 'bg-blue-500'
        },
     
        {
            name: 'Nativewind',
            color: 'bg-blue-800'    
        
        }],
    },



]

const ProjectSection = () => {
    return (
        <div id='project' name='project' className=' flex w-full flex-col items-center  gap-14 pt-24'>
            <div className='flex  flex-col items-center px-6 gap-5'>
                <h1 className='font-bold text-3xl capitalize text-center '>projects</h1>
                <p>Here you will find some of the personal and hackathon projects</p>
            </div>

           {
                projectData.map((project,) => (
                     <ProjectCard key={project.id} project={project} />
                ))
           }


        </div>
    )
}

export default ProjectSection