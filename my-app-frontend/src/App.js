
import './App.css';
import React, {useState, useEffect} from 'react';
import MovieContainer from './Components/MovieContainer';

const baseUrl = 'http://localhost:9292/movies'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
      fetch(baseUrl)
      .then(res => res.json())
      .then(setMovies)
  },[])
  


// console.log(movies)


  return (
    <MovieContainer movies = {movies}/>
  )

}

export default App;
