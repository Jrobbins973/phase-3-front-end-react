import React, {useState, useEffect} from "react"
import MovieCard from "./MovieCard"
import { Card, Dropdown, Image, Form, Menu, Grid, Checkbox} from 'semantic-ui-react'
import {Link, Switch, Route} from 'react-router-dom'
import MovieDetails from "./MovieDetails"




function MovieContainer(props){
    const [genre, setGenre] = useState("")
    const [oldestToNewest, setOldestToNewest] = useState(false)
    const [oldest, setOldest] = useState(false)
    const [newToOld, setNewToOld] = useState(false)
    // const [newest, setNewest] = useState(false)

const {movies, getMovie, setOrderToOldest, setOrderToNewest, setMovies} = props
const renderMovies = movies.map(movie => <MovieCard key={movie.id} movie={movie} getMovie={getMovie}/>)


useEffect(() => {
    filterGenre()
},[genre])

function genreChooser(e) {
    setGenre(e.target.innerText)

}
function filterGenre(){
    fetch(`http://localhost:9292/movies/genres/${genre}`)
    .then(res => res.json())
    .then(genreData => setMovies(genreData))
    
}

function releaseOrderChanger() {
    setOldestToNewest(!oldestToNewest)
}

// function releaseOrderChangerTwo() {
// setNewToOld(!newToOld)
// }

const genreOptions = [
{ key: 1, text: 'All', value: 1 },
{ key: 2, text: 'Adventure', value: 2 },
{ key: 3, text: 'Fantasy', value: 3 },
{ key: 4, text: 'Crime', value: 4 },
{ key: 5, text: 'Mystery', value: 5 },
{ key: 6, text: 'Sci-Fi', value: 6 },
{ key: 7, text: 'Biography', value: 7 },
{ key: 8, text: 'Drama', value: 8 },
{ key: 9, text: 'Romance', value: 9 },
{ key: 10, text: 'Western', value: 10 },
{ key: 11, text: 'Action', value: 11 },
{ key: 12, text: 'Comedy', value: 11 },
{ key: 13, text: 'Family', value: 11 }
]





return (


    <div>
        
        <Menu>
        <Link to ='/'>
            <button className='button-85'>Home</button>
        </Link>
        <Link to ='/movies'>
        <button className='button-85'>Movies</button>
        </Link>
        
    <Menu compact>
        <Dropdown onChange={genreChooser}  text='Genre' options={genreOptions} simple item />
    </Menu>
    <Menu compact>
        <button onClick={() => setOldest((prevChecked) => !prevChecked)} className='button-85'>Oldest - Newest</button> <Checkbox onChange={releaseOrderChanger} toggle checked={oldest}/>
        {oldest ? setOrderToOldest() : filterGenre()}

        {/* <button onClick={() => setNewest((prevChecked) => !prevChecked)} className='button-85'>Newest - Oldest</button> <Checkbox onChange={releaseOrderChangerTwo} toggle checked={newest}/>
        {newest ? setOrderToNewest() : filterGenre()} */}
        {/* // text='Release Year' options={releaseYearOptions} simple item /> */}
    </Menu>
</Menu>

        <h1 className="movie-container-top">{`${genre}`}</h1>
        
        <Grid columns={4} celled>
        {renderMovies}
        {/* </Card.Group> */}
        </Grid>


    </div>
)

}

export default MovieContainer