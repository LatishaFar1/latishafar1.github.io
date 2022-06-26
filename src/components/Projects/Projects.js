import React from 'react'
import ProjectsList from './ProjectsList';


function Projects() {
  return (
    <div className='projects'>

      <div className='projects-summary'>
        <p>
          Check out my blog posts on <a href="href='https://tishfaroul.medium.com/"> Medium</a>
          <br/>
          <br/>
          See below for some of my projects.

        </p>


      </div>

      <div className='projects-list'>
        
      <ProjectsList />
      <ProjectsList />
      <ProjectsList />
      <ProjectsList />
      </div>
    </div>
  )
}

export default Projects