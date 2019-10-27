import React from 'react'

const FilmPoster = (props) => {
    let posterUrl2 = props.posterUrl+props.posterImg
    // var allFilms =props.films.map((key,index)=>{
    //     key.poster_path
    //     return  
    // })

    // var fulllink = <img src={posterPath+TMDB.films.map((value,index)=>{
               
    //            return <FilmListing value ={posterPath+value.poster_path}/>
    //        })} alt="" />
    return (
        <div>
          <img src={posterUrl2} alt=""/>
           
        </div>
    )
}

export default FilmPoster
