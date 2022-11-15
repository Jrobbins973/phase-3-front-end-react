
import './App.css';
import React, {useState, useEffect} from 'react';
import MovieContainer from './Components/MovieContainer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import {Link, Switch, Route} from 'react-router-dom'
import { Button, Menu} from 'semantic-ui-react'
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


        <Menu.Item name='upcomingEvents' >
        Upcoming Events
        </Menu.Item>
</Menu>


    
  <Switch>
      <Route exact path='/'>
            <Home/>
      </Route>



      <Route path='/movies'>
            <MovieContainer movies = {movies} getMovie= {getMovie}/>
      </Route>



        <Route path={`/movie/${movieDetails.id}`}>
              <MovieDetails movieDetails = {movieDetails}/>
        </Route>
  </Switch>

    </div>


  )

}

export default App;
