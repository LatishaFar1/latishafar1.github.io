import React from 'react'

function Home() {
  return (
    <div className='home'>

    {/* <img src="img_3392"/> */}
      <div className='left'>
        <div className='left-wrapper'>
            <h1 className='name'> TISH FAROUL ⚡️🎧🌙</h1>
            <div className='titles'>
              <div className='title-wrapper'>
                <div className='title'> Software Engineer</div>
                <div className='title'> Writer</div>
                <div className='title'> Proud-Dog Mom</div>
              </div>
            </div>
                <div className='summary'>
                  summary....
                </div>
        </div>
      </div>

      <div className='right'>
        <div className='home-img-wrapper'>
        <img src="IMG_3392.jpg" alt="" className='home-img' />
        </div>
      
      </div>
        
    </div>
  )
}

export default Home