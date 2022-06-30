import React from 'react'
import {motion} from "framer-motion";

function Home() {

  return (
    <div className='home'>

    {/* <img src="img_3392"/> */}
      <div className='left'>
        <div className='left-wrapper'>
            <h2 className='name'> TISH FAROUL ⚡️🎧🌙</h2>
            <div className='titles'>
              <div className='title-wrapper'>
                <div className='title'> Software Engineer</div>
                <div className='title'> Web Developer</div>
                <div className='title'> Writer</div>
                <div className='title'> Proud Dog-Mom</div>
              </div>
            </div>
            
        </div>
      </div>

      <div className='right'>
        <motion.div animate={{ scale: 1}} initial={{scale: 0}} transition={{ duration: 0.5 }} 
          whileHover={{ scale: 1.1 }}
        className='home-img-wrapper'>
        <img src="IMG_3392.jpg" alt="" className='home-img' />
        </motion.div>
      
      </div>


        
    </div>
  )
}

export default Home