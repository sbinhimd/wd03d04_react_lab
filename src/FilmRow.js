
import './index.css'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
import React from 'react'

 const FilmRow=(props)=>  {
  
    let posterUrl2 = props.url
    let posterImg = props.film.poster_path
    
    return(
      <div className="film-row" onClick={handleDetailsClick}>
   {/* <img src={posterUrl+props.film.poster_path} alt="" /> */}
   <FilmPoster posterUrl={posterUrl2} posterImg={posterImg}/>
   <div className="film-summary">
   <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
     <h1>{props.film.title}</h1>
     <p>{new Date(props.film.release_date).getFullYear()}</p>
   </div> 

 </div>
    )
  
}

export default FilmRow