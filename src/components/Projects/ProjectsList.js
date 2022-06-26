import React from 'react'


function ProjectsList({img, code, title, demo}) {
  return (
    <div className='projects-card'>
        <div className='projects-outline'>
            <div className='circle1'></div>
            <div className='circle2'></div>
            <div className='circle3'></div>
        </div>

        <a href={demo}> 
        {title}
        <img src={img} alt="pending completion" className='project-img' />
        
        </a>
    </div>
  )
}

export default ProjectsList