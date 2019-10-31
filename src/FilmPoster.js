import React from 'react'
require('dotenv').config()
console.log(process.env);

const FilmPoster = (props) => {
    let posterUrl2 = props.posterImg
    return (
        <div>
          <img src={`${process.env.REACT_APP_IMG_URL}${posterUrl2}`} alt=""/>
           
        </div>
    )
}

export default FilmPoster
