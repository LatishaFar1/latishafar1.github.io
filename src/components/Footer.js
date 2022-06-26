import React from 'react'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin, AiOutlineTwitter, AiOutlineBook } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">

      <a href='https://github.com/LatishaFar1'>
        <AiFillGithub />
      </a>

      <a href='mailto: lfaroul14@gmail.com'>
        <AiOutlineMail />
      </a>


      <a href='https://www.linkedin.com/in/latisha-faroul/'>
        <AiFillLinkedin />
      </a>


      <a href='https://twitter.com/TishFaroul'>
        <AiOutlineTwitter />
      </a>


      <a href='https://tishfaroul.medium.com/'>
        <AiOutlineBook />
      </a>
 
    </div>
  )
}

export default Footer