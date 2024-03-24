import './App.css'
// import movieData from '../../movieData'
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie'
import Modal from '../Modal/Modal'
import { useState, useEffect} from 'react'
import { fetchData } from '../../apiCalls'

function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState([])
  const [error, setError] = useState('')
  const [singleMovieId, setSingleMovieId] = useState(0)

  useEffect(() => {
    fetchData('movies')
      .then(data => {
        const sortedMovies = [...data.movies].sort((a, b) => b.average_rating - a.average_rating)
        const topMovie = sortedMovies[0]
        setMovies(data.movies) // Use the unsorted movies data to set state
        if (topMovie) {
          return fetchData(`movies/${topMovie.id}`)
        }
        throw new Error('No top movie found')
      })
      .then(topMovieDescription => {
        setTopDescription(topMovieDescription.movie);
      })
      .catch(error => {
        setError('Oops! Something broke.')
        console.log(error.message)
      });
  }, []);

  // console.log('movies', movies)
  // console.log('description', topDescription)

  function fetchSelectedMovie(movieId) {
    // console.log(`Movie ID - ${movieId}`)
    // console.log(`Movie Title - ${movieTitle}`)
    setSingleMovieId(movieId)
    return movieId
  }

  return (
    <main className="App">
      <nav className="Nav-bar"></nav>
      {movies.length > 0 ? (
        <>
        {singleMovieId !== 0 && <Modal movies={movies} id={singleMovieId}/>}
        <TopMovie movies={movies} topDescription={topDescription} />
        <Movies movies={movies} fetchSelectedMovie={fetchSelectedMovie}/>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

export default App
