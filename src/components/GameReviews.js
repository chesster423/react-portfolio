import React from 'react'

import Common from './functions/Common';

class GameReviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      games: [],
      query: ''
    };
  }


  getGamesList = async() => {
    //  await 
    await fetch('games.json')
      .then(response => response.json())
      .then(data => this.setState({games: data}));
  }

  setQuery(data) {
    this.setState({query: data})
  }

  gamesList() {
    return this.state.games.filter((v) => {
      return v.title.toLowerCase().includes(this.state.query.toLowerCase())
    });
  }

  componentDidMount() {
      // send HTTP request
      // save it to the state
      this.getGamesList();
      
  }


  render(){

    return <div className='container mx-auto pb-20 px-5'>
  
    <div>
      <h1 className='text-center lg:text-4xl mb-20 text-white'>Game Reviews</h1>

      <input className='form-control m-0 block lg:w-6/12 w-full rounded border border-solid border-gray-700 bg-gray-600 bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-pink-600 focus:bg-gray-400 focus:text-gray-700 focus:outline-none' 
      placeholder="Enter Title" 
      onChange={event => this.setQuery(event.target.value)}/>
    
      {this.gamesList().map(game => 
      <div className='text-white border-gray-700 border-solid border mt-3' key={game.title}>
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>
            {/* style={{width: '300px', height: '300px'}} */}
            <div className='overflow-hidden max-h-80'>
              <img className='w-full' src={game.img} alt="Game Image" />
            </div>
          </div>          
          <div className='col-span-9 py-2 px-5'>
            <h3 className='font-bold text-xl'>{game.title}</h3>
            <p className='text-gray-400'>{Common.truncateString(game.description)}</p>
            <a className='text-blue-400 text-right block'>Read Review</a>
          </div>
          <div className='col-span-1 text-center text-3xl font-bold bg-yellow-400 fit-height'>
            <div className='relative' style={{top: '40%'}}><span className='text-black rounded'>{game.rating}</span></div>            
          </div>
        </div>
      </div>)}

    </div>

  </div>
  }
}

export default GameReviews;