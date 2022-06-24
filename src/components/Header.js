import React from 'react'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <div className='header-box'>

      <Link to="/">
          Home
      </Link>

      <div className="title">
      TISH FAROUL  ⚡️🎧🌙
      </div>
      


      <Link to="/projects">
          Projects
      </Link>

      


      </div>
    
    
    </div>
  )
}

export default Header