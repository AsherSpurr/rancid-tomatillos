import './Modal.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchSingleMovie } from '../../apiCalls'
import PropTypes from 'prop-types'

function Modal({ formatDate, formatGenre }) {
    const navigate = useNavigate()
    const [movie, setMovie] = useState({})
    const movieId = useParams().movieId

    useEffect(() => {
        fetchSingleMovie(movieId)
            .then(data => {
                if (data) {
                    setMovie(data.movie)
                }
            })
            .catch(error => { 
                console.log(error)
                navigate("/error", { replace: true })
            })
    }, [movieId, navigate])

    const backdrop = movie.backdrop_path
    const figBackground = {
        backgroundImage: 'url(' + backdrop + ')',
    }

    return (
        <dialog>
            <div className='background-overlay'>
                <img style={figBackground} alt=''></img>
            </div>
            <div className='dialog-contents'>
                <div className='movie-details'>
                    <h1>{movie.title}</h1>
                    <p className='overview'>{movie.overview}</p>
                    <dl className='deep-details'>
                        <div>
                            <dt className='details-title'>Rating:</dt>
                            <dd className='details-data'>{movie.average_rating}/10</dd>
                        </div>
                        <div>
                            <dt className='details-title'>Release Date:</dt>
                            {movie.release_date && (<dd className='details-data'>{formatDate(movie.release_date)}</dd>)}
                        </div>
                        <div>
                            <dt className='details-title'>Genre:</dt>
                            {movie.genres && (<dd className='details-data'>{formatGenre(movie.genres)}</dd>)}
                        </div>
                    </dl>
                    <button><Link to='/'>⃪ Back to home</Link></button>
                </div>
            </div>
        </dialog>
    )
}

Modal.propTypes = {
    formatDate: PropTypes.func.isRequired,
    formatGenre: PropTypes.func.isRequired,
};

export default Modal
