import React from 'react'
import ProjectCard from './ProjectCard'
import ecoswap from "@/assets/img/ecoswap.png";
import campus_connect from "@/assets/img/campus_connect.png";
import hackathon from "@/assets/img/hackathon.png";
import rto_finder from "@/assets/img/rto_finder.png";



const projectData = [
    {
        title: 'EcoSwap',
        description: "The project is a fully functional Next.js website designed to promote sustainability by facilitating the exchange and donation of surplus items during relocation or redecoration. This platform allows donors to post giveaway items along with their names, descriptions, and sample images. Students in need can browse these listings and acquire surplus items, fostering a community of sharing and reducing waste.",
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
                color: 'bg-slate-900'
            },
            {  
                name: 'MongodDB',
                color: 'bg-green-600'
            },
        ],
    },
    // {
    //     title: 'Food Pre order App',
    //     description: 'This is a project',
    //     img: 'https://via.placeholder.com/150',
    //     link: 'https://www.google.com',
    //     techStack: ['ReactNative', 'Nativewind',],
    // },
    // {
    //     title: 'Marvel blog site',
    //     description: 'This is a project',
    //     img: 'https://via.placeholder.com/150',
    //     link: 'https://www.google.com',
    //     techStack: ['Next js', 'Tailwind', 'MongoDB'],
    // },
    {
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
    {
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
                projectData.map((project, index) => (
                     <ProjectCard key={index} project={project} />
                ))
           }


        </div>
    )
}

export default ProjectSection