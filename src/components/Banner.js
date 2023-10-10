import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Banner extends React.Component {
  render(){
    return <div className='bg-gray-800 min-h-screen banner px-5'>
        <div className='container mx-auto text-white pt-20 grid lg:grid-cols-2'>
            <div>
                <h1 className='lg:text-8xl text-4xl text-slate-500 font-medium lg:mt-20 lg:pt-20'>Hi, I'm <span className='text-white'>Chesster</span></h1>
                <p className='lg:text-5xl text-2xl mt-4 text-teal-200'>A Web Developer</p>
                <p className='text-slate-500 lg:text-xl mt-4 italic'>
                    Full-stack Developer. Enjoys learning, hearing new idea, and trying new technologies. Understands the problem and provides solutions using relentless logic. Creative, curious, passionate, deep thinker, crazy, weird but fun and gets the job done. 
                </p>

                <div className='flex'>
                  {/* <FontAwesomeIcon icon={faCoffee} /> */}
                </div>
            </div>
            <div>

            </div>
        </div>

        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>

        <section>
            <div class='air air1'></div>
            <div class='air air2'></div>
            <div class='air air3'></div>
            <div class='air air4'></div>
        </section>

        <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>

    </div> 
  }
}

export default Banner;