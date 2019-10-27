import React from 'react'
import './index.css'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {
    // var posterUrl = "https://image.tmdb.org/t/p/w500"
    let posterUrl2 = props.url
    let posterImg = props.item.poster_path
    let handleDetailsClick=(film)=>{
      console.log(`Fetching details for ${film}`);
      
    }
    return (

<div className="film-row" onClick={()=>handleDetailsClick('Film Row Clicked')}>
  {/* <img src={posterUrl+props.item.poster_path} alt="" /> */}
  <FilmPoster posterUrl={posterUrl2} posterImg={posterImg}/>
    

  <div className="film-summary">
  <Fave/>
    <h1>{props.item.title}</h1>
    <p>{new Date(props.item.release_date).getFullYear()}</p>
  </div> 

</div>
    )
}

export default FilmRow
