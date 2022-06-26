import React from 'react'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <div className='wrapper'>
     {/* <ul>

      <li>
      <Link to="/">
          Home
      </Link>
      </li>

  
      <li>
      <Link to="/about">
          About
      </Link>

      </li>

      <li>
      <Link to="/projects">
          Projects
      </Link>

      </li>
      

      </ul> */}
      </div>

    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li>
        <Link to="/">
          Home
      </Link>
        </li>
  			<li>
        <Link to="/about">
          About
      </Link>
        </li>
  			<li>
        <Link to="/projects">
          Projects
      </Link>
        </li>
  			
  		</ul>
  	</nav>

    
    
    </div>
  )
}

export default Header