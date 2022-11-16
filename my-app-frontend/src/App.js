
import './App.css';
import React, {useState, useEffect} from 'react';
import MovieContainer from './Components/MovieContainer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import {Link, Switch, Route} from 'react-router-dom'
import { Button, Menu, Form} from 'semantic-ui-react'
import MovieDetails from './Components/MovieDetails';

const baseUrl = 'http://localhost:9292/movies'

function App() {
  const [movies, setMovies] = useState([])
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
      fetch(baseUrl)
      .then(res => res.json())
      .then(setMovies)
  },[])
  

  // SEARCHER STUFF
  const [genre, setGenre] = useState("")

  function genreChooser(e) {
      setGenre(e.target.value)
  }
  
  function filterGenre(e){
      e.preventDefault()
      fetch(`http://localhost:9292/movies/genres/${genre}`)
      .then(res => res.json())
      .then(genreData => setMovies(genreData))
      
      // setGenre("")
  }

// END SEARCH STUFF

const getMovie = (movie) => {
  setMovieDetails(movie)
}



// console.log(movieId)



// console.log(movieDetails.id)
// const getMovieDetails = movies.map(movie => key={movie.id}, movie={movie})
  return ( <div>
    <Menu>
      <Link to ='/'>
        <Button>Home</Button>
      </Link>
      <Link to ='/movies'>
        <Button>Movies</Button>
      </Link>
      <Button>Reset Movies</Button>


</Menu>
   <Form onSubmit={filterGenre}>
        <Form.Group>
            <Form.Input
            placeholder='Enter genre'
            name='Review'
            value={genre}
            onChange={genreChooser}
            />
            <Form.Button content='Submit' />
            </Form.Group>
        </Form>

    
  <Switch>
      <Route exact path='/'>
            <Home/>
      </Route>



      <Route path='/movies'>
            <MovieContainer movies = {movies} getMovie= {getMovie}/>
      </Route>



        <Route path={`/movie/${movieDetails.id}`}>
              <MovieDetails movieDetails = {movieDetails} />
        </Route>
  </Switch>

    </div>


  )

}

export default App;
