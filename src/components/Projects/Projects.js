import React from 'react'
import ProjectsList from './ProjectsList';
import {projects} from "../../data"

function Projects() {
  return (
    <div className='projects'>

      <div className='projects-summary'>
        <p>
          Check out my blog posts on <a className="medium" href="https://tishfaroul.medium.com/"> Medium</a>
          <br/>
          <br/>
          See below for some of my projects.

        </p>


      </div>

      <div className='projects-list'>
        {projects.map((proj) => (
         <ProjectsList  img={proj.img} code={proj.code}
          title={proj.title} demo={proj.demo} key={proj.id}/>
        ))}

 
      </div>
    </div>
  )
}

export default Projects