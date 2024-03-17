import React from 'react'

const ProjectCard = ({title, description, image1, image2, techstack}) => {
  return (
    <div className='w-full overflow-hidden  min-h-[500px] md:min-h-[300px]  rounded-xl bg-gradient-to-r from-blue-100 dark:from-sky-700 via-bg-sky-400  hover:bg-sky-100 dark:hover:bg-sky-400/50 transition-all flex flex-col md:flex-row  justify-between ProjectCard'>
        <div className='md:w-[60%]  mt-12 ml-6'>
            <h1 className='text-3xl font-bold font-svheavy text-sky-800 dark:text-sky-100'>
                {title}
            </h1>
            <p className='font-sflight text-sm mt-4'>{description}</p>
            <div className='mt-4 grid gap-2 grid-cols-3'>
                {techstack.map((tech, index) => (

                <button key={index} className='border rounded-xl shadow-lg shadow-blue-200 dark:shadow-sky-800 border-sky-800 dark:border-sky-400 py-1 text-xs'>{tech}</button>
                ))}

            </div>
        </div>
        <div className='md:w-[80%] h-full  w-full relative  md:-rotate-[30deg] md:left-24 transition-all ProjectImageCard'>
            <img src={image1} className=' absolute   z-[10] object-cover top-24 left-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  rounded-xl' />
            <img src={image2} className=' absolute z-[9] object-cover top-16 left-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  rounded-xl brightness-75' />
        </div>
      
    </div>
  )
}

export default ProjectCard
