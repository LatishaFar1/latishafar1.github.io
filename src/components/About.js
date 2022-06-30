import React from 'react'


function About() {
  return (
<div className='summary'>
    <h2>
        <div className='skills'>
            <li>
                <h3 className='summary-title'>SKILLS</h3>
                    <span>JavaScript, ReactJS, Ruby On Rails,
                        Git, SQL, Firebase
                    </span>
              </li>
        </div>
      <ol className='skills'>
          <li>
            <h3 className='summary-title'>SPOKEN LANGUAGES</h3>
              <span> English, French
              </span>
          </li>
      </ol>
     </h2>
    <p>
    I have a background in healthcare management and learned Full-Stack Software Engineering at Flatiron School.
     <br />
    I enjoy building and creating new things.
     <br />
   I love challenging myself and learning new skills and languages.
    <br />
    I'm great at writing and fill my blog about my tech journey.
     <br />
     My main tech language in JavaScript and I mostly focus on frontend work.
     <br />
     Be sure to check out some of my projects and posts on my <a className="medium" href="https://tishfaroul.medium.com/">blog!</a>
    </p>
                </div>
  )
}

export default About