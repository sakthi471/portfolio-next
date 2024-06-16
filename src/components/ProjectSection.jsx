import React from 'react'
import ProjectCard from './ProjectCard'
import ecoswap from "@/assets/img/ecoswap.png";
import campus_connect from "@/assets/img/campus_connect.png";
import hackathon from "@/assets/img/hackathon.png";
import rto_finder from "@/assets/img/rto_finder.png";
import fcapp from "@/assets/img/fcapp.jpg";
import marvel from "@/assets/img/marvel.png";




const projectData = [
    {   id:1,
        title: 'EcoSwap',
        description: "The project is a Next.js website promoting sustainability by facilitating the exchange and donation of surplus items during moves or redecorations. Donors can post items with descriptions and images, while students in need can browse and acquire these items, fostering a sharing community and reducing waste.",
        img: ecoswap,
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
        title: 'Compus Connect',
        description: "The project is a fully functional Next.js website designed to facilitate anonymous student feedback and suggestions for college improvements. Students can post their suggestions, like, and vote on others' submissions, fostering a collaborative environment. By ensuring anonymity, the platform promotes open and honest communication.",
        img: campus_connect,
        link: 'https://www.google.com',
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
        img: marvel,
        link: 'https://www.google.com',
        techStack: [
            {
                name: 'Next js',
                color: 'bg-slate-800'
            },
            {
                name: 'TypeScript',
                color: 'bg-blue-600'
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
        title: 'Food Pre order App',
        description: "A pre-ordering food app has been developed to eliminate waiting times and long queues at the Food Court, comprising both a user app and a Food Court staff app. The user app allows users to browse the menu, select items, and place orders in advance, while also enabling them to track the status of their orders in real-time.",
        img: fcapp,
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
    {   id:5,
        title: 'Hackathon Theme site',
        description: "A Hackathon theme site for a  hackathon event. The site is designed to showcase the event details, sponsors, and registration information to potential participants.",
        img: hackathon,
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
    {   id:6,
        title: 'RTO number finder',
        description: 'A RTO number finder app that helps you to find the RTO details of any vehicle in TamilNadu. You can find the RTO details of any vehicle by entering the vehicle number',
        img: rto_finder,
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



]

const ProjectSection = () => {
    return (
        <div id='project' name='project' className=' flex flex-col items-center  gap-14 pt-24'>
            <div className='flex  flex-col items-center gap-5'>
                <h1 className='font-bold text-3xl capitalize '>projects</h1>
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