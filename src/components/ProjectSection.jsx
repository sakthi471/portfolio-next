import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
    return (
        <div className=' flex flex-col items-center  gap-14'>
            <div className='flex  flex-col items-center'>
            <h1 className='font-bold text-3xl '>projects</h1>
            <p>Here you will find some of the personal and hackathon projects</p>
            </div>
      <ProjectCard/>
      <ProjectCard/>

        </div>
    )
}

export default ProjectSection