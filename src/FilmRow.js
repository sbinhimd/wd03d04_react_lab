
import './index.css'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
import React, { Component } from 'react'

export default class FilmRow extends Component {
  render() {
    let posterUrl2 = this.props.url
    let posterImg = this.props.film.poster_path
    
    return(
      <div className="film-row" onClick={this.handleDetailsClick}>
   {/* <img src={posterUrl+props.film.poster_path} alt="" /> */}
   <FilmPoster posterUrl={posterUrl2} posterImg={posterImg}/>
   <div className="film-summary">
   <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} />
     <h1>{this.props.film.title}</h1>
     <p>{new Date(this.props.film.release_date).getFullYear()}</p>
   </div> 

 </div>
    )
  }
}

