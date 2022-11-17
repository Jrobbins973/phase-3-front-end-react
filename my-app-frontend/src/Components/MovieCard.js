import React from "react";
import { Card, Icon, Image} from 'semantic-ui-react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import MovieDetails from "./MovieDetails";
import {Link, Switch, Route} from 'react-router-dom'



function MovieCard(props) {
const {movie, getMovie} = props



function handleClick() {
    getMovie(movie)
}

// console.log(movie.title)
    return (
<div>







    
        <Card color='red'>
        <Image src={movie.poster} wrapped ui={false} bordered />
        <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{`Rated: ${movie.MPA_rating} | Released: ${movie.release_year}`}</span>
            </Card.Meta>
            <Card.Description>
                {/* <span>{`Starring: ${movie.stars}`}</span> */}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <span>
                <Icon name='film' />
                {`${movie.imdb_rating} | Directed By: ${movie.director}`}
            </span>
            <br></br>
            <br></br>

        <Link to = {`/movie/${movie.id}`}>
            <Button onClick={handleClick}>Click For More Details</Button>
        </Link>
            </Card.Content>
        </Card>



</div>

    )
}

export default MovieCard