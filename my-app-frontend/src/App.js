
import './App.css';
import React, {useState, useEffect} from 'react';
import MovieContainer from './Components/MovieContainer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import {Link, Switch, Route} from 'react-router-dom'
import { Button, Menu, Form, Dropdown} from 'semantic-ui-react'
import MovieDetails from './Components/MovieDetails';

const baseUrl = 'http://localhost:9292/movies'

function App() {
  const [movies, setMovies] = useState([])
  const [movieDetails, setMovieDetails] = useState({})
  const [genre, setGenre] = useState("")

  useEffect(() => {
      fetch(baseUrl)
      .then(res => res.json())
      .then(setMovies)
  },[])
  

  useEffect(() => {
    filterGenre()
},[genre])


  // SEARCHER STUFF

  function genreChooser(e) {
      setGenre(e.target.innerText)
      // filterGenre()
      // setTimeout(() => {
      //   filterGenre()
      // }, 5000)
  }


  function filterGenre(){
      fetch(`http://localhost:9292/movies/genres/${genre}`)
      .then(res => res.json())
      .then(genreData => setMovies(genreData))
      
      // setGenre("")
  }

// END SEARCH STUFF

const getMovie = (movie) => {
  setMovieDetails(movie)
}



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

const releaseYearOptions = [
  { key: 1, text: 'Descending', value: 1 },
  { key: 2, text: 'Ascending', value: 2 },
]
  return ( 
  <div >
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
    <Dropdown  text='Release Year' options={releaseYearOptions} simple item />
  </Menu>

{/* <Form onSubmit={filterGenre}>
        <Form.Group>
            <Form.Input
            placeholder='Enter genre'
            name='Review'
            value={genre}
            onChange={genreChooser}
            />
            <Form.Button content='Submit' />
            </Form.Group>
        </Form> */}

</Menu>

    
  <Switch>
      <Route exact path='/'>
            <Home/>
      </Route>



      <Route path='/movies'>
            <MovieContainer movies = {movies} getMovie= {getMovie}/>
      </Route>



        <Route path={`/movie/${movieDetails.id}`}>
          <div >
              <MovieDetails movieDetails = {movieDetails} />
              </div>
        </Route>
  </Switch>

    </div>


  )

}

export default App;
