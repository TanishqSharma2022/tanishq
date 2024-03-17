import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Chrysalis',
      description: 'A modern looking blog website with a Sanity backend for team members to add blogs and magazine editions for Sci-Comm Club. ',
      image1: '/projects/chrysalis/1.png',
      image2: '/projects/chrysalis/2.png',
      techstack: ['Next.js', 'Sanity', 'Tailwind CSS']
    },{
      title: 'IISERB SAC',
      description: 'A professional student council website for the college to showcase their events, achievements and to provide a platform for students to connect with the council.',
      image1: '/projects/sac/1.png',
      image2: '/projects/sac/2.png',
      techstack: ['HTML', 'CSS', 'JS']
    },{
      title: 'College Fest',
      description: 'An appealing website to showcase the college fest events, schedule and to provide a platform for students to register for events.',
      image1: '/projects/fest/1.png',
      image2: '/projects/fest/2.png',
      techstack: ['Next.JS', 'Acternity UI', 'Tailwind CSS']
    },{
      title: 'Backend Dashboard',
      description: 'A backend dashboard to add/edit/delete questions for a quiz app. It also provides a platform to view the quiz results and to manage the users.',
      image1: '/projects/dash/1.png',
      image2: '/projects/dash/2.png',
      techstack: ['Next.JS', 'shadcnUI', 'Tailwind CSS']
    }
  ]
  return (
    <div className='mt-12 grid gap-2'>
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} description={project.description} image1={project.image1} image2={project.image2} techstack={project.techstack} />
      ))
  }
    </div>
  )
}

export default Projects
