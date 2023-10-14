import React from 'react'


class Footer extends React.Component {
  render(){
    return <div className='h-80 px-5 border-t'>
        <div className='container mx-auto text-white pt-20 pb-20 grid lg:grid-cols-2'>
            <div>
                <h2 className='text-3xl font-bold'>Let's work <span className='text-pink-700'>together</span></h2>
                <button>Contact me</button>
            </div>
            <div>
            <h2 className='text-3xl font-bold'>You can find me in <span className='text-amber-400'>social media</span></h2>
            </div>
        </div>

        <div className='container mx-auto text-white mt-20 text-center pb-10'>
            <p>Built in ReactJS - Tailwind</p>
            <p>Copyright © 2023 Chesster Dingcong. All rights reserved.</p>
        </div>
    </div> 
  }
}

export default Footer;