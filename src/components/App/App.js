import './App.css'
// import movieData from '../../movieData'
import Movies from '../Movies/Movies'
import TopMovie from '../TopMovie/TopMovie'
import Modal from '../Modal/Modal'
import { useState, useEffect} from 'react'
import { fetchData, fetchSingleMovie } from '../../apiCalls'
import rancidTomatilloLogo from '../../images/rancid-tomatillo.png';


function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState([])
  const [error, setError] = useState('')
  const [singleMovieId, setSingleMovieId] = useState(0)
  const [singleMovie, setSingleMovie] = useState({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchData('movies')
      .then(data => {
        const sortedMovies = [...data.movies].sort((a, b) => b.average_rating - a.average_rating)
        const topMovie = sortedMovies[0]
        setMovies(data.movies) // Use the unsorted movies data to set state
        if (topMovie) {
          return fetchData(`movies/${topMovie.id}`)
        }
        // throw new Error('No top movie found')
        setError("Can't fetch the movie :(")
      })
      .then(topMovieDescription => {
        setTopDescription(topMovieDescription.movie);
      })
      .catch(error => {
        setError('Oops! Something broke.')
        console.log(error.message)
      });
  }, []);

  function fetchSelectedMovie(movieId) {
    fetchSingleMovie(movieId)
    .then(data => {
      setSingleMovie(data.movie)
    })
  }

  function handleOpen(movieId) {
    setSingleMovieId(movieId)
    fetchSelectedMovie(movieId)
    setOpen(true)
  }

  function handleClose() {
    setSingleMovieId(0)
    setOpen(false)
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

function formatGenre(genres) { 
    return genres.join(" - ")
  }

  return (
    <main className="App">
      {!movies.length && (
        <div className="error-505">
          <img className="rancid-tomatillo-logo" src={rancidTomatilloLogo} alt="Rancid Tomatillo" />
          <h1>There was a glitch in the matrix..</h1>
          <div className='error-message'>
            <p>{error}. We now know about this issue and are working to fix it.</p>
            <p>In the meantime, here is what you can do:</p>
            <p>&nbsp;</p>
            <ul>
              <li><b>Refresh the page</b>(Sometimes this helps)</li>
              <li><b>Try again</b> in 30 minutes</li>
            </ul>
          </div>
        </div>
      )}
      <nav className="Nav-bar"></nav>
      {movies.length && (
        <>
          {singleMovieId !== 0 
            ? <Modal handleClose={handleClose} open={open} movie={singleMovie} formatDate={formatDate} formatGenre={formatGenre}/>
            : (<><TopMovie movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre}/>
              <Movies movies={movies} handleOpen={handleOpen}/></>)}
        </>
      )}
    </main>
  );
}

export default App
