import React from "react";

function MovieCard(props) {
const {movie} = props
// console.log(movie.title)
    return <div>
        <h1>{movie.title}</h1>
        <h2>{`Directed by: ${movie.director}`}</h2>
        <h3>{movie.MPA_rating}</h3>
        <img src={movie.poster}/>
    </div>
}

export default MovieCard