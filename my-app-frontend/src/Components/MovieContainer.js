import React, {useState} from "react"
import MovieCard from "./MovieCard"
import { Card, Dropdown, Image, Form, Menu, Grid} from 'semantic-ui-react'
import {Link, Switch, Route} from 'react-router-dom'
import MovieDetails from "./MovieDetails"




function MovieContainer(props){
const {movies, getMovie} = props
const renderMovies = movies.map(movie => <MovieCard key={movie.id} movie={movie} getMovie={getMovie}/>)



// console.log(genre)
return (


    <div>
        
        {/* <Card.Group itemsPerRow={2}> */}
        
        <Grid columns={4} celled>
        {renderMovies}
        {/* </Card.Group> */}
        </Grid>


    </div>
)

}

export default MovieContainer