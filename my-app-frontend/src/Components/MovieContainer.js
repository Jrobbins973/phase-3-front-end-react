import React from "react"
import MovieCard from "./MovieCard"
import { Card, Icon, Image, Grid, Menu} from 'semantic-ui-react'
import {Link, Switch, Route} from 'react-router-dom'
import MovieDetails from "./MovieDetails"




function MovieContainer(props){
const {movies, getMovie} = props
const renderMovies = movies.map(movie => <MovieCard key={movie.id} movie={movie} getMovie={getMovie}/>)


return (


    <div>


        <Card.Group itemsPerRow={5}>
        {renderMovies}
        </Card.Group>
        


    </div>
)

}

export default MovieContainer