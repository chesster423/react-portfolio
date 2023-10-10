import React from 'react'
import Banner from './Banner';
import ReactLogo from './../images/logo-react.svg';
import AngularLogo from './../images/logo-angular.png';
import VueLogo from './../images/logo-vue.png';

class Home extends React.Component {
  render(){
    return <div>
        <Banner></Banner>
        
        <div className='container mx-auto py-10 mt-5'>
  
          <div className='framework-experience'>
            <h1 className='text-center lg:text-4xl mb-5 text-white'>Javascript Frameworks</h1>
            <div className="grid lg:grid-cols-3 gap-4">
              <div>
                <img src={ReactLogo} alt="logo" className='w-6/12 mx-auto' />
              </div>
              <div>
              <img src={AngularLogo} alt="logo" className='w-4/12 mx-auto'/>
              </div>
              <div>
              <img src={VueLogo} alt="logo" className='w-4/12 mx-auto pt-3' />
              </div>
            </div>
          </div>
  
        </div>
  
        <div className='bg-white py-20 px-5'>
          <div className='container mx-auto'>
            <h1 className='text-left lg:text-4xl text-2xl mb-10'>Here are the skills I can offer:</h1>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className='lg:pr-20 lg:mb-20'>
                <h2 className='text-pink-700 text-2xl font-bold'>Front-end Development.</h2>
                <p className='text-xl text-neutral-500'>Specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications. Ensures that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.</p>
              </div>
  
              <div className='lg:pr-20 lg:mb-20'>
                <h2 className='text-pink-700 text-2xl font-bold'>Back-end Development.</h2>
                <p  className='text-xl text-neutral-500'>Ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. Use code that helps browsers communicate with databases, store, understand, and delete data.</p>
              </div>
  
              <div className='lg:pr-20 lg:mb-20'>
                <h2 className='text-pink-700 text-2xl font-bold'>Graphics Design.</h2>
                <p className='text-xl text-neutral-500'>Create visual communications such as adverts, branding, publicity materials and magazine layouts. Graphic designers (who may also be known as graphic artists) utilise graphic design skills to create media products such as magazines, labels, advertising and signage.</p>
              </div>
  
              <div className='lg:pr-20 lg:mb-20'>
                <h2 className='text-pink-700 text-2xl font-bold'>DevOps.</h2>
                <p className='text-xl text-neutral-500'>Build, test and maintain infrastructure and tools so that software can be developed and released. Create a series of practices and processes that help organisations speed up and automate aspects of developing, testing, releasing and updating software.</p>
              </div>
            </div>
          </div>
        </div>
    </div> 
  }
}

export default Home;