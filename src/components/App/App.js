import './App.css'
import Home from '../Home/Home'
import Modal from '../Modal/Modal'
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls'
import rancidTomatilloLogo from '../../images/rancid-tomatillo.png';
import { Route, Routes, NavLink } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage'
import Nav from '../Nav/Nav'
import PropTypes from 'prop-types'

function App() {
  const [movies, setMovies] = useState([])
  const [topDescription, setTopDescription] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorPage, setShowErrorPage] = useState(false)

  useEffect(() => {
    fetchData('movies')
      .then(data => {
        setShowErrorPage(false)
        const sortedMovies = [...data.movies].sort((a, b) => b.average_rating - a.average_rating)
        const topMovie = sortedMovies[0]
        setMovies(data.movies) // Use the unsorted movies data to set state
        if (topMovie) {
          return fetchData(`movies/${topMovie.id}`)
        } else { setErrorMessage("Can't fetch the movie :(") }
      })
      .then(topMovieDescription => {
        setTopDescription(topMovieDescription.movie);
      })
      .catch(error => {
        setErrorMessage('404')
        setShowErrorPage(true)
        console.log(error.message)
      });
  }, []);

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
      {showErrorPage && (
        <ErrorPage error={errorMessage}/>
      )}
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home movies={movies} topDescription={topDescription} formatDate={formatDate} formatGenre={formatGenre} />} />
        <Route path='/:movieId' element={<Modal formatDate={formatDate} formatGenre={formatGenre} />} />
      </Routes>
    </main>
  );
}

export default App
