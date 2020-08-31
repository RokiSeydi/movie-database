import React from 'react';


function Movie ({ movie }){
return (
<div className="result">
<img src={movie.Poster} alt="poster"/>
<h3>{movie.Title}</h3>
</div>
)
}      
export default Movie