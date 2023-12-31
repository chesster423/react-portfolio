import React from 'react'
import { Link } from 'react-router-dom'; 

class Navigation extends React.Component {

  render(){

    const pathNames = ['/portfolio', '/game-reviews'];
    const pathName = this.props.pathName;
    let isAbsolute = !pathNames.includes(pathName) ? 'absolute' : '';

    function isActive(path) {
      if(pathName === path) {
        return  'text-pink-700';
      }

      return null;
    }

    return <div>
      <nav className={'flex items-center justify-between flex-wrap p-6 z-10 ' + isAbsolute}> 
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">Chess Dimension</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          
          <div className="text-sm lg:flex-grow font-bold">

            <Link to="/" className={"block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4 " + isActive('/')}>Home</Link> 
            <Link to="/portfolio" className={"block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4 " + isActive('/portfolio')}>Portfolio</Link> 
            <Link to="/game-reviews" className={"block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4 " + isActive('/game-reviews')}>Game Reviews</Link> 
            <Link to="/contact" className={"block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4 " + isActive('/contact')}>Contact</Link> 

          </div>
        </div>
      </nav>
    </div>
  }
}

export default Navigation;