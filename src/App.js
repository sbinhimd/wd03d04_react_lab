import React, { Component } from 'react'
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'


export default class App extends Component {
  

  constructor(props){
    super(props)
    this.state={
    films:TMDB.films,
    faves:[],
    current:{}
    
  }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }

   handleDetailsClick=(film)=>{
    console.log(`Fetching details for ${film}`);
  }

  handleFaveToggle=(film)=>{
    const faves =this.state.faves.slice(0)
    const filmIndex=faves.indexOf(film)

    if(filmIndex===-1){
      console.log(`Adding [FILM NAME] to faves`);
      faves.push(film)
    }else{
      console.log(`Removing [FILM NAME] from faves`);
      faves.splice(filmIndex,1)
      
    }
    this.setState({
      faves: faves
    })
    
  }
  render() {
    return (
      <div className="App" >
        <div className="film-library">
        <FilmListing films={this.state.films} moviesImg={TMDB.api_key} onFaveToggle={this.handleFaveToggle} faves={this.state.faves} />
        <FilmDetails current={this.state.current}/>

        </div>
        </div>
    )
  }
}

